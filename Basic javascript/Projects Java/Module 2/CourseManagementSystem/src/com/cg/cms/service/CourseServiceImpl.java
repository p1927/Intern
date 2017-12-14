package com.cg.cms.service;

import java.util.List;

import com.cg.cms.dao.CourseDao;
import com.cg.cms.dao.CourseDaoImpl;
import com.cg.cms.dto.Course;
import com.cg.cms.exception.CourseException;

public class CourseServiceImpl implements CourseService {
	CourseDao cdao = new CourseDaoImpl();
	@Override
	public int insertCourse(Course course) throws CourseException {
		return cdao.insertCourse(course);
	}
	@Override
	public List<Course> getAllCourses() throws CourseException {
		return cdao.getAllCourses();
	}
	@Override
	public Course searchCourse(int cid) throws CourseException {
		return cdao.searchCourse(cid);
	}
	@Override
	public boolean validateCourse(Course course) throws CourseException {
		if(!course.getTitle().matches("[A-Z][a-z]{2,15}")){
			throw new CourseException("Course title should start with Capital letter and of min 3 letters");
		}
		if(course.getDuration()<=0){
			throw new CourseException("Duration should not be 0 or negative");
		}
		return true;
	}
}
