function calcul_moyenne(){
    var n1=prompt("Donnez la première note: ");
    var n2=prompt("Donnez la deuxième note: ");
    var n3=prompt("Donnez la troisième note: ");

    var somme = Number(n1)+Number(n2)+Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3

    document.write("Voici la moyenne : " + moyenne + "<br>");
    if(moyenne<10){
        document.write("Vous n'êtes pas admis");
    }else{
        document.write("Vous êtes admis");
    }
}

function test_age(){
    var age = prompt("Quel est votre âge ?");
    if(age < 18){
        document.write("Vous êtes mineur");
        document.body.style.backgroundColor = "red";
    }else{
        document.write("Vous êtes majeur");
        document.body.style.backgroundColor = "green";
    }
}

function simple_affichage(){
    var prenom = prompt("Quel est votrez prénom ? : ");
    var nom = prompt("Quel est votre nom ?");

    document.write("<div id='div'>" + prenom + " " + nom + "</div>");
    var element = document.getElementById("div");
    element.style.margin = "auto";
    element.style.width = "300px";
    element.style.border = "3px solid blue";
    element.style.textAlign = "center";
    
}

function test_couleur(){
    var couleur = prompt("Choisssez une couleur : ")
    document.body.style.backgroundColor = couleur;
}