function search(){
    
    var username = document.getElementById('InputUserName').value
    var url = `https://api.github.com/users/${username}`
    $.getJSON(url, (user) =>{
        console.log(user.avatar_url)
        document.getElementById('name').innerHTML = user.name
        document.getElementById('html_url').innerHTML  = user.html_url
        document.getElementById('company').innerHTML  = user.company
        document.getElementById('avatar_url').innerHTML  = 
        `
        <img src="${user.avatar_url}" width="220"
                    height="220" class="shadow rounded" alt="${user.name}">
        
        `

        
        document.getElementById('avatar_url2').innerHTML +=
        `
        <img src="${user.avatar_url}" width="110"
                    height="110" class="shadow rounded m-5" alt="${user.name}">
        
        `	

    })
}