package com.cg.astelecomm.controller;
import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.cg.astelecomm.dto.UserBean;
import com.cg.astelecomm.exception.AirSpaceException;
import com.cg.astelecomm.service.CSI;
import com.cg.astelecomm.service.CustomerServiceImpl;
import com.cg.astelecomm.service.ICustomerService;

@WebServlet("*.here")
public class ProcessUser extends HttpServlet {
	private static final long serialVersionUID = 1L;
   
    public ProcessUser() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession(true);
		ICustomerService custService = new CustomerServiceImpl();
		UserBean user = new UserBean();;
		String target  ="";
		
		String targetAdd= "view/CustomerHome.jsp";
		String targetPay="view/PayBill.jsp";
		String targetSuccess = "view/Success.jsp";
		String targetError = "view/Error.jsp";
		String targetHome = "Register.jsp";
/////////////////////////////////////////////////////
String targetdata = "view/Data.jsp";
//////////////////////////////////////////////////////		
		String path = request.getServletPath().trim();
		
		
		switch(path) {
		//When control comes from registration page, the code get executed, 
		//and move control to CustomerHome page
///////////////////////////////////////////////////////////////////////////////////////////////////////////
case "/get.here":
CSI dataget = new CSI();
try{
//List<UserBean> udata=dataget.get();
	List<UserBean> udata	= dataget.getfake();
session.setAttribute("data", udata);
session.setAttribute("length", udata.size());
target= targetdata;
}
catch (AirSpaceException e){}
break;
////////////////////////////////////////////////////////////////////////////////////////////////////
		case "/register.here":
			String name  = request.getParameter("name");
			String userName = request.getParameter("uname");
			String mobNo = request.getParameter("mobileno");
			String password =  request.getParameter("pass");
		
			user.setName(name);
			user.setUserName(userName);
			user.setPassword(password);
			user.setMobileNo(mobNo);	
			
			try {
				custService.addUser(user);
				System.out.println("In Set Attribute");
				session.setAttribute("user", user);
				target = targetAdd;
			} catch (AirSpaceException exp) {
				session.setAttribute("error", exp.getMessage());
				
				System.out.println("Exception");
				target= targetError;			
			}
			break;
			
		//When control comes from CustomerHome page, the code get executed, 
		//and move control to PayBill page
		case "/payment.here":
			String mobile = ((UserBean)session.getAttribute("user")).getMobileNo();
			session.setAttribute("mobileNo",mobile);
			target = targetPay;
			break;
			
		//When control comes from PayBill page, the code get executed, 
		//and move control to Success page
		case "/result.here":
			String  resultprice = request.getParameter("result");
			int price  = Integer.parseInt(resultprice);
			int Balance = 750-price;
			session.setAttribute("balance", Balance);
			target = targetSuccess;
			break;
			
		//If some error occurs, the code get executed, 
		//and gives user the utility to move on Registration page
		case "/back.here":
			session.setAttribute("error", null);
			target = targetHome;
			break;
	}
		//Sending the user to appropriate page based on the target set from above cases
		RequestDispatcher dispatcher = request.getRequestDispatcher(target);
		dispatcher.forward(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
