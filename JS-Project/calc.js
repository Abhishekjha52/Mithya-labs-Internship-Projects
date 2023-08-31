var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");
var form = document.getElementById("formId");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var value1 = parseFloat(num1.value);
    var value2 = parseFloat(num2.value);
    if(!value1 || !value2){
        alert("Please enter values in the fields");
    }
    else{
        var res = value1/value2;
        var percent = res * 100;

        result.innerText = "Answer: " + percent + "%"; 
        num1.value="";
        num2.value="";
    }
});