const mongoose = require("mongoose");

const connectToDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`\nConnected to DB: ${conn.connection.host}\n`.yellow.underline.bold);
};

module.exports = connectToDB;
