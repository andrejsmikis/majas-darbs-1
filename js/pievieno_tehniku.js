async function pievieno_tehniku()
{

//let requestBodyJson = {
             // "skaits": parseInt(document.querySelector('#skaits').value),            
             //"tips": document.querySelector('#tehnika').value 
             //"inventaraNr": document.querySelector("input[name='inventaraNr']").value,
             //"nosaukums": document.querySelector("input[name='nosaukums']").value,
             //"iegadesGads": document.querySelector("input[name='iegadesGads']").value,
             //"piegadatajs": document.querySelector("input[name='piegadatajs']").value,
             //"razotajs" : document.querySelector("input[name='razotajs']").value,
             //"kabinetaNr" : document.querySelector("input[name='kabinetaNr']").value,
             //"atbildigais" : document.querySelector("input[name='atbildigais']").value,
             //"procesors": document.querySelector("input[name='procesors']").value,
             //"ram": document.querySelector("input[name='ram']").value,
             ///"cietaisDisks": document.querySelector("input[name='cietaisDisks']").value,
             //"programmatura": document.querySelector("input[name='programmatura']").value
//              };
//let requestBodyString = JSON.stringify(requestBodyJson);


//let request = await fetch('https://andrejstehnika.amikis.repl.co/static/datorudb.json',
//         		{
//            method:"POST",
//  					headers:
//  					{
//            'X-API-KEY': 'abcd',
//            'Content-Type': 'application/json'
//            },
//            body:requestBodyString
//        		});

//let atbilde = await request.json();
let datoruDB = await fetch('https://andrejstehnika.amikis.repl.co/static/datorudb.json')
let pcJson = await datoruDB.json();
console.log(pcJson);


}





