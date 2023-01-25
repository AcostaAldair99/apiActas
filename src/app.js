import express from 'express';
import morgan from 'morgan';
const app=express();

//Routes
import RouterActas from "./routes/actas.route"
import RouterAuth from "./routes/signIn.route"
import RouterSinoidales from "./routes/sinoidales.route"




//Middlewares
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use("/api",RouterActas);
app.use("/api",RouterSinoidales)
app.use("/auth",RouterAuth);

export default app;