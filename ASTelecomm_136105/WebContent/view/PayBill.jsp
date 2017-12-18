<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@	taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
  
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/style.css" />
<script type="text/javascript">
	function checkAmount(){
		var amount = document.getElementById("amount").value;
		
		if(amount>0){
			return true;
		}	
		alert("Enter a valid amount i.e. greater than equal to zero!");
		return false;		
	}
</script>
</head>
<body>
<div class="content">
	<c:if test="${sessionScope.user ne null}">
		<h2>AirSpace Telecomm</h2>
		<h3>Pay Your Bill Here</h3>
		<div align="center">Payment for the mobile number ${sessionScope.user.mobileNo}</div> 
		<br/>
		<form action="result.here" method ="post" onsubmit="return checkAmount();">
			<table align="center">
				<tr>
					<td>Enter the amount to Pay</td>
					<td><input type = "text" name="result" id="amount" required/></td>
				</tr>		
				<tr>
					<td colspan="2"><input type="submit" value="Pay" class="button"></td>
				</tr>
			</table>
		</form>
	</c:if>
</div>
</body>
</html>