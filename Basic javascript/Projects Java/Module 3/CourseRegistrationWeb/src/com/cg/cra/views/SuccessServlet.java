package com.cg.cra.views;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.cg.cra.dto.Registration;

/**
 * Servlet implementation class SuccessServlet
 */
@WebServlet("/SuccessView")
public class SuccessServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
 
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		Registration register =(Registration)request.getAttribute("register");
		
		out.print("Registration completed successfully for "+register.getStudentName());
		out.print("<br/>with id :"+register.getRegNo());
	}
}
