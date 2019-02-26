import dotenv from 'dotenv';
import Koa from 'koa';

dotenv.config();

const app = new Koa();

app.use(function index(ctx) {
    console.log('Hello Unite updated!!!!! 👋')
    ctx.body = 'Hello Unite updated!! 👋';
});

export default app;