package com.cg.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "HelloServletName", 
urlPatterns = { "/HelloServletMap" })
public class HelloServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	ServletConfig cg;
     public HelloServlet() {    	 
        super();     
        System.out.println("Hello Servlet Constructorcalled");
    }
	public void init(ServletConfig config) throws ServletException
	{
		super.init(config);
		cg=config;
		System.out.println("Hello Servlet Init Invoked...");		
	}
	public void destroy() {
		System.out.println("Hello Servlet destror Invoked...");
	}
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("doGet Of HelloServlet invoked...");
		doPost(request,response);
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("Hello Servlet doPost Invoked...");	
		
		String nm=request.getParameter("txtFirstName");
		
		PrintWriter pw=response.getWriter();
		
		pw.println(" <b>Welcome To Capgemnino: "+nm);
	}
}
