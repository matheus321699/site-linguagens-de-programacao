function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}


function cadastraUsuario() {

    var id = null

    event.preventDefault()
    let url = "https://api-site-programacao.herokuapp.com/usuarios"
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    console.log(name)   
    
    console.log(email)
    console.log(password)

    body = {
        "id": id,
        "nome": name,
        "email": email,
        "senha": password
    }

    fazPost(url, body)
    alert("Seu cadastro foi realizado com sucesso!")
}