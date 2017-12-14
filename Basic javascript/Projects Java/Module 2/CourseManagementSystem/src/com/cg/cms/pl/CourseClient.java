package com.cg.cms.pl;

import java.util.List;
import java.util.Scanner;
import com.cg.cms.dto.Course;
import com.cg.cms.exception.CourseException;
import com.cg.cms.service.CourseService;
import com.cg.cms.service.CourseServiceImpl;

public class CourseClient {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		CourseService cser = new CourseServiceImpl();
		do{
			System.out.println("Menu");
			System.out.println("1. Insert Course Details");
			System.out.println("2. Search Course");
			System.out.println("3. Show all courses");
			System.out.println("4. Exit");
			System.out.println("Enter your choice");
			int choice = sc.nextInt();
			switch(choice){
			case 1:
				System.out.println("Enter course title:");
				String title = sc.next();
				System.out.println("Enter Duration :");
				int duration = sc.nextInt();
				Course course = new Course();
				course.setTitle(title);
				course.setDuration(duration);
				try {
					int cid = cser.insertCourse(course);
					System.out.println("Course inserted with course id : "+cid);
				} catch (CourseException e) {
					System.out.println(e.getMessage());
				}
				break;
			case 2:
				System.out.println("Enter course id to search :");
				int cid = sc.nextInt();
				try {
					Course course1 =cser.searchCourse(cid);
					System.out.println(course1);
				} catch (CourseException e) {
					System.out.println(e.getMessage());
				}
				break;
			case 3:
				try {
					List<Course> clist = cser.getAllCourses();
					if(clist.size()!=0){
						for(Course c:clist){
							System.out.println(c);
						}
					}else{
						System.out.println("No courses available");
					}
				} catch (CourseException e) {
					System.out.println(e.getMessage());
				}
				break;
			case 4: System.exit(0);
			}
		}while(true);
	}
}