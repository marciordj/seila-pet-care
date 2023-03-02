import fastify from "fastify";

const app = fastify();

app.get("/", (request, reply) => {
  return reply.send("foi");
});

app.listen({ port: 3333 }).then(() => console.log("Server startedddd"));
