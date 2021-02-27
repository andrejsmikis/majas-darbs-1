async function pievieno_tehniku()
{
let requestBodyJson; 
let tehnikasIzvele=document.querySelector('#tehnika').value;
switch (true){
  case tehnikasIzvele == "dators"  :
    requestBodyJson = {
      // "skaits": parseInt(document.querySelector('#skaits').value),            
      "tips": document.querySelector('#tehnika').value, 
      "inventaraNr": document.querySelector('#inos2').value,
      "nosaukums": document.querySelector('#inos3').value,
      "iegadesGads": document.querySelector('#inos4').value,
      "piegadatajs": document.querySelector('#inos5').value,
      "razotajs" : document.querySelector('#inos6').value,
      "kabinetaNr" : document.querySelector('#inos7').value,
      "atbildigais" : document.querySelector('#inos8').value,
      "procesors": document.querySelector('#inos9').value,
      "ram": document.querySelector('#inos10').value,
      "cietaisDisks": document.querySelector('#inos11').value,              
      "programmatura": document.querySelector('#inos12').value                 
      }      
  break;
  case tehnikasIzvele == "monitors"  :
    requestBodyJson = {                  
      "tips": document.querySelector('#tehnika').value, 
      "inventaraNr": document.querySelector('#inos2').value,
      "nosaukums": document.querySelector('#inos3').value,
      "iegadesGads": document.querySelector('#inos4').value,
      "piegadatajs": document.querySelector('#inos5').value,
      "razotajs" : document.querySelector('#inos6').value,
      "kabinetaNr" : document.querySelector('#inos7').value,
      "atbildigais" : document.querySelector('#inos8').value,
      "procesors": document.querySelector('#inos9').value,
      "ram": document.querySelector('#inos10').value,
      "cietaisDisks": document.querySelector('#inos11').value,              
      "izmers": document.querySelector('#inos13').value                 
      }      
  break;
  case tehnikasIzvele == "printeris"  :
    requestBodyJson = {                  
      "tips": document.querySelector('#tehnika').value, 
      "inventaraNr": document.querySelector('#inos2').value,
      "nosaukums": document.querySelector('#inos3').value,
      "iegadesGads": document.querySelector('#inos4').value,
      "piegadatajs": document.querySelector('#inos5').value,
      "razotajs" : document.querySelector('#inos6').value,
      "kabinetaNr" : document.querySelector('#inos7').value,
      "atbildigais" : document.querySelector('#inos8').value,
      "procesors": document.querySelector('#inos9').value,
      "ram": document.querySelector('#inos10').value,
      "cietaisDisks": document.querySelector('#inos11').value,              
      "printeraTips": document.querySelector('#inos14').value                 
      }      
  break;
}                            
            
let requestBodyString = JSON.stringify(requestBodyJson);

let request = await fetch('https://andrejstehnika.amikis.repl.co/api/pievienot',
         		{
            method:"POST",
  					headers:
  					{
            //'X-API-KEY': 'abcd',
            'Content-Type': 'application/json'
            },
            body:requestBodyString
        		});

console.log(await request.json());


//console.log(atbilde);


}





