package com.cg.cra.views;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.cg.cra.dto.Course;

@WebServlet("/homeView")
public class HomeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		List<Course> clist = (List<Course>)request.getAttribute("clist");
		out.print("<h1>List of Courses</h1>");
		out.print("<table>");
		for(Course c:clist){
			out.print("<tr>");
			out.print("<td>"+c.getTitle()+"</td>");
			out.print("<td>"+c.getDuration()+"</td>");
			out.print("<td>"+c.getFees()+"</td>");
			out.print("<td><a href='register?cid="+c.getCourseId()+"'>Register</td>");
			out.print("</tr>");
		}
		out.print("</table>");
		
	}

}
