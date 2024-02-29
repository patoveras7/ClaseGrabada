const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const errorHandler = require('./src/middlewares/errorHandler');
const productoRoutes = require('./src/routes/producto.routes');
const categoriaRoutes = require('./src/routes/categoria.routes');
const clienteRoutes = require('./src/routes/cliente.routes');
const pedidoRoutes = require('./src/routes/pedido.routes');
const usuarioRoutes = require('./src/routes/usuario.routes');

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/tienda', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(bodyParser.json());
app.use(errorHandler);

// Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/pedidos', pedidoRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
