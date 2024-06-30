const express = require("express");
const colors = require("colors");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectToDB = require("./config/db");

const app = express();
connectToDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`port:${port}`));
