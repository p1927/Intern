package com.cg.cms.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.cg.cms.dto.Course;
import com.cg.cms.exception.CourseException;
import com.cg.cms.logger.CourseLogger;
import com.cg.cms.util.DBUtil;

public class CourseDaoImpl implements CourseDao {
	Connection conn;
	Logger logger = CourseLogger.getLogger();
	private int generateCourseId() throws CourseException{
		int cid=0;
		String sql= "SELECT seq_course_id.NEXTVAL FROM DUAL";
		conn = DBUtil.getConnection();
		try {
			Statement st = conn.createStatement();
			ResultSet rst = st.executeQuery(sql);
			rst.next();
			cid = rst.getInt(1);
		} catch (SQLException e) {
			logger.error("Problem in generating course id.. "+e.getMessage());
			throw new CourseException("Problem in generating course id.. "+e.getMessage());
		}
		return cid;
	}
	@Override
	public int insertCourse(Course course) throws CourseException {
		course.setCourseId(generateCourseId());
		String sql = "INSERT INTO course VALUES(?,?,?)";
		conn = DBUtil.getConnection();
		try {
			PreparedStatement pst = conn.prepareStatement(sql);
			pst.setInt(1, course.getCourseId());
			pst.setString(2, course.getTitle());
			pst.setInt(3, course.getDuration());
			pst.executeUpdate();
			logger.info(course.getCourseId()+" Record inserted...");
		} catch (SQLException e) {
			logger.error("Problem in inserting course details..."+e.getMessage());
			throw new CourseException("Problem in inserting course details..."+e.getMessage());
		}
		return course.getCourseId();
	}

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

	@Override
	public Course searchCourse(int cid) throws CourseException {
		String sql = "SELECT course_id, title, duration FROM course WHERE course_id=?";
		Course course = null;
		conn = DBUtil.getConnection();
		try {
			PreparedStatement pst = conn.prepareStatement(sql);
			pst.setInt(1, cid);
			ResultSet rst = pst.executeQuery();
			if(rst.next()){
				course = new Course();
				course.setCourseId(rst.getInt("course_id"));
				course.setTitle(rst.getString("title"));
				course.setDuration(rst.getInt("duration"));
			}
		} catch (SQLException e) {
			throw new CourseException("Problem in fetching course data.."+e.getMessage());
		}
		return course;
	}
}
