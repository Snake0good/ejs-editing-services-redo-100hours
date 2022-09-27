const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    // if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
    if (ext !== ".pdf" && ext !== ".doc" && ext !== ".docx") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
