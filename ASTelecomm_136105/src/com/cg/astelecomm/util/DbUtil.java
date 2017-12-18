package com.cg.astelecomm.util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import com.cg.astelecomm.exception.AirSpaceException;


public class DbUtil {
	
	/*****************************************************************
	 *  - Method Name:	getConnection() 
	 *  - Input Parameters : 
	 *  - Return Type :	Connection
	 *  - Throws : AirSpaceException 
	 *  - Author : Ajeet Pandey 136105
	 *  - Creation Date : 23/10/2017
	 *  - Description :  Returns connection object
	 *******************************************************************/
	
	public static Connection getConnection() throws AirSpaceException{
		DataSource ds = null;
		Connection con=null;
		try {
			InitialContext context= new InitialContext();
			ds=(DataSource) context.lookup("java:/jdbc/MyDs");
			con=ds.getConnection();
		} catch (NamingException | SQLException e) {
			// TODO Auto-generated catch block
			//e.printStackTrace();
			throw new AirSpaceException("Error in Connection");			
		}
		return con;
	}
}
