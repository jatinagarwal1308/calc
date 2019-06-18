var string = "";
var display = document.getElementById("display")
var l=0
    
function val(cal) {
    var value = validate(cal)
    console.log(value) 
    if(value)
    {
	     if(cal == "=")
	     {
		    string = eval(string);
			display.innerHTML = string;
			l = 1
         }

         else if(cal == "CLR")
         {    
         	  string="";
    	      display.innerHTML = string;
    	      l = 0
         }
    
         else if(cal == "DEL")
         {  
            string = string.substring(0,l-1);
            display.innerHTML = string;
            l -= 1
         }

	     else
	     {
		    string += cal;
		    display.innerHTML = string;
		    l += 1
 	     }
    }  
     
     } 
    function validate(cal)
    {
    	if(['=','+','-','*','/'].includes(cal) && ['=','+','-','*','/'].includes(string[l-1]))
        {
        	return false
        }

        else
        {
        	return true
        }
    }










