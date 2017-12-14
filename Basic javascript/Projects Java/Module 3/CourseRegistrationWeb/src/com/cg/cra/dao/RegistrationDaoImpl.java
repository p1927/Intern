package com.cg.cra.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import com.cg.cra.dto.Course;
import com.cg.cra.dto.Registration;
import com.cg.cra.exception.RegistrationException;

public class RegistrationDaoImpl implements IRegistrationDao {
	static String INSERT_QUERY="INSERT INTO registration VALUES(?,?,?,?)";
	static String VALIDATE_QUERY="SELECT COUNT(*) FROM course WHERE course_id=?";
	static String GET_ALL_QUERY="SELECT course_id,title,duration,fees FROM course";
	static String GENERATE_QUERY="SELECT seq_reg_no.NEXTVAL FROM DUAL";
	Connection conn;
	private int generateRegistrationId() throws RegistrationException{
		conn = DBUtil.getConnection();
		try {
			Statement st = conn.createStatement();
			ResultSet rst = st.executeQuery(GENERATE_QUERY);
			rst.next();
			return rst.getInt(1);
		} catch (SQLException e) {
			throw new RegistrationException("Problem in generating registration id "+e.getMessage());
		}
	}
	@Override
	public int insertRegistration(Registration register)
			throws RegistrationException {
		register.setRegNo(generateRegistrationId());
		conn = DBUtil.getConnection();
		try {
			PreparedStatement pst = conn.prepareStatement(INSERT_QUERY);
			pst.setInt(1, register.getRegNo());
			pst.setString(2, register.getStudentName());
			pst.setDate(3, java.sql.Date.valueOf(register.getRegDate()));
			pst.setInt(4, register.getCourseId());
			pst.executeUpdate();
		} catch (SQLException e) {
			throw new RegistrationException("Problem in Inserting details "+e.getMessage());
		}
		return register.getRegNo();
	}

	@Override
	public boolean validateCourse(int courseId) throws RegistrationException {
		conn = DBUtil.getConnection();
		try {
			PreparedStatement pst = conn.prepareStatement(VALIDATE_QUERY);
			pst.setInt(1, courseId);
			ResultSet rst = pst.executeQuery();
			rst.next();
			if(rst.getInt(1) ==1){
				return true;
			}else{
				return false;
			}
		} catch (SQLException e) {
			throw new RegistrationException("Problem in validation of Course "+e.getMessage());
		}
	}

	@Override
	public List<Course> getAllCourses() throws RegistrationException {
		List<Course> clist = new ArrayList<>();
		conn = DBUtil.getConnection();
		try {
			Statement st = conn.createStatement();
			ResultSet rst = st.executeQuery(GET_ALL_QUERY);
			while(rst.next()){
				Course c = new Course();
				c.setCourseId(rst.getInt("course_id"));
				c.setTitle(rst.getString("title"));
				c.setDuration(rst.getInt("duration"));
				c.setFees(rst.getDouble("fees"));
				clist.add(c);
			}
		} catch (SQLException e) {
			throw new RegistrationException("Problem in fetching all courses "+e.getMessage());
		}
		return clist;
	}

}
