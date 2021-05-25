import sharp from "sharp";
const reduceBase64 = async (req, res, next) => {
  const { selectedFile } = req.body;
  if (selectedFile !== undefined) {
    let parts = selectedFile.split(";");
    let mimType = parts[0].split(":")[1];
    let imageData = parts[1].split(",")[1];
    let resizedBase64;
    var img = Buffer.from(imageData, "base64");
    sharp(img)
      .resize(320, 170)
      .toBuffer()
      .then((resizedImageBuffer) => {
        let resizedImageData = resizedImageBuffer.toString("base64");
        resizedBase64 = `data:${mimType};base64,${resizedImageData}`;
        req.body = {
          ...req.body,
          selectedFile: resizedBase64,
        };
        next();
      })
      .catch((error) => {
        res.send(error);
      });
  } else {
    next();
  }
  // next();
};

export default reduceBase64;
