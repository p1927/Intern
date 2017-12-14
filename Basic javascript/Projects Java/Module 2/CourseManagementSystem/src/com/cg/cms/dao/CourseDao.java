package com.cg.cms.dao;

import java.util.List;

import com.cg.cms.dto.Course;
import com.cg.cms.exception.CourseException;

public interface CourseDao {
	int insertCourse(Course course) throws CourseException;
	List<Course> getAllCourses() throws CourseException;
	Course searchCourse(int cid) throws CourseException;
}