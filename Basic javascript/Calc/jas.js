//add
function doAdd()
    {

        var input1 = document.getElementById('input1').value;
        var input2 = document.getElementById('input2').value;

        var sum = Number(input1)+ Number(input2);
         
     document.getElementById('answer').innerHTML = sum; 
    }

//subtract
function doSubtra()
    {

        var input1 = document.getElementById('input1').value;
        var input2 = document.getElementById('input2').value;

        var sum = Number(input1)-Number(input2);
    
      document.getElementById('answer').innerHTML= sum; 
    }  

//multiply
function doMultiply()
    {

        var input1 = document.getElementById('input1').value;
        var input2 = document.getElementById('input2').value;

        var sum = Number(input1)*Number(input2);
             document.getElementById('answer').innerHTML= sum; 
    }

//divide
function doDivide()
    {

        var input1 = document.getElementById('input1').value;
        var input2 = document.getElementById('input2').value;

        var sum = Number(input1)/Number(input2);
         
      document.getElementById('answer').innerHTML= sum; 
    }

//clear
function clearNum(){document.getElementById('myForm').reset();}
