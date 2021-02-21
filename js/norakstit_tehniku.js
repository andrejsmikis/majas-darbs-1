async function norakstit_tehniku()
{
    let nid=document.querySelector('#inos1').value;
//    let tehnikasIzvele=document.querySelector('#tehnika').value;
console.log (nid);
let request = await fetch('https://andrejstehnika.amikis.repl.co/api/',
    {
    method:"POST",
    body: {id:12}
	headers: {
        //'X-API-KEY': 'abcd',
        'Content-Type': 'application/json'
    }});

//console.log(await request.json());

//let atbilde;
//console.log(await atbilde);
//console.log (nid);

}
