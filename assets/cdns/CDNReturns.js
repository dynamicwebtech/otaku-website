/**
 *
 *  This is the CDN Returns
 *
 */

import { ASSETS_SERVER } from "../GLOBAL_VARIABLES";

function CDNBGReturn(bgSub, bgSubFile, fileExt) {
  let bgSrc;

  if (bgSub) {
    if (bgSubFile) {
      if (fileExt) {
        bgSrc =
          ASSETS_SERVER + "bgs/" + bgSub + "/" + bgSubFile + "." + fileExt;
      }
    }
  }

  return bgSrc;
}

function CDNIconReturn(iconSub, iconSubFile, fileExt) {
  let iconSrc;

  if (iconSub) {
    if (iconSubFile) {
      if (fileExt) {
        iconSrc =
          ASSETS_SERVER +
          "icons/" +
          iconSub +
          "/" +
          iconSubFile +
          "." +
          fileExt;
      }
    }
  }

  return iconSrc;
}

function CDNImgReturn(imgSub, imgSubFile, fileExt) {
  let imgSrc;

  if (imgSub) {
    if (imgSubFile) {
      if (fileExt) {
        imgSrc =
          ASSETS_SERVER + "imgs/" + imgSub + "/" + imgSubFile + "." + fileExt;
      }
    }
  }

  return imgSrc;
}

export { CDNBGReturn, CDNIconReturn, CDNImgReturn }; // CDNImgReturn };
