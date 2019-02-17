import bodyParser from 'body-parser';
import express from 'express';
import routes from 'routes';
import { connect } from 'mongoose';
import cors from 'middlewares/cors';


const app = express();

app.use(bodyParser());
app.use(cors);

connect(process.env.MONGODB_HOST, { useNewUrlParser: true });

routes(app);

app.listen(process.env.PORT, () => console.log('>>> APP LISTENING <<<'));
