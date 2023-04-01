
if (sessionStorage.SESSION){
    window.location.href = "https://othniel-francky.github.io/Rendez-vous/";
}
document.getElementById("creerCompte").addEventListener("click", creerCompte);
function creerCompte(event) {

    const nom = document.getElementById("nom");
    const email = document.getElementById("email");
    const confirmeEmail = document.getElementById("email-confirm");
    const password = document.getElementById("password");
    const confirmePassword = document.getElementById("password-confirm");
    
    const errorNom = document.getElementById("error-nom");
    const errorEmail = document.getElementById("error-email");
    const errorConfirmEmail = document.getElementById("error-email-confirm");
    const errorPassword = document.getElementById("error-password");
    const errorConfirmPassword = document.getElementById("error-password-confirm");

    const statut = document.getElementById("statut");

    if (nom.value.replaceAll(" ", "") != "") {
        errorNom.value = "";
        if (email.value.replaceAll(" ", "") != "") {
            errorEmail.value = "";
            if (confirmeEmail.value.replaceAll(" ", "") != "") {
                errorEmail.value = "";
                if (confirmeEmail.value == email.value) {
                    errorConfirmEmail.value = "";
                    if (password.value.replaceAll(" ", "") != "") {
                        errorPassword.value = "";
                        if (confirmePassword.value.replaceAll(" ", "") != "") {
                            errorConfirmPassword.value = "";
                            if (confirmePassword.value == password.value) {
                                errorConfirmPassword.value = "";
                                const data = [];
                                if (statut.textContent == "admin") {
                                    const requette = JSON.parse(localStorage.getItem("ADMIN"));
                                    const admin = {
                                        id: "",
                                        nom: nom.value,
                                        email: email.value,
                                        password: password.value,
                                        statut: 1
                                    }
                                    if (requette) {
                                        const recherche = requette.find(cle => cle.email == email.value);
                                        if (!recherche) {
                                            user.id = "ADMIN" + (recherche + 1);
                                            requette.push(user);
                                            localStorage.setItem("ADMIN", JSON.stringify(requette));
                                            alert("Compte créé avec succès");
                                            window.location.href = "https://nfcdjobo.github.io/RDVImmo/authentification/admin-login.html";
                                        } else {
                                            alert("Ce compte est déjà utilisé");
                                        }

                                    } else {
                                        user.id = "ADMIN1";
                                        data.push(admin);
                                        localStorage.setItem("ADMIN", JSON.stringify(data));
                                        alert("Compte créé avec succès");
                                        window.location.href = "https://nfcdjobo.github.io/RDVImmo/authentification/admin-login.html";
                                    }
                                }else{
                                    const requette = JSON.parse(localStorage.getItem("USERS"));
                                    const user = {
                                        id: "",
                                        nom: nom.value,
                                        email: email.value,
                                        password: password.value,
                                        statut: 1
                                    };
                                    if (requette) {
                                        const recherche = requette.find(cle => cle.email == email.value);
                                        if (!recherche) {
                                            user.id = "USER" + (recherche+1);
                                            requette.push(user);
                                            localStorage.setItem("USERS", JSON.stringify(requette));
                                            alert("Compte créé avec succès");
                                            window.location.href = "./login.html";
                                        }else{
                                            window.location.href = "https://nfcdjobo.github.io/RDVImmo/authentification/login.html";
                                        }
                                            
                                        
                                    } else {
                                        user.id = "USER1";
                                        data.push(user);
                                        localStorage.setItem("USERS", JSON.stringify(data));
                                        alert("Compte créé avec succès");
                                        window.location.href = "https://nfcdjobo.github.io/RDVImmo/authentification/login.html";
                                    }
                                }
                                

                                nom.value = "";
                                email.value = "";
                                confirmeEmail.value = "";
                                password.value = "";
                                confirmePassword.value = "";
                                errorNom.textContent = "";
                                errorEmail.textContent = "";
                                errorConfirmEmail.textContent = "";
                                errorPassword.textContent = "";
                                errorConfirmPassword.textContent = "";
                            } else {
                                confirmePassword.focus();
                                errorConfirmPassword.textContent = "Le mot de passe de confirmation n'est pas correcte";
                            }
                        } else {
                            confirmePassword.focus();
                            errorConfirmPassword.textContent = "Champs obligatoire";
                        }
                    } else {
                        confirmePassword.focus();
                        confirmePassword.value = "";
                        errorPassword.textContent = "Champs obligatoire";
                    }
                } else {
                    confirmeEmail.focus();
                    errorConfirmEmail.textContent = "L'email de confirmation n'est pas conforme";
                }
            } else {
                confirmeEmail.focus();
                confirmeEmail.value = "";
                errorConfirmEmail.textContent = "Champs obligatoire";
            }
        } else {
            email.focus();
            email.value = "";
            errorEmail.textContent = "Champs obligatoire";
        }
    } else {
        nom.focus();
        nom.value = "";
        errorNom.textContent = "Champs obligatoire";
    }
}

document.getElementById("annuler").addEventListener("click", annuler);
function annuler(){
    location.reload();
}

