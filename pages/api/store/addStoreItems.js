import { MongoClient } from "mongodb";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5gb",
    },
  },
};

async function connectToDatabase() {
  const client = new MongoClient(process.env.STORE_PRODUCTS_DB_CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  return client; // Return the MongoClient instance directly
}

export default async function handler(req, res) {
  let db_client = null;

  try {
    if (req.method === "POST") {
      const { productName, productDesc, productPrice } = req.body;

      db_client = await connectToDatabase();

      const collection = db_client
        .db(process.env.STORE_PRODUCTS_DB_NAME)
        .collection(process.env.STORE_PRODUCTS_DB_COLLECTION);

      const existingProduct = await collection.findOne({ productName });

      if (existingProduct) {
        res.status(400).json({ error: "That product has already be made." });
        return; // Exit early if email already exists
      }

      const fullProductObj = {
        productName: productName,
        productDesc: productDesc,
        productPrice: productPrice,
      };

      const newProduct = {
        productName,
        productDesc,
        productPrice,
        FOR_DEV_EYES_ONLY: fullProductObj,
      };

      await collection.insertOne(newProduct);
      res.status(200).json({ message: "Product created successfully!" });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error adding user to database: ", error);
    res.status(500).json({ error: "Failed to add product" });
  } finally {
    if (db_client) {
      await db_client.close();
      console.log("CLOSED connection to database");
    }
  }
}
