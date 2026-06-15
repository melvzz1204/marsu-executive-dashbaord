require("dotenv").config();
const cors = require("cors");
const connectDB = require("../backend/src/config/db");

const app = require("./src/app");
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
