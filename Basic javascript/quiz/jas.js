var question = document.getElementById("question");

var alert;
var Option1 = document.getElementById("opt1");
var Option2 = document.getElementById("opt2");
var Option3 = document.getElementById("opt3");
var alert = document.getElementById("alert");

var q1 = ["1. What color is the French wine Beaujolais?", "Red color" ,"White Color", "Roze color"];
var q2=["2. From Which country does pitta bread originate?","Greece","Cyprus","Russia"];
var q3=["3. Which Cheese is traditionally used for pizza?","Mozarella","Fetta","Riccota"];
var q4=["4. From Which country does challoumi cheese produced? ","Greece","Cyprus","Turkey"];

var score = document.getElementById("score");
var scoreCount=0;

function init(){
  alert.innerHTML = "Quess the answer! :) Then Press the button ";
}
function questions(scoreCount=0){
  score.innerHTML=scoreCount;
  //first question occurs in html
  if(scoreCount === 0){
    question.innerHTML=q1[0];
    Option1.innerHTML=q1[1];
    Option2.innerHTML=q1[2];
    Option3.innerHTML=q1[3];
  }
  //second question occurs in html
  else if(scoreCount === 1){
    question.innerHTML=q2[0];
    Option1.innerHTML=q2[1];
    Option2.innerHTML=q2[2];
    Option3.innerHTML=q2[3];
  }
  //third question occurs in html
   else if (scoreCount === 2){
    question.innerHTML=q3[0];
    Option1.innerHTML=q3[1];
    Option2.innerHTML=q3[2];
    Option3.innerHTML=q3[3];
  }
  //fourth question occurs in html
   else if(scoreCount=== 3){
    question.innerHTML=q4[0];
    Option1.innerHTML=q4[1];
    Option2.innerHTML=q4[2];
    Option3.innerHTML=q4[3];
  }
  else{
    alert.innerHTML = "The End! You have reached: " + scoreCount+" points out of 4!";
  }  
}

function answer(){
  switch(scoreCount){
    case 0:
      if(document.getElementById("check1").checked){
        scoreCount +=1;
        document.getElementById("check1").checked=false;
        alert.innerHTML = "Correct Answer :) :)";
      } else{
        if(document.getElementById("check2").checked){
          document.getElementById("check2").checked=false;
          alert.innerHTML = "Oups , Try Again :(";
        }else if(document.getElementById("check3").checked)
          {
            document.getElementById("check3").checked=false;
             alert.innerHTML = "Oups , Try Again :(";
          } 
      }
      break;
    case 1:
      if(document.getElementById("check1").checked){
        scoreCount +=1;
        document.getElementById("check1").checked=false;
        alert.innerHTML = "Correct Answer :) :)";
      } else{
        if(document.getElementById("check2").checked){
          document.getElementById("check2").checked=false;
          alert.innerHTML = "Oups , Try Again :(";
        }else if(document.getElementById("check3").checked)
          {
            document.getElementById("check3").checked=false;
             alert.innerHTML = "Oups , Try Again :(";
          } 
      }
      break;
    case 2: 
      if(document.getElementById("check1").checked){
        scoreCount +=1;
        document.getElementById("check1").checked=false;
        alert.innerHTML = "Correct Answer :) :)";
      } else{
        if(document.getElementById("check2").checked){
          document.getElementById("check2").checked=false;
          alert.innerHTML = "Oups , Try Again :(";
        }else if(document.getElementById("check3").checked)
          {
            document.getElementById("check3").checked=false;
             alert.innerHTML = "Oups , Try Again :(";
          } 
      }
      break;
    case 3: 
      if (document.getElementById("check2").checked){
        scoreCount +=1;
        document.getElementById("check2").checked=false;
        alert.innerHTML = "Correct Answer :) :)";
    } else if(document.getElementById("check1").checked){
     document.getElementById("check1").checked=false;
      alert.innerHTML = "Oups , Try Again :(" ;
    } else if(document.getElementById("check3").checked){
      document.getElementById("check3").checked=false;
      alert.innerHTML = "Oups , Try Again :(";
    }
  
    break;
  }
  questions(scoreCount);
}

