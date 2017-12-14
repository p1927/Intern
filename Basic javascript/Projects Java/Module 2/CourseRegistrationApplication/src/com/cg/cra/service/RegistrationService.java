package com.cg.cra.service;

import java.util.List;

import com.cg.cra.dto.Course;
import com.cg.cra.dto.Registration;
import com.cg.cra.exception.CourseException;

public interface RegistrationService {
	List<Course> getAllCourses() throws CourseException;
	int register(Registration reg) throws CourseException;
	boolean validateRegistration(Registration reg)throws CourseException;
}