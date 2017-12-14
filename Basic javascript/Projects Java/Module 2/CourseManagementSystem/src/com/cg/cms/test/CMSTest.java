package com.cg.cms.test;

import static org.junit.Assert.*;

import java.sql.Connection;

import org.junit.Before;
import org.junit.Test;

import com.cg.cms.dao.CourseDao;
import com.cg.cms.dao.CourseDaoImpl;
import com.cg.cms.exception.CourseException;
import com.cg.cms.util.DBUtil;

public class CMSTest {
	CourseDao cdao;
	@Before
	public void setup(){
		 cdao = new CourseDaoImpl();
	}
	@Test
	public void test() {
		try {
			assertNotNull(cdao.searchCourse(100));
		} catch (CourseException e) {
			System.out.println(e.getMessage());
		}
	}
	@Test
	public void test1() {
		try {
			assertNull(cdao.searchCourse(-100));
		} catch (CourseException e) {
			System.out.println(e.getMessage());
		}
	}
}