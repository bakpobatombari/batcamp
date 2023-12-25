function login(){
    let username = document.getElementById("Username").value; 
    let password = document.getElementById("password").value;
    let text = document.getElementById("gotten");
    let form = document.getElementById("form");
    let error = document.getElementById("error");

    if(username === "" || password === ""){
        error.style.display ="block";
        form.style.display = "none";
    }
    else if(username === "batombari" && password === "bat" || username === "baridilo" && password === "catapus"){
     form.style.display = "none";
     error.style.display = "none";
     text.innerHTML = "Welcome back " + username;
     document.getElementById("webnav").style.position = "fixed";
    }else{
        error.style.display = "block";
        form.style.display = "none";
    }
}
function tryAgain(){
    document.getElementById("form").style.display = "block";
    document.getElementById("error").style.display = "none";
}