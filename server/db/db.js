const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/file_upload_download", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
