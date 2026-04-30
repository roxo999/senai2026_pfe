import express from 'express';
import { ClienteController } from './controllers/clienteController.js';
const app = express();
app.use(express.json());
//criaçao de um objeto da classe clienteController
const clienteController = new ClienteController();
const  clientesController = new ClienteController();
//const clienteControler= new ClienteController(clienteService);
//Rotas
app.post('/clientes', clienteController.criar);
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000 ");
});
