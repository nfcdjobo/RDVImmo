

document.getElementById("creerCompte").addEventListener("click", creerCompte);
function creerCompte(event) {

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const errorEmail = document.getElementById("error-email");

    const errorPassword = document.getElementById("error-password");

   
        if (email.value.replaceAll(" ", "") != "") {
            errorEmail.value = "";
            if (password.value.replaceAll(" ", "") != "") {
               let session = {
                   email: email.value,
                   password: password.value,
               }
               sessionStorage.setItem("SESSION", JSON.parse(session));
                if(localStorage.USERS){
                    const USERS =JSON.parse(localStorage.USERS);
                    if (USERS.find(cle => cle.email == session.email && cle.password == session.password)){
                        window.location.href = "https://othniel-francky.github.io/Rendez-vous/";
                    }else{
                        sessionStorage.clear();
                        errorPassword.textContent = "Email ou mot de passe incorrecte."
                    }
                }
                if (localStorage.ADMIN){
                    const ADMIN = JSON.parse(localStorage.ADMIN);
                    if (ADMIN.find(cle => cle.email == session.email && cle.password == session.password)) {
                        window.location.href = "https://othniel-francky.github.io/Rendez-vous/";
                    } else {
                        sessionStorage.clear();
                        errorPassword.textContent = "Email ou mot de passe incorrecte."
                    }
                }
            } else {
                password.focus();
                confirmeEmail.value = "";
                errorPassword.textContent = "Mot de passe incorrecte";
            }
        } else {
            email.focus();
            email.value = "";
            errorEmail.textContent = "Champs obligatoire";
        }
}
