//Axel flores JS

var total1  =0;
 var total2  =0;
 var total3  =0;
function testAnswer(){
  var address = document.getElementById("address1").value;
    if (address == 11110001){
    document.getElementById("Right!").innerHTML =
    "That is the correct IP";
    document.getElementById("Right!").classList.remove("hidden-message");
    document.getElementById("Right!").classList.add("shown-message");
    total1 = total1 +1;
    setCookie("good1",total1,1);
    console.log("ip is good"+total1);
  }
   else if (address <11110001) {
     document.getElementById("Right!").innerHTML = "Too low";
     document.getElementById("Right!").classList.remove("hidden-message");
     document.getElementById("Right!").classList.add("shown-message");
   }
   else if (address >11110001) {
     document.getElementById("Right!").innerHTML = "Too high";
     document.getElementById("Right!").classList.remove("hidden-message");
     document.getElementById("Right!").classList.add("shown-message");
    }
   }
 function testAnswer2(){
     var address = document.getElementById("address2").value;
       if (address == 10000001){
       document.getElementById("Right!2").innerHTML =
       "That is the correct IP";
       document.getElementById("Right!2").classList.remove("hidden-message");
       document.getElementById("Right!2").classList.add("shown-message");
       total2 = total2 +1;
       setCookie("good2",total2,1);
       console.log("ip is good"+total2);
     }
      else if (address <10000001) {
        document.getElementById("Right!2").innerHTML = "Wronggg";
        document.getElementById("Right!2").classList.remove("hidden-message");
        document.getElementById("Right!2").classList.add("shown-message");
      }
      else if (address >10000001) {
        document.getElementById("Right!2").innerHTML = "Wrongg";
        document.getElementById("Right!2").classList.remove("hidden-message");
        document.getElementById("Right!2").classList.add("shown-message");
       }
      }
  function testAnswer3(){
        var address = document.getElementById("address3").value;
          if (address == 10010001){
          document.getElementById("Right!3").innerHTML =
          "That is the correct IP";
          document.getElementById("Right!3").classList.remove("hidden-message");
          document.getElementById("Right!3").classList.add("shown-message");
          total3 = total3 +1;
          setCookie("good3",total3,1);
          console.log("ip is good"+total3);
        }
         else if (address <10010001) {
           document.getElementById("Right!3").innerHTML = "Wronggg";
           document.getElementById("Right!3").classList.remove("hidden-message");
           document.getElementById("Right!3").classList.add("shown-message");
         }
         else if (address >10010001) {
           document.getElementById("Right!3").innerHTML = "Wrongg";
           document.getElementById("Right!3").classList.remove("hidden-message");
           document.getElementById("Right!3").classList.add("shown-message");
          }
         }


//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function theEnd(){
  var total1 = getCookie("good1");
  var total2 = getCookie("good2");
  var total3 = getCookie("good3");
  var final  = (total1 + total2 + total3)/ 3 * 100;
  final = final.toFixed(2);
  document.getElementById('theEnd').innerHTML = "YOU GOTTA " + final;
}


//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
        return "";
  }
