function nomainiLaukus() {
    var x = document.getElementById("tehnika").value;  
    document.getElementById("datortehnika").innerHTML = x;
    switch  (x){
        case 'dators':
            document.querySelector("#dators").className = "radit";
            document.querySelector("#printeris").className = "neradit"; 
            document.querySelector("#monitors").className = "neradit";
        break;
        case 'monitors':
            document.querySelector("#dators").className = "neradit";
            document.querySelector("#printeris").className = "radit";
            document.querySelector("#monitors").className = "neradit";
        break;
        case 'printeris':
            document.querySelector("#dators").className = "neradit";
            document.querySelector("#printeris").className = "neradit";
            document.querySelector("#monitors").className = "radit";
        //let tests=document.querySelector("#inos12").name;
        //document.getElementById("bnos13").textContent = tests;
        break;
    }
    }

