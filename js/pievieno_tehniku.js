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
      "m_izmers": document.querySelector('#inos17').value,
      "m_tips": document.querySelector('#inos18').value,
      "interfeisi": document.querySelector('#inos19').value,              
      "audio": document.querySelector('#inos20').value                 
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
      "tips_ndc": document.querySelector('#inos13').value,
      "papira_izmers": document.querySelector('#inos14').value,
      "kartridzi": document.querySelector('#inos15').value,              
      "ip_adrese": document.querySelector('#inos16').value                 
      }      
  break;
  case tehnikasIzvele == "projektors"  :
    requestBodyJson = {                  
      "tips": document.querySelector('#tehnika').value, 
      "inventaraNr": document.querySelector('#inos2').value,
      "nosaukums": document.querySelector('#inos3').value,
      "iegadesGads": document.querySelector('#inos4').value,
      "piegadatajs": document.querySelector('#inos5').value,
      "razotajs" : document.querySelector('#inos6').value,
      "kabinetaNr" : document.querySelector('#inos7').value,
      "atbildigais" : document.querySelector('#inos8').value,
      "projektora_tips": document.querySelector('#inos21').value,
      "gaismas_jauda": document.querySelector('#inos22').value,
      "projektora_interfeisi": document.querySelector('#inos23').value,              
      "izskirtspeja": document.querySelector('#inos24').value                 
      }
      break; 
      case tehnikasIzvele == "kopetajs"  :
    requestBodyJson = {                  
      "tips": document.querySelector('#tehnika').value, 
      "inventaraNr": document.querySelector('#inos2').value,
      "nosaukums": document.querySelector('#inos3').value,
      "iegadesGads": document.querySelector('#inos4').value,
      "piegadatajs": document.querySelector('#inos5').value,
      "razotajs" : document.querySelector('#inos6').value,
      "kabinetaNr" : document.querySelector('#inos7').value,
      "atbildigais" : document.querySelector('#inos8').value,
      "kopetaja_tips": document.querySelector('#inos25').value,
      "lapas_izmers": document.querySelector('#inos26').value,
      "kopetaja_kartridzi": document.querySelector('#inos27').value,              
      "kopetaja_adrese": document.querySelector('#inos28').value                 
      }     
      break;
      case tehnikasIzvele == "skandas"  :
    requestBodyJson = {                  
      "tips": document.querySelector('#tehnika').value, 
      "inventaraNr": document.querySelector('#inos2').value,
      "nosaukums": document.querySelector('#inos3').value,
      "iegadesGads": document.querySelector('#inos4').value,
      "piegadatajs": document.querySelector('#inos5').value,
      "razotajs" : document.querySelector('#inos6').value,
      "kabinetaNr" : document.querySelector('#inos7').value,
      "atbildigais" : document.querySelector('#inos8').value,
      "skandu_jauda": document.querySelector('#inos29').value,
      "skandu_komponentes": document.querySelector('#inos30').value,
      "skandu_interfeisi": document.querySelector('#inos31').value,              
      "pastiprinatajs": document.querySelector('#inos32').value                 
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
        		}).then(response => response.json())
            .then(data => {
                if(data.status == 0) {
                    alert("Kļūda")
                }
                if(data.status == 1) {
                    alert("ieraksts pievienots")
                }
            })
location.reload();
}





