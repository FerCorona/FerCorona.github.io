
import  'app.js';

function iniciar() {
    loadJSON(function(response) {
     // Parse JSON string into object
       var actual_JSON = JSON.parse(response);
    });
   }
    

   iniciar(); 