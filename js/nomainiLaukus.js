function nomainiLaukus() {
    var x = document.getElementById("tehnika").value;  
    document.getElementById("datortehnika").innerHTML = x;
    
    switch  (x){
        case 'dators':
            document.querySelector("#dators").className = "radit";
            document.querySelector("#printeris").className = "neradit"; 
            document.querySelector("#monitors").className = "neradit";
            document.querySelector("#projektors").className = "neradit";
            document.querySelector("#kopetajs").className = "neradit";
            document.querySelector("#skandas").className = "neradit";
        break;
        case 'monitors':
            document.querySelector("#dators").className = "neradit";
            document.querySelector("#printeris").className = "neradit";
            document.querySelector("#monitors").className = "radit";
            document.querySelector("#projektors").className = "neradit";
            document.querySelector("#kopetajs").className = "neradit";
            document.querySelector("#skandas").className = "neradit";
        break;
        case 'printeris':
            document.querySelector("#dators").className = "neradit";
            document.querySelector("#printeris").className = "radit";
            document.querySelector("#monitors").className = "neradit";
            document.querySelector("#projektors").className = "neradit";
            document.querySelector("#kopetajs").className = "neradit";
            document.querySelector("#skandas").className = "neradit";
        break;
        case 'projektors':
            document.querySelector("#dators").className = "neradit";
            document.querySelector("#printeris").className = "neradit";
            document.querySelector("#monitors").className = "neradit";
            document.querySelector("#projektors").className = "radit";
            document.querySelector("#kopetajs").className = "neradit";
            document.querySelector("#skandas").className = "neradit";
        break;
        case 'kopetajs':
            document.querySelector("#dators").className = "neradit";
            document.querySelector("#printeris").className = "neradit";
            document.querySelector("#monitors").className = "neradit";
            document.querySelector("#projektors").className = "neradit";
            document.querySelector("#kopetajs").className = "radit";
            document.querySelector("#skandas").className = "neradit";
        break;
        case 'skandas':
            document.querySelector("#dators").className = "neradit";
            document.querySelector("#printeris").className = "neradit";
            document.querySelector("#monitors").className = "neradit";
            document.querySelector("#projektors").className = "neradit";
            document.querySelector("#kopetajs").className = "neradit";
            document.querySelector("#skandas").className = "radit";
        break;
    }
    }

