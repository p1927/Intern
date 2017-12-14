package com.cg.cra.dao;

import java.util.List;

import com.cg.cra.dto.Course;
import com.cg.cra.dto.Registration;
import com.cg.cra.exception.CourseException;

public interface RegistrationDao {
	List<Course> getAllCourses() throws CourseException;
	int register(Registration reg) throws CourseException;
}