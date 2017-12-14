function loginCheck()
{
  var xhttp;
 	xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() 
	{
   	if (this.readyState == 4 && this.status == 200) 
		{
			var objJson;
			flag = false;
			userId = document.getElementById("nameInput").value;
			password = document.getElementById("pswInput").value;
			objJson= JSON.parse(xhttp.responseText);
			
			logIn(objJson);
			
			if (flag === true)
			{
				window.location.replace("https://codepen.io/RubenBarajas/full/JMPeBj/");
			}
  		}
  };
  xhttp.open("GET", "db.json", true);
  xhttp.send();
}
function logIn(objJson)
{
	for (var i = 0; i< objJson.employees.length; i++) 
	{
		console.log(objJson.employees[i].userId);
		if (userId == objJson.employees[i].userId)
		{
			console.log("UserId");
			if (password == objJson.workers[i].pass)
			{
				localStorage.setItem("userId", objJson.employees[i].userId);
				localStorage.setItem("name",objJson.employees[i].name);
				// localStorage.setItem("userId",CryptoJS.MD5(objJson.logIn[i].userId))
				return flag = true;
			}
      else{
        console.log("Error Login Pass");
document.querySelector("#form").innerHTML="Error Login Pass";
          }	
		}
    else{
      document.getElementById("main").style.backgroundColor = "#b86152";
    }	
	}
}