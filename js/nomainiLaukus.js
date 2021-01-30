function nomainiLaukus() {
    var x = document.getElementById("tehnika").value;  
    document.getElementById("datortehnika").innerHTML = x;
    switch  (x){
        case 'dators':
        document.getElementById("bnos9").textContent = "procesors";
        document.querySelector("#inos9").name="procesors";
        document.getElementById("bnos10").textContent = "ram";
        document.querySelector("#inos10").name="ram";
        document.getElementById("bnos11").textContent = "hdd";
        document.querySelector("#inos11").name="hdd";
        document.getElementById("bnos12").textContent = "programmatūra";
        document.querySelector("#inos12").name="programmatura";
        break;
        case 'monitors':
        document.getElementById("bnos9").textContent = "tips";
        document.querySelector("#inos9").name="mtips";
        document.getElementById("bnos10").textContent = "izmērs";
        document.querySelector("#inos10").name="izmers";
        document.getElementById("bnos11").textContent = "video ieejas";
        document.querySelector("#inos11").name="videoIeejas";
        document.getElementById("bnos12").textContent = "skaņa";
        document.querySelector("#inos12").name="skana";
        break;
        case 'printeris':
        document.getElementById("bnos9").textContent = "tips";
        document.querySelector("#inos9").name="ptips";
        document.getElementById("bnos10").textContent = "pieslēgums";
        document.querySelector("#inos10").name="pieslegums";
        document.getElementById("bnos11").textContent = "papīra izmērs";
        document.querySelector("#inos11").name="papiraIzmers";
        document.getElementById("bnos12").textContent = "toneris";
        document.querySelector("#inos12").name="toneris";
        break;
    }
    }

