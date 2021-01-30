function nomainiLaukus() {
    var x = document.getElementById("tehnika").value;  
    document.getElementById("datortehnika").innerHTML = x;
    switch  (x){
        case 'dators':
        document.getElementById("bnos9").textContent = "procesors";
        document.getElementById("bnos10").textContent = "ram";
        document.getElementById("bnos11").textContent = "hdd";
        document.getElementById("bnos12").textContent = "programmatūra";
        break;
        case 'monitors':
        document.getElementById("bnos9").textContent = "tips";
        document.getElementById("bnos10").textContent = "izmērs";
        document.getElementById("bnos11").textContent = "video ieejas";
        document.getElementById("bnos12").textContent = "skaņa";
        break;
        case 'printeris':
        document.getElementById("bnos9").textContent = "tips";
        document.getElementById("bnos10").textContent = "pieslēgums";
        document.getElementById("bnos11").textContent = "papīra izmērs";
        document.getElementById("bnos12").textContent = "toneris";
        break;
    }
    }

