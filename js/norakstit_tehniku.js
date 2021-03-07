async function norakstit_tehniku()
{
    let nid=document.querySelector('#inos1').value;


    let request = await fetch('https://andrejstehnika.amikis.repl.co/api/norakstit',
    {
    method:"POST",
    body: JSON.stringify({'id':nid}),
	headers: {
        'Content-Type': 'application/json'
    }}).then(response => response.json())
    .then(data => {
        if(data.status == 0) {
            alert("Kļūda")
        }
        if(data.status == 2) {
            alert("Nav atrasts ID")
        }
        if(data.status == 1) {
            alert("ID "+nid+" norakstīts")
        }
    })
}
