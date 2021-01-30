async function pievieno_tehniku()
{

let requestBodyJson = {
             // "apakstips": document.querySelector('#apakstips').value,
             // "daudzums": parseInt(document.querySelector('#daudzums').value),
             // "komentari": document.querySelector('#komentari').value,
             // "mervienibas": document.querySelector('#mervienibas').value,
             // "nosaukums": document.querySelector('#nosaukums').value,
             // "skaits": parseInt(document.querySelector('#skaits').value),
             // "tips": document.querySelector('#tips').value
             "tips": "dators ",
             "inventaraNr": "1239-540",
             "name": "201",
             "iegadesGads": "2018",
             "piegadatajs": "Sia Dators",
             "razotajs" : "HP",
             "procesors": "i7 ",
             "ram": "8GB",
             "cietaisDisks": "ssd 250GB",
             "os": "win10"
              };
let requestBodyString = JSON.stringify(requestBodyJson);


let request = await fetch('https://pytonc.eu.pythonanywhere.com/api/v1/viela',
         		{
            method:"POST",
  					headers:
  					{
            'X-API-KEY': 'asdf',
            'Content-Type': 'application/json'
            },
            body:requestBodyString
        		});

let atbilde = await request.json();
console.log(atbilde);


}





