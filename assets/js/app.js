

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'info.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
            //alert(xobj.responseText);
        }

    };
    xobj.send(null);
}

function get_all_res(order,total) {
    var requests = document.getElementById("restaurante");
    var tarjetas = "";
    loadJSON(function (response) {
        var jey = JSON.parse(response);
        var actual_JSON = sortResults(order,jey);
        var n = actual_JSON.length;

        if(total == 1){
            n=3;
        }
        

        for (var i = 0; i < n; i++) {
            var con = actual_JSON[i].contact;
            var add = actual_JSON[i].address;
            

            tarjetas += "<div class=\"card card-cascade wider\">" +
                "<div class=\"view view-cascade overlay\">" +
                "<img class=\"card-img-top\" src=\"https://image.freepik.com/foto-gratis/desenfoque-abstracto-cafe-restaurante-desenfocado_1339-79392.jpg\" alt=\"Card image cap\">" +
                "<a href=\"\">" +
                "<div class=\"mask rgba-white-slight\"></div>" +
                " </a>" +
                " </div>" +
                "<div class=\"card-body  card-body-cascade text-center\">" +
                "<h4 class=\"card-title\"><strong>" + actual_JSON[i].name + "</strong></h4>" +
                "<h5 class=\"blue-text pb-2\"><strong>" + con.email +"</strong></h5>" +
                "<p class=\"card-text\">" +  add.city + add.state + "</p>";
                for(var stars=0; stars < 4; stars++){
                    if(stars < Number(actual_JSON[i].rating)){
                        tarjetas += "  <span class=\"glyphicon glyphicon-glass checked\"></span>";
                    }
                    else{
                        tarjetas += "  <span class=\"glyphicon glyphicon-glass\"></span>";
                    }
                }
                var s_contact =con.email+"#"+con.site+"#"+con.phone;
                var s_place =add.street+"#"+add.city+"#"+add.state;
                tarjetas +=  "<br><br><a class=\"btn btn-secondary\" href=\"vista.html?nombre="+actual_JSON[i].name+"&contact="+s_contact+"&place="+s_place+"\">Ver</a>";
                tarjetas += "</div>" + "</div>";

               

        }

       

        requests.innerHTML = tarjetas;
    });
}


function filtrar(){
    var e = document.getElementById("t_f");
    var strUser = e.options[e.selectedIndex].value;
   get_all_res(strUser);
}



function sortResults(order, j_array) {
    
    if(order == 1){
        
       
        for(var i = 0; i < j_array.length; i++)  
        { 
            for (var j = 0; j <  j_array.length - 1 -i ; j++)  
            { 
                var nam = j_array[j].name;
                var nammas =j_array[j+1].name
                if (nam.charAt(0) > nammas.charAt(0) ) 
                { 
                    var t = j_array[j]; 
                    j_array[j] = j_array[j+1]; 
                    j_array[j+1] = t; 
                } 
            } 
        } 
            
        

    }
    else {
        for(var i = 0; i < j_array.length; i++)  
        { 
            for (var j = 0; j <  j_array.length - 1 -i ; j++)  
            { 
                var nam = j_array[j].rating;
                var nammas =j_array[j+1].rating
                if (nam > nammas ) 
                { 
                    var t = j_array[j]; 
                    j_array[j] = j_array[j+1]; 
                    j_array[j+1] = t; 
                } 
            } 
        } 
    }
    
  
    return j_array;
}


