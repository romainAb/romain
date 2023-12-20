function f0(){
    let test = prompt("Merci d'inscrire une chaine de caractère ?")
    document.body.innerHTML = test;
}

function f1(){
    let a = 42;
    let b = 7569;
    let result = a+b;
    alert(result);
}

function f2(){
    let note1 = 11;
    let note2 = 9;
    let note3 = 16;
    let moyenne = (note1+note2+note3)/3;
    alert("La moyenne est de " + moyenne);
}

function f3(){
    let budget = 1553.89;
    let achats = 1554.76;
    if(budget >= achats){
        alert("Le budget ("+ budget +"€) permet de payer tous les achats ("+ achats +"€)");
    }else{
        alert("Le budget ("+ budget +"€) ne  permet pas de payer tous les achats ("+ achats +"€)");
    }
}

function f4(){
    let ht = prompt("Montant HT ?");
    let ttc = ht*1.2;
    document.body.innerText = ttc;
}

function f5(){
    let ht = prompt("Montant HT ?");
    let taux_tva = prompt("Taux TVA ?");
    let taux_tva_calcul = (taux_tva/100)+1;
    let ttc = ht*taux_tva_calcul;
    document.body.innerText = ttc;
}

function f6(){
    let ht = prompt("Montant HT ?");
    let taux_tva = prompt("Taux TVA ?");
    let ttc = ht*((taux_tva/100)+1);
    if(ttc>100){
        document.body.innerHTML = '<h1 style="color:red;">' + ttc + '</h1>'
    }else{
        document.body.innerHTML = '<h1 style="color:green;">' + ttc + '</h1>'
    }
}

function f7(){
    let element = document.getElementById("cocktail");
    element.innerHTML += "Long Island Iced Tea";
}

function f8(){
    for(let i = 10; i<=1000; i+=10){
        console.log(i);
    }
}




function f9(){
    let age = prompt("Quel est votre âge?");
    if(age>=18){
        alert('Vous êtes majeur!'); 
    } else {
        alert('Vous êtes mineur!');
    }
}

function f10(){
    let cp=77000;
    while(cp<=77999){
        console.log(cp);
        cp++;
    }
}
function f11(){
    let n=5
    let html='';
    for(let i= 1;i<=10;i++) {
        html=html+n+' x '+i+' = '+(n*i) + '<br/>'
    }
    document.body.innerHTML = html;
}

function f12(){
    let html='';
    for(let i=1;i<=5;i++ ) {
        for(let k=1;k<=i;k++){
            html=html+i;
        }
        html=html+'<br/>';
    }
    document.body.innerHTML=html;
}

function f13(){
    let html = '';
    let k = 0;

    while(k<=20){
        html = html + k + '<br/>'
        k = k + 2;
    }
    document.body.innerHTML = html;
}

function f14(){
    let tableau = '<table>';
    let lignes = 5;
    let colonnes = 3;

    for(let i=1; i<=lignes;i++){
        tableau = tableau + '<tr>';
        for(let k=1; k<=colonnes; k++){
            tableau = tableau + '<td>yolo<td>';
        }
    }
    tableau = tableau + '</table>';
    document.body.innerHTML = tableau;
}