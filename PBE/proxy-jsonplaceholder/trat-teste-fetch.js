async function main(){
    try{
        /*
        Objetivo: buscar api/posts do servidor express (localhost:3000)
        Signal timeout: cancela a requisição se demorar mais do que 5 segundos
        */
        const resp = await fetch("http://localhost:3000/api/posts", {
            signal: AbortSignal.timeout(5000)
        });

        if(!resp.ok){
            // Se falhar ao ler o corpo (body), usa string vazia
            const body = await resp.text().catch(()=>"");

            //Lançar erro manualmente para cair no catch
            // Monta uma mensagem com status + statusText + body
            throw new Error(`HTTP ${resp.status} ${resp.statusText} | ${body}`);
        }
        //Converter o corpo da resposta para json(depois do ok)
        const json = await resp.json();

        console.log("Count: ", json.data.posts.length);
        console.log(json.data.posts[0]);
    }catch(error){

    }
}
   
main();