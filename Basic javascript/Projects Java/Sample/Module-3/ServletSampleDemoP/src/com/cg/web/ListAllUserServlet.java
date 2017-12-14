package com.cg.web;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.cg.dto.LoginDTO;

@WebServlet("/ListAllUserServlet")
public class ListAllUserServlet extends HttpServlet
{
	private static final long serialVersionUID = 1L;
	
    ServletConfig sconfig;
    
    public ListAllUserServlet() 
    {        super();       }
    
	public void init(ServletConfig config) 
			throws ServletException 
	{
		super.init(config)	;
		sconfig=config;
		System.out.println("ListAllUserServlet init invoked");
	}
	public void destroy() {}
	protected void doGet(HttpServletRequest request, 
			HttpServletResponse response) 
					throws ServletException, 
		IOException 
	{
		doPost(request,response);
	}
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response)
					throws ServletException, IOException {
		PrintWriter pw=response.getWriter();
		
		ArrayList<LoginDTO> ul=(ArrayList)
				request.getAttribute("UlistObj");		
		pw.print(" <table border='1'>");
		pw.println("<tr><th>UserName</th><th>Password</th></tr>");
		for(LoginDTO ld:ul)
		{
			pw.println("<tr><td>"+ld.getUserName()+
					"</td><td>"+ld.getPassword()+
					"</td></tr>");		
		}
		pw.print(" </table>");
	}

}
