
// function fazpost(url, body){

// }

// function contactar() {
//     event.preventDefault()

// }

function Enviar() {

    var mensagem = document.getElementById("nome").value;
    let email = document.querySelector("#email").value;
    let nome = document.querySelector("#nome").value;

     if(nome==="" || email===""){
        alert("CAMPOS VAZIOS...! Insira os valores requeridos..!")
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
