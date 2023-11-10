const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3003;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add this before server.use(router)
// server.use(
//   jsonServer.rewriter({
//     "/api/*": "/$1",
//   })
// );

// Use default router
server.use('/api/v1', router);

server.listen(port, () => {
  console.log(`JSON Server is running. http://localhost:${port}`);
});
