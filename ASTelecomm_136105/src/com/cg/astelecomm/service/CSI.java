package com.cg.astelecomm.service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.cg.astelecomm.dto.UserBean;
import com.cg.astelecomm.util.DbUtil;
import com.cg.astelecomm.exception.AirSpaceException;

public class CSI {
	
	Connection con= null;
			
	
	public List<UserBean> get() throws AirSpaceException {
		// TODO Auto-generated method stub
	con=DbUtil.getConnection();
	String query = "SELECT * FROM users";
	List<UserBean> uselist = new ArrayList<UserBean>();
      // create the java statement
      Statement st;
	try {
		st = con.createStatement();
		ResultSet rs = st.executeQuery(query);
	   	 	
     	 
     		 while (rs.next())
     	      {
     	         UserBean user=new UserBean();
     	      	 user.setName(rs.getString("name"));
     	         user.setUserName(rs.getString("uname"));
     	         user.setPassword(rs.getString("passname"));
     	         user.setMobileNo(rs.getString("mbno"));
     	         uselist.add(user);
     	         
     	         
     	    };
				
	
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return uselist;
	
}
	
	public List<UserBean> getfake() throws AirSpaceException {
		// TODO Auto-generated method stub
	
	List<UserBean> uselist = new ArrayList<UserBean>();
      // create the java statement
      
		
     	         UserBean user=new UserBean();
     	      	 user.setName("Pratyush");
     	         user.setUserName("dogf");
     	         user.setPassword("Hola");
     	         user.setMobileNo("954354");
     	         uselist.add(user);
     	        user.setName("Mishra");
    	         user.setUserName("catf");
    	         user.setPassword("bhHola");
    	         user.setMobileNo("977774");
    	         uselist.add(user);
     	         
     	    
				
	
	 
	return uselist;
	
}
	
	
}
