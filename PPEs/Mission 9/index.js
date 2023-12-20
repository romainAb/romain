function calculer(){
    var l11 = document.getElementById("t1.1").value;
    var l12 = document.getElementById("t1.2").value;
    tt1.value = Number(l11)*Number(l12);

    var l21 = document.getElementById("t2.1").value;
    var l22 = document.getElementById("t2.2").value;
    tt2.value = Number(l21)*Number(l22);

    var l31 = document.getElementById("t3.1").value;
    var l32 = document.getElementById("t3.2").value;
    tt3.value = Number(l31)*Number(l32);

    var l41 = document.getElementById("t4.1").value;
    var l42 = document.getElementById("t4.2").value;
    tt4.value = Number(l41)*Number(l42);

    var l51 = document.getElementById("t5.1").value;
    var l52 = document.getElementById("t5.2").value;
    tt5.value = Number(l51)*Number(l52);


    var sousTotal = Number(l11)*Number(l12)+Number(l21)*Number(l22)+Number(l31)*Number(l32)+Number(l41)*Number(l42)+Number(l51)*Number(l52);
    calc1.value = sousTotal;

    var remise = document.getElementById("calc2").value;
    var sTMRemise = sousTotal-(sousTotal*remise);
    calc3.value = sTMRemise;

    var tauxImpo = document.getElementById("calc4").value;
    var taxeTT = sousTotal*tauxImpo;
    calc5.value = taxeTT;

    var expe = document.getElementById("calc6").value;
    calc7.value = sTMRemise+taxeTT+expe;


}

function reinitialiser(){
    window.location.reload();
}