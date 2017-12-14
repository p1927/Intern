package com.cg.cra.dao;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import com.cg.cra.exception.RegistrationException;

public class DBUtil {
	private static Connection conn;
	
	public static Connection getConnection() throws RegistrationException{
		if(conn==null){
			try {
				InitialContext ic = new InitialContext();
				DataSource ds =(DataSource)ic.lookup("java:/jdbc/OracleDS");
				conn = ds.getConnection();
			}  catch (SQLException e) {
				throw new RegistrationException("Problem in obtaining connection "+e.getMessage());
			} catch (NamingException e) {
				throw new RegistrationException("Datasource not found..");
			}
		}
		return conn;
	}
}
