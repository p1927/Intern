package com.cg.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.cg.dto.LoginDTO;
import com.cg.service.IUserService;
import com.cg.service.UserServiceImpl;

@WebServlet(name = "LoginServletName", 
urlPatterns = { "/LoginServletMap" })
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;      
	ServletConfig cg;
     public LoginServlet() {    	 
        super();     
        System.out.println("LoginServlet Constructorcalled");
    }
	public void init(ServletConfig config) throws ServletException
	{
		super.init(config);
		cg=config;
		System.out.println("LoginServlet Init Invoked...");		
	}
	public void destroy() {
		System.out.println("LoginServlet destror Invoked...");
	}
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("doGet OfLoginServlet invoked...");
		doPost(request,response);
	}
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) 
					throws ServletException, IOException 
	{		
		System.out.println("LoginServlet doPost Invoked...");	
		
		IUserService userService=new UserServiceImpl();		
		LoginDTO loginDto=new LoginDTO();
		
		String uid=request.getParameter("txtUN");
		String pw=request.getParameter("txtPwd");

		loginDto.setUserName(uid);
		loginDto.setPassword(pw);		
		
		PrintWriter out=response.getWriter();		
		
		if(userService.isValidUser(loginDto))
		{
			out.println("<h1>Welcome U R Valid User :  </h1> "+uid);			
		}
		else
		{
			RequestDispatcher rd=
					request.getRequestDispatcher
					("ControllerServlet?action=ShowRegisterPage");
			rd.forward(request, response);
		}
	}
}
