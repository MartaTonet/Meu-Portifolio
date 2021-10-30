function link(url){
    let req =  new XMLHttpRequest();
    req.open("GET",url,false);
    req.send();
    
    return req.responseText;
}

function Lista(usuario) {
    let linha = document.createElement("tr");
    let RepoNome = document.createElement("td");
    RepoNome.innerHTML = usuario.name;
    linha.appendChild(RepoNome)
    
    return linha;
}

function principal(){
    let user = link('https://api.github.com/users/MartaTonet/repos')

    //criando tabela para mostrar os repsoitorios

    let tabela = document.getElementById("tabela")

    let repositorioUser= JSON.parse(user);
    // console.log(repositorioUser)
    repositorioUser.forEach(element => {
        let linha =  Lista(element);
        tabela.appendChild(linha);


    });
}
principal()