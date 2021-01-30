function nomainiLaukus() {
    var x = document.getElementById("tehnika").value;  
    document.getElementById("datortehnika").innerHTML = x;
    switch  (x){
        case 'dators':
        document.getElementById("bnos9").textContent = "procesors";
        document.getElementById("bnos10").textContent = "ram";
        document.getElementById("nos11").textContent = "hdd";
        document.getElementById("nos12").textContent = "programmatūra";
        break;
        case 'monitors':
        document.getElementById("nos9").textContent = "tips";
        document.getElementById("nos10").textContent = "izmērs";
        document.getElementById("nos11").textContent = "video ieejas";
        document.getElementById("nos12").textContent = "skaņa";
        break;
        case 'printeris':
        document.getElementById("nos9").textContent = "tips";
        document.getElementById("nos10").textContent = "pieslēgums";
        document.getElementById("nos11").textContent = "papīra izmērs";
        document.getElementById("nos12").textContent = "toneris";
        break;
    }
    }

