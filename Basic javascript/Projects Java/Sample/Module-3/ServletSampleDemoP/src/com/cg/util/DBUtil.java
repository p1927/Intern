package com.cg.util;


import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public class DBUtil 
{
	 static Connection con=null;
	public static Connection getConnection()
	{
		InitialContext initialContext;
		try 
		{
			initialContext = new InitialContext();
			DataSource ds=(DataSource)initialContext.
			lookup("java:/jdbc/CGDS");
			con=ds.getConnection();
			//con.setAutoCommit(false);
		} 
		catch (Exception e) 
		{			
			e.printStackTrace();
		}
		
		/*try 
		{
			Class.forName("oracle.jdbc.driver.OracleDriver");
			con=DriverManager.getConnection
					("jdbc:oracle:thin:@localhost:1521:XE","system","root");
			System.out.println(" Connection Con ..."+con);
		} 
		catch (Exception e)
		{			
			e.printStackTrace();
		}*/
		
		return con;
		
	}

}
