import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Genis Agent HTML API",
    description: "A componenet of Genis Base Agent",
  },
  host: "localhost:5000",
};

const outputFile = "swagger-output.json";
const routes = ["./src/server.ts"];

swaggerAutogen()(outputFile, routes, doc);
