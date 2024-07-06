var users = [];


function search() {

    
    // Variáveis
    var username = document.getElementById('InputUserName').value
    var cell = document.getElementById('data');
    var alerta = document.getElementById('alert');

    var url = `https://api.github.com/users/${username}`
    

    $.getJSON(url, (user) => {
        alerta.innerHTML = '';
        cell.innerHTML = '';

        // Função que coloca os divs caso o user exista.
        change(user)


        // Array para diminuir a quantidade de document.getElementsById('nome do id') e não ficar repetitivo. 
        var data = [
            {a: doc1}, 
            {a: doc2},
            {a: doc3},
            {a: doc4},
        ]


        for(let doc of data) {
            // Coloca os dados do usuario para mostrar no 'data' ( document.getElementById('data') ). 
            cell.innerHTML +=  doc.a || ''; 
        }
        
        // Adiciona imagens pesquisadas anteriomente (Se for novo).
        isNew(user)? save(user) : null; 
        console.log(users)
        
        


    }).fail(() => {
        // Caso o user não exista.
        console.log("Error 404")
        alerta.innerHTML =
        `
        <div class="alert alert-danger text-danger-emphasis" role="alert">
            não encontrado!
        </div>
        `
        cell.innerHTML = ''; 
    })
}

function save(user){
    document.getElementById('avatar_url2').innerHTML += doc5 || ''; 
    users.push(user)
}

function isNew(user){
    return users.filter((u) => u.login === user.login).length == 0;

}
function change(user){

    


    doc1 = `<div>${user.name}</div>` || ''
    doc2 = `<div>${user.html_url}</div>` || ''
    doc3 = `<a href="${user.html_url}" ><img src="${user.avatar_url}" width="220" height="220" class="shadow rounded" alt="${user.name}"></a>` ||''
    doc4 = `<div> ${user.company? user.company : ''}</div>`
    doc5 = `<a href="${user.html_url}" > <img src="${user.avatar_url}" width="110" height="110" class="shadow rounded m-5" alt="${user.name}"> </a> ` || ''
    // Me divertir um pouco... :>


}