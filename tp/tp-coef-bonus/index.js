function calculer(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("c1").value;
    var c = Number(a)*Number(b);

    var d = document.getElementById("n2").value;
    var e = document.getElementById("c2").value;
    var f = Number(d)*Number(e);

    var g = document.getElementById("n3").value;
    var h = document.getElementById("c3").value;
    var i = Number(g)*Number(h);

    var j = (Number(c)+Number(f)+Number(i))/(Number(b)+Number(e)+Number(h));
    r1.value = j;

    if(j < 10){
        r2.value = "redoublant";
    }else if(j < 12){
        r2.value = "admis passable";
    }else if(j < 14){
        r2.value = "admis assez bien";
    }else if(j < 16){
        r2.value = "admis bien";
    }else if(j < 20){
        r2.value = "admis très bien";
    }else{
        r2.value = "erreur";
    }
}