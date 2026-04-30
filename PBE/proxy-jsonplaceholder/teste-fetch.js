async function main() {
    const resp = await fetch("https://dummyjson.com/posts");
    const json = await resp.json();

    if (Array.isArray(json)) {
        console.log("Trata-se de um array/vetor");
        console.log(json);
    } else {
        console.log("Trata-se de um Objeto");
        //Retorna todos os objetos
        //console.log(json.posts);

        //retorna apenas um objeto posts[0]
        //console.log(json.posts[0]);

        //retorna o atributo body do objeto posts[0]
        console.log(json.posts[0].body);
    }

    //console.log(json.length);
    //console.log(json[0]);
    //console.log("URL: ",json[0].url);
}

main();