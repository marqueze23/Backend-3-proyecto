const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const rolRoute = require("./routes/rol");
const sucursalesRoute = require("./routes/sucursales");
const pagoRoute = require("./routes/pago");
const productosRoute = require("./routes/productos");
const ventasRoute = require("./routes/ventas");
require("dotenv").config();

// configuraciones
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", rolRoute);
app.use("/api", sucursalesRoute);
app.use("/api", pagoRoute);
app.use("/api", productosRoute);
app.use("/api", ventasRoute);

// routes
app.get("/", (req, res) => {
  res.send("Bienvenido a mi api");
});

// conexion a mongo
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conecto a MongoDB Atlas"))
  .catch((error) => console.error(error));

// servidor escuchando desde el puerto
app.listen(port, () => console.log("Servidor escuchando en el puerto:", port));