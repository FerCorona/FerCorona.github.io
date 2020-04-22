var url = new URL(location.href);
var folio = url.searchParams.get("nombre");
var contact = url.searchParams.get("contact");
var lugar = url.searchParams.get("place");

function showData(){
    var requests = document.getElementById("data");
    var contacto = String(contact).split("#");
    
    var lug =String(lugar).split("#");
    alert(lug[0]);
   var texto= "";

   texto+= "<h1>"+folio+"</h1>";
   texto+= "<br>";
   texto+= contacto[0]+" "+contacto[1]+" "+contacto[2];
   texto+=  "<br>";
   texto+= lug[0]+" "+lug[1]+" "+lug[2];
    requests.innerHTML = folio;
}
showData();