import swaggerAutogen from "swagger-autogen";

const doc = {
  version: "0.0.1",
  info: {
    title: "My API",
    description: "Description",
  },
};

const outputFile = "./swagger-docs.json";
const routes = ["./routes.js"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc);
