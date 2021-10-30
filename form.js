

function contactar(event) {
    const botao = document.getElementById('botao');
    botao.addEventListener('click',(event)=>{
        event.preventDefault();
    })
}



function Enviar(){
    
let email = document.querySelector("#email").value;
let nome = document.querySelector("#nome").value;

     if(nome=="" || email==""){
        return alert("CAMPOS VAZIOS...! Insira os valores requeridos..!")
    }
    else if (nome === "") {
        alert("Preenche o campo nome!")
        
    }else if(!email.includes("@")) {
        alert("Introduza um email válido.")
        return 
        
    }else if (nome) {
        return alert('Obrigado sr(a) ' + nome + ' a sua mensagem foi enviada. Entrarei em contato assim que poder!');
    }
    

}
Enviar()





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
