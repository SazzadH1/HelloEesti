const Koa = require('koa');
const app = new Koa();

const mainRouter = require('./lib/routes/main-router');

const port = 3000;

app.use(mainRouter.routes());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});