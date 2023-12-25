function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }
  function register(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").valaue;
    let password = document.getElementById("pass").value;
    let repassword = document.getElementById("Re-password").value;
    let error = document.getElementById("eror");
    let use = document.getElementById("use");

    if(firstname === "" && lastname === "" && email === "" && password === "" && repassword === "" ||repassword === "" || firstname === "" || lastname === "" || email === "" || password === ""){
      error.innerHTML = "***Plese fill In The Fields***";
    }
    else{
      alert("Account Created");
      document.getElementById("container-form").style.display = "none";
      document.getElementById("body").style.display = "block";
      document.title("Homepgae");
      use.innerHTML = firstname;
    }
  }
  function sign(){
    document.getElementById("form").style.display = "none";
    document.getElementById("form-register").style.display = "block";
     document.title = "Sign Up";
  }
  function log(){
    document.getElementById("form").style.display = "block";
    document.getElementById("form-register").style.display = "none";
    document.title = "login";
  }
  function login(){
    let username = document.getElementById("Username");
    let password = document.getElementById("password");
    let error = document.getElementById("err");
    let use = document.getElementById("use");

    if(username.value === "" && password.value === "" || username.value === "" || password.value === ""){
        error.innerHTML = "***Please Fill in the Fields***";
 
    }
    else{
        alert("WELCOME BACK " + username.value)
        document.getElementById("container-form").style.display = "none";
        document.getElementById("body").style.display = "block";
        document.title("Homepgae");
        use.innerHTML = username.value;
    }
  }