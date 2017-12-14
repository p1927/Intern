package com.cg.cms.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

import com.cg.cms.exception.CourseException;

public class DBUtil {
	private static Connection conn=null;
	public static Connection getConnection() throws CourseException{
		if(conn==null){
			try {
				FileInputStream fin = new FileInputStream("resources/JDBC.properties");
				Properties props = new Properties();
				props.load(fin);
				String driver = props.getProperty("db.driver");
				String url = props.getProperty("db.url");
				String user = props.getProperty("db.user");
				String pass = props.getProperty("db.pass");
				Class.forName(driver);
				conn = DriverManager.getConnection(url, user, pass);
			} catch (FileNotFoundException e) {
				throw new CourseException("Property file not found.."+e.getMessage());
			} catch (ClassNotFoundException e) {
				throw new CourseException("Driver class not found.."+e.getMessage());
			} catch (IOException e) {
				throw new CourseException("Problem in reading property.."+e.getMessage());
			} catch (SQLException e) {
				throw new CourseException("Problem in obtaining connection.."+e.getMessage());
			}
		}
		return conn;
	}
}