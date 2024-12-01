import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5gb",
    },
  },
};

async function connectToDatabase() {
  const client = new MongoClient(process.env.USERS_DB_CONNECTION_URI, {
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
      const { createEmail, createUsername, createPassword } = req.body;

      db_client = await connectToDatabase();

      const collection = db_client
        .db(process.env.USERS_DB_NAME)
        .collection(process.env.USERS_DB_COLLECTION);

      const existingEmail = await collection.findOne({ createEmail });
      const existingUsername = await collection.findOne({ createUsername });

      if (existingEmail) {
        res.status(400).json({ error: "Email already in use." });
        return; // Exit early if email already exists
      }

      if (existingUsername) {
        res.status(400).json({ error: "Username already in use." });
        return; // Exit early if email already exists
      }

      // Hash the password before storing it in the database
      const hashedPassword = await bcrypt.hash(createPassword, 10); // Adjust salt rounds as needed

      const fullUserObj = {
        userPassword: createPassword,
      };

      const newUser = {
        createEmail,
        createUsername,
        createPassword: hashedPassword, // Store hashed password
        FOR_DEV_EYES_ONLY: fullUserObj,
      };

      await collection.insertOne(newUser);
      res.status(200).json({ message: "User created successfully!" });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error adding user to database: ", error);
    res.status(500).json({ error: "Failed to add user" });
  } finally {
    if (db_client) {
      await db_client.close();
      console.log("CLOSED connection to database");
    }
  }
}
