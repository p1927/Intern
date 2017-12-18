<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" %>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix ="c" %>    
    

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/style.css" />

<script type="text/javascript">
	function validateForm(){
		var pass = document.getElementById("password").value;
		var confirmpass = document.getElementById("confirmPassword").value;
		var name = document.getElementById("name").value;
		var mob = document.getElementById("mob").value;;
		var uname = document.getElementById("uname").value;
		
		var name_patt = new RegExp("^[A-Z][A-Za-z ]*$");
		var uname_patt = new RegExp("^[A-Za-z]*$");
		var mob_patt = new RegExp("^[1-9][0-9]{9}$");
		
		if(!name_patt.test(name)){
			alert("Name should start with capital letter and should contain characters only.");
			return false;
		}
		if(!mob_patt.test(mob)){
			alert("Mobile no should be of 10 digits.");
			return false;
		}
		if(!uname_patt.test(uname)){
			alert("User name should contain characters only.");
			return false;
		}
		if(pass != confirmpass){
			alert("Password and confirm password are not same");
			return false;
		}	
		return true;
	}
</script>

</head>
<body>

	<div class="content">
	<h1 align="center">AirSpace Telecomm</h1>
	<div align="center">
		<h2 align="center">New User Registration Form</h2>
		<form action="get.here" method="post"  onSubmit="return validateForm();">
			<table>
				<tr>
					<td align="right">Enter Your name</td>
					<td><input type="text" name="name" id="name" required /></td>
				</tr>

				<tr>
					<td align="right">Mobile Number</td>
					<td><input type="text" id="mob" name="mobileno" required/></td> 
				</tr>
		
				<tr>
					<td align="right">Username</td>
					<td><input type="text" name="uname" id="uname" required/></td>
				</tr>

				<tr>
					<td align="right">Password</td>
					<td><input type="password" id="password" name="pass" required/></td> 
				</tr>
		
				<tr>
					<td align="right">Reenter Password</td>
					<td><input type="password" id="confirmPassword" required/></td> 
				</tr>
		
				<tr>
					<td colspan="2" align="center"><input type="submit" value="Register" class="button"></input></td>
				</tr>
			</table>
		</form>
		<div id="msg" ></div>
	</div>
	</div>
</body>
</html>