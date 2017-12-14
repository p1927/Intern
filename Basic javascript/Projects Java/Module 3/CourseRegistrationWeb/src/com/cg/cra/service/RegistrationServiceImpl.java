package com.cg.cra.service;

import java.util.List;

import com.cg.cra.dao.IRegistrationDao;
import com.cg.cra.dao.RegistrationDaoImpl;
import com.cg.cra.dto.Course;
import com.cg.cra.dto.Registration;
import com.cg.cra.exception.RegistrationException;

public class RegistrationServiceImpl implements IRegistrationService {
	IRegistrationDao rdao = new RegistrationDaoImpl();
	@Override
	public int insertRegistration(Registration register)
			throws RegistrationException {
		return rdao.insertRegistration(register);
	}

	@Override
	public boolean validateCourse(int courseId) throws RegistrationException {
		return rdao.validateCourse(courseId);
	}

	@Override
	public List<Course> getAllCourses() throws RegistrationException {
		return rdao.getAllCourses();
	}

	@Override
	public boolean validateRegistration(Registration reg)
			throws RegistrationException {
		//Not yet implemented
		return true;
	}

}
