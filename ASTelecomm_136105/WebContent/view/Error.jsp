<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/style.css" />

</head>
<body>
<div class="content">

<%-- The error message is displayed here--%>
	<h3>Error Occurred!<br/>Error Details are below:</h3>
	<h4><font color="red">${sessionScope.error}</font></h4>
	
<%-- Button to move to Registration page--%>
	<a href="back.here"><button class="button" name="input" value="back">Try Again</button></a>
</div>
</body>
</html>