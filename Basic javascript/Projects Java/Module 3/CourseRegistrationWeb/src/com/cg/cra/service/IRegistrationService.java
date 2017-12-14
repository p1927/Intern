package com.cg.cra.service;

import java.util.List;

import com.cg.cra.dto.Course;
import com.cg.cra.dto.Registration;
import com.cg.cra.exception.RegistrationException;

public interface IRegistrationService {
	int insertRegistration(Registration register) throws RegistrationException;
	boolean validateCourse(int courseId) throws RegistrationException;
	List<Course> getAllCourses() throws RegistrationException;
	boolean validateRegistration(Registration reg) throws RegistrationException;
}