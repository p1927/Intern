package com.cg.cra.dao;

import java.util.List;

import com.cg.cra.dto.Course;
import com.cg.cra.dto.Registration;
import com.cg.cra.exception.RegistrationException;

public interface IRegistrationDao {
	int insertRegistration(Registration register) throws RegistrationException;
	boolean validateCourse(int courseId) throws RegistrationException;
	List<Course> getAllCourses() throws RegistrationException;
}