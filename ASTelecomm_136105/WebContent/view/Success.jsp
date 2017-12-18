<%@page import="java.time.LocalDate"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix ="c" %>    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/style.css" />
<%! LocalDate date = LocalDate.now(); %>
</head>
<body>
	<div class="content">
		<c:if test="${sessionScope.balance <= 0}">
			Thank You for Paying your Bill & Bill Pay Date is
	   		<%
	   		out.print(date.toString());
      		%>
      		<br/>
      		No balance amount 
		</c:if>
		<c:if test="${sessionScope.balance > 0}">
			Thank You for Paying your Bill.<br/>
			Your Balance amount is ${sessionScope.balance}.<br/>
			Bill Pay Date is 
		<%
        	out.print(date.toString());
      	%>
      	<br/>
		</c:if>

	<br/>
	</div>
</body>
</html>