

document.getElementById("creerCompte").addEventListener("click", creerCompte);
function creerCompte(event) {

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const errorEmail = document.getElementById("error-email");

    const errorPassword = document.getElementById("error-password");

   
        if (email.value.replaceAll(" ", "") != "") {
            errorEmail.value = "";
            if (password.value.replaceAll(" ", "") != "") {
                
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
