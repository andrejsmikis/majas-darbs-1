async function norakstit_tehniku()
{
    let nid=document.querySelector('#inos1').value;
//    let tehnikasIzvele=document.querySelector('#tehnika').value;

let request = await fetch('https://andrejstehnika.amikis.repl.co/api/',
    {
    method:"POST",
    body: JSON.stringify({'id':nid}),
	headers: {
        //'X-API-KEY': 'abcd',
        'Content-Type': 'application/json'
    }});

//console.log(await request.json());

//let atbilde;
//console.log(await atbilde);
//console.log (nid);

}
