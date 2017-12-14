package com.cg.cra.pl;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Scanner;

import com.cg.cra.dto.Course;
import com.cg.cra.dto.Registration;
import com.cg.cra.exception.CourseException;
import com.cg.cra.service.RegistrationService;
import com.cg.cra.service.RegistrationServiceImpl;

public class RegistrationClient {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		RegistrationService rser = new RegistrationServiceImpl();
		do{
			try {
				List<Course> clist = rser.getAllCourses();
				if(clist.size()==0){
					System.out.println("No course available..");
					break;
				}else{
					for(Course c:clist){
						System.out.println(c);
					}
					System.out.println("Enter your choice");
					System.out.println("1: Register, 2:exit");
					int choice = sc.nextInt();
					switch(choice){
					case 1:
						System.out.println("Enter course to register from above list:");
						int courseId = sc.nextInt();
						System.out.println("Enter Student name :");
						String sname = sc.next();
						System.out.println("Enter Registration date(dd-mm-yyyy):");
						String regDateStr = sc.next();
						Registration reg = new Registration();
						reg.setCourseId(courseId);
						reg.setSname(sname);
						DateTimeFormatter format = DateTimeFormatter.ofPattern("dd-MM-yyyy");
						reg.setRegDate(LocalDate.parse(regDateStr, format));
						if(rser.validateRegistration(reg)){
							rser.register(reg);
							System.out.println(reg.getSname()+" regired with id "+reg.getRegId());
						}
						break;
					case 2: System.exit(0);
					}
				}
			} catch (CourseException e) {
				System.out.println(e.getMessage());
			}             
		}while(true);
	}
}
