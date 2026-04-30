//[F1] Carregar dependências ---------------------
//Express: cria servidor e rotas
const express= require("express");

//Axios: faz requisições HTTP para APIs externas
const axios= require("axios");

// cors: libera p front-end (outras origens) acessarem este back-end
const cors= require("cors");

//[F2] Criar a aplicação (instância do servidor)--------------
const app = express();

//[F3] Configurar middlewares globais(para todas as rotas)----------
//Habilitar cors (evita bloqueio do navegador por Same-Origin policy)
app.use(cors());

//Habilitar JSON no body (permitir ler req.body em requisições com Json)
app.use(express.json());

//[F4] Definir configurações/constantes do projeto
//BASE_URL= endereço da API externa que este servidor vai "proxiar"
const BASE_URL="https://dummyjson.com";

//[F5] Rotas básicas(raiz e status)---------------------
//Rota de status (heathcheck)
//Objetivo: Teste rápido para saber se o servidor está no ar
//GET/health->{ok:true}
app.get("/health", (req,res)=> {
    res.json({ok: true});
});



// Rota raiz(home)
//Objetivo: Mensagem amigável+ lista de rotas disponíveis
//GET/-> HTML simples
app.get("/", (req, res)=>{
    res.status(200).send(`
        <h1>Minha API está no ar\u2705</h1>
        <p>Rotas disponíveis</p>
        <ul>
            <li><a href="/health">/health</a></li>
            <li><a href="/api/posts">/api/posts</a></li>
        </ul>
     `);
});

//[F6] Rota Principal(proxy de posts)
//[F6.1] Receber requisição do cliente
//GET/ api/posts-> busca posts na API externa e desenvolve em um formato padronizado

app.get("/api/posts", async(req, res)=>{
    try{
        //[F6.2] Consumir API externa (chamar BASE_URL/posts)
        const response= await axios.get(`${BASE_URL}/posts`);

        //[F6.3] Mostrar a resposta de sucesso(envelope padronizado)
        //source: identifica a origem dos dados
        //count: quantidade de itens recebidos
        // data: lista de posts
        res.status(200).json({
            source: "dummyjson",
            count: response.data.length,
            data: response.data
        })

    }catch(err){
        //[F6.4] Tratamento de falha ao consultar a API externa
        //502 Bad gayeway="meu servidor não conseguiu obter resposta válida do servidor"
        res.status(502).json({
            message: "Falha ao consultar a API",
            detail: err.message
        })
    }
});

//[F7] Iniciar o servidor
//Sobe o servidor na porta 3000 e imprime uma mensagem amigável
app.listen(3000, ()=> console.log("API proxy rodando em http://localhost:3000"));