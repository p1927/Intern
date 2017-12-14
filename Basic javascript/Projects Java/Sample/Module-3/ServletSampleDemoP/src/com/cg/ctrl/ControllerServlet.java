package com.cg.ctrl;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

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
@WebServlet("/ControllerServlet")
public class ControllerServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
     ServletConfig conf;
	public ControllerServlet() 
     {
        super();        
    }
	public void init(ServletConfig config) throws ServletException {
		super.init(config);
	System.out.println("Controller  Init Invoked");
	conf=config;
	}
	public void destroy() 
	{	}
	protected void doGet(HttpServletRequest
			request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request,response);
	}
	protected void doPost(HttpServletRequest 
			request, HttpServletResponse
			response) throws ServletException, IOException {
			
		String action= request.getParameter("action");
		PrintWriter pw=response.getWriter();
				
		if(action!=null)
		{
			//**********ShowLoginPage********************			
			if(action.equals("ShowLoginPage"))
			{
				RequestDispatcher rd=
						request.getRequestDispatcher
						("/Login.html");				
				rd.forward(request,response);
			}			
			//**************ValidateLogin****************
			if(action.equals("ValidateLogin"))
			{
				RequestDispatcher rd=
						request.
						getRequestDispatcher("LoginServletMap");
				rd.forward(request, response);
			}
			
			//***********ShowRegisterPage********
			if(action.equals("ShowRegisterPage"))
			{
				RequestDispatcher rd=
						request.getRequestDispatcher
						("/Register.html");
				rd.forward(request, response);				
			}
			
			//***********InsertUserDetails**********
			if(action.equals("InsertUserDetails"))
			{	
				IUserService userService=
						new UserServiceImpl();
				
				String uid=request.getParameter("txtUN");
				String pwd=request.getParameter("txtPwd");
				
				LoginDTO userDto=new LoginDTO();
				userDto.setUserName(uid);
				userDto.setPassword(pwd);
				
				int dataInserted=userService.
						addUser(userDto);
						
				if(dataInserted==1)	
				{
					
					ArrayList<LoginDTO> uList=
					userService.getAllUsers();
					request.setAttribute("UlistObj",
							uList);		
					
					RequestDispatcher rd=
							request.
							getRequestDispatcher
							("ListAllUserServlet");
					rd.forward(request, response);					
				}
				else
				{
					pw.println("data not Inserted");
				}	
				
				
			}
			
			
			
			
		}
		else
		{
			pw.println("No Action Defined");	
		}
	}

}
