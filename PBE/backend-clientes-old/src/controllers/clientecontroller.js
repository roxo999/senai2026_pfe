import {createClienteDTO} from "../dtos/createClienteDTO.js";

export class ClienteController{
    constructor(clienteService){
        this.clienteService = clienteService;
    }

    listar = (req, res) => {
        try {
            const clientes = this.clienteService.listarClientes();
            return res.status(200).json(clientes);
        } catch (er){
            return res.status(500).json({erro : er.message});
        }
    };

    criar = (req, res) => {
        try{
            const dto = createClienteDTO(req.body);
            const clienteCriado = this.clienteService.cadastrarCliente(dto)
           
            return res.status(201).json({
                mensagem : "cliente recebido com sucesso",
                cliente : dto
            })

        } catch(er){
            console.log("erro ao cadastrar cliente",er.message)

            return res.status(400).json({erro : er.message})
        }
    };
}
   