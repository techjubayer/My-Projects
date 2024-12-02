const express = require("express");
const path = require("path");
const multer = require("multer");
const app = express();

// Multer functions---------START
const fileLocation = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const fileExtension = file.originalname.split(".").pop();
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}.${fileExtension}`);
  },
});

function profileFilter(req, file, cb) {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
}

const upload = multer({
  storage: fileLocation,
  fileFilter: profileFilter,
  limits: {
    fieldNameSize: 100,
    fileSize: 1 * 1024 * 1024,
  },
});
// Multer functions---------START

app.set("view engine", "ejs");
app.set("views", path.resolve("./public"));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.render("home");
});

app.post("/upload/single", upload.single("singleFile"), (req, res) => {
  try {
    console.log(req.body, req.file);
    return res.json(req.file);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
app.post(
  "/upload/multiple",
  upload.fields([
    { name: "singleFile", maxCount: 1 },
    { name: "multiFile", maxCount: 8 },
  ]),
  (req, res) => {
    try {
      console.log(req.body, req.file);
      return res.json(req.files);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
);

// Globel error handle Middleware-----It must be here, not above
app.use((err, req, res, next) => {
  if (err) {
    return res.status(400).json({ error: err.message });
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
