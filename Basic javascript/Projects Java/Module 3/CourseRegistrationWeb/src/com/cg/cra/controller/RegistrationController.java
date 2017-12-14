package com.cg.cra.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.cg.cra.dto.Course;
import com.cg.cra.dto.Registration;
import com.cg.cra.exception.RegistrationException;
import com.cg.cra.service.IRegistrationService;
import com.cg.cra.service.RegistrationServiceImpl;

@WebServlet(urlPatterns={"/home","/register","/regCourse"})
public class RegistrationController extends HttpServlet {
	private static final long serialVersionUID = 1L;
 	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String target="";
		HttpSession sess;
		IRegistrationService rser = new RegistrationServiceImpl();
		String url = request.getServletPath();
		System.out.println(url);
		switch(url){
		case "/home":
			try {
				List<Course> clist = rser.getAllCourses();
				request.setAttribute("clist", clist);
				target ="homeView";
			} catch (RegistrationException e) {
				request.setAttribute("error", e.getMessage());
				target = "errorView";
			}
			break;
		case "/register":
			String cid = request.getParameter("cid");
			sess = request.getSession(true);
			sess.setAttribute("cid", Integer.parseInt(cid));
			target="Register.html";
			break;
		case "/regCourse":
			String sname = request.getParameter("sname");
			String dateStr = request.getParameter("regDate");
			DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd");
			LocalDate rDate = LocalDate.parse(dateStr, format);
			
			sess = request.getSession(false);
			int cid1 = (Integer)sess.getAttribute("cid");
			Registration register = new Registration();
			register.setStudentName(sname);
			register.setRegDate(rDate);
			register.setCourseId(cid1);
			try {
				rser.insertRegistration(register);
				request.setAttribute("register", register);
				target="SuccessView";
			} catch (RegistrationException e) {
				request.setAttribute("error", e.getMessage());
				target = "errorView";
			}
			break;
		}
		RequestDispatcher disp = request.getRequestDispatcher(target);
		disp.forward(request, response);
	}
}
