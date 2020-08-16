import express from 'express';
import cors from 'cors';
import Routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`)
});
