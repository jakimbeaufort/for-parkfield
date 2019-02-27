//REMOVE SPECIFIC DIV IN A SERIES OF DIVS (CITIES EXAMPLE)

var deleteItem = function(index) {
    var divElements = document.getElementsByClassName("cities");
    
  for (var i = 0; i < divElements.length; i++) {
  	if (i == index) {
    	divElements[i].parentNode.removeChild(divElements[i]);
      reAssignDeleteFunctionality();
      break;
    }
  }
};

var reAssignDeleteFunctionality = function() {
  var deleteButtons = document.getElementsByClassName("remove");
  for (var i = 0; i < deleteButtons.length; i++) {
  	
    //To remove all the previous click listeners, clone the node
    var newDeleteBtn = deleteButtons[i].cloneNode(true);
		deleteButtons[i].parentNode.replaceChild(newDeleteBtn, deleteButtons[i]);	
    
    //closure to save index
    (function(index){
          deleteButtons[i].addEventListener('click', function() {
            deleteItem(index);
          }, false); 
      })(i);    
  }
};

reAssignDeleteFunctionality();

//END CITIES EXAMPLE

//ALERT BOX EXAMPLE

document.getElementById("alert-example").addEventListener("click", triggerAlert);

function triggerAlert() {
    alert("Hello World!");
}

//END ALERT BOX EXAMPLE

//MOUSEOVER EXAMPLE
document.getElementById("textChange").addEventListener("mouseover", changeText);
document.getElementById("textChange").addEventListener("mouseout", changeBack);

var originalText = document.getElementById("textChange").innerHTML

function changeText(){
    document.getElementById("textChange").innerHTML = "DESTROY ALL HUMANS";
}

function changeBack(){
    document.getElementById("textChange").innerHTML = originalText;
}
//END MOUSEOVER EXAMPLE