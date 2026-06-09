require("dotenv").config();
const cors = require("cors");
const connectDB = require("../backend/src/config/db");

const app = require("./src/app"); // Adjust path if server.js and app.js are in different folders

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
