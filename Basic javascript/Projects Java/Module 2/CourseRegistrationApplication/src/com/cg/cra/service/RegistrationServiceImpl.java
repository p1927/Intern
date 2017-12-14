package com.cg.cra.service;

import java.time.LocalDate;
import java.util.List;

import com.cg.cra.dao.RegistrationDao;
import com.cg.cra.dao.RegistrationDaoImpl;
import com.cg.cra.dto.Course;
import com.cg.cra.dto.Registration;
import com.cg.cra.exception.CourseException;

public class RegistrationServiceImpl implements RegistrationService {
	RegistrationDao rdao = new RegistrationDaoImpl();
	@Override
	public List<Course> getAllCourses() throws CourseException {
		return rdao.getAllCourses();
	}

	@Override
	public int register(Registration reg) throws CourseException {
		return rdao.register(reg);
	}

	@Override
	public boolean validateRegistration(Registration reg)
			throws CourseException {
		if(!reg.getSname().matches("[A-Z][a-z]{3,20}")){
			throw new CourseException("Name should start with Capital letter and minimum 4 letter");
		}
		if(reg.getRegDate().isAfter(LocalDate.now())){
			throw new CourseException("Registration date should be today or earlier");
		}
		return true;
	}
}