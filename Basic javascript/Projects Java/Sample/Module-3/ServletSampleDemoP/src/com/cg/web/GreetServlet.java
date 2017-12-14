package com.cg.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "GreetServletName", 
urlPatterns = { "/GreetServletMap" })
public class GreetServlet extends HttpServlet {
	private static final long serialVersionUID = 1L; 
    public GreetServlet() {  
    	super();  
    	System.out.println(" GreetServlet Constructor Invoked ");
    	}	    
	public void init(ServletConfig config) 
			throws ServletException {			
		System.out.println("GreetServlet Init function called ");		
	}
	public void destroy()
	{	
		System.out.println("GreetServlet destroy  called ");
	}
	protected void doGet(HttpServletRequest request, 
			HttpServletResponse response) throws ServletException,
			IOException {
		
		doPost(request,response);
			}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		PrintWriter pw= response.getWriter();
		
		pw.write("<h2>Welcome To CapGemioni Vaishali<h2>");	
		pw.write("<hr color='green'></hr>");	
		
	}
}
