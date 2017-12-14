package com.cg.cra.dao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import com.cg.cra.util.DBUtil;
import com.cg.cra.dto.Course;
import com.cg.cra.dto.Registration;
import com.cg.cra.exception.CourseException;

public class RegistrationDaoImpl implements RegistrationDao {
	Connection conn;
	@Override
	public List<Course> getAllCourses() throws CourseException {
		String sql = "SELECT course_id, title, duration FROM course";
		List<Course> clist = new ArrayList<Course>();
		conn = DBUtil.getConnection();
		try {
			Statement st = conn.createStatement();
			ResultSet rst = st.executeQuery(sql);
			while(rst.next()){
				Course course = new Course();
				course.setCourseId(rst.getInt("course_id"));
				course.setTitle(rst.getString("title"));
				course.setDuration(rst.getInt("duration"));
				clist.add(course);
			}
		} catch (SQLException e) {
			throw new CourseException("Problem in fetching course list.."+e.getMessage());
		}
		return clist;
	}

	private int generateRegistrationId() throws CourseException{
		int rid=0;
		String sql= "SELECT seq_reg_id.NEXTVAL FROM DUAL";
		conn = DBUtil.getConnection();
		try {
			Statement st = conn.createStatement();
			ResultSet rst = st.executeQuery(sql);
			rst.next();
			rid = rst.getInt(1);
		} catch (SQLException e) {
			throw new CourseException("Problem in generating registration id.. "+e.getMessage());
		}
		return rid;
	}
	@Override
	public int register(Registration reg) throws CourseException {
		reg.setRegId(generateRegistrationId());
		String sql = "INSERT INTO registration VALUES(?,?,?,?)";
		try {
			PreparedStatement pst = conn.prepareStatement(sql);
			pst.setInt(1, reg.getRegId());
			pst.setString(2, reg.getSname());
			pst.setDate(3, Date.valueOf(reg.getRegDate()));
			pst.setInt(4, reg.getCourseId());
			pst.executeUpdate();
		} catch (SQLException e) {
			throw new CourseException("Problem in inserting data.."+e.getMessage());
		}
		return reg.getRegId();
	}
}
