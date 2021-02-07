async function pievieno_tehniku()
{

let requestBodyJson = {
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
              };
let requestBodyString = JSON.stringify(requestBodyJson);


let request = await fetch('https://andrejstehnika.amikis.repl.co/static/datorudb.json',
         		{
            method:"POST",
  					headers:
  					{
            'X-API-KEY': 'abcd',
            'Content-Type': 'application/json'
            },
            body:requestBodyString
        		});

let atbilde = await request.json();
//let datoruDB = await fetch('https://andrejstehnika.amikis.repl.co/static/datorudb.json')
//let pcJson = await datoruDB.json();

//let x=document.getElementsById('inos3').value;
//let y =document.getElementById('inos3').value;

console.log(atbilde);


}





