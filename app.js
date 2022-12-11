const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://Admin:Sennin96@graphcluster.j2t9bko.mongodb.net/test"
);
mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

const port = process.env.APP_PORT || 4000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`now listening for request on port ${port}`);
});
