package com.cg.astelecomm.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.cg.astelecomm.dto.UserBean;
import com.cg.astelecomm.exception.AirSpaceException;
import com.cg.astelecomm.util.DbUtil;

public class CustomerDaoImpl implements ICustomerDao{

	Connection con= null;
	
	/*****************************************************************
	 *  - Method Name:	addUser(UserBean user) 
	 *  - Input Parameters : UserBean user
	 *  - Return Type :	void
	 *  - Throws : AirSpaceException 
	 *  - Author : Ajeet Pandey 136105
	 *  - Creation Date : 23/10/2017
	 *  - Description :  add User into Database
	 *******************************************************************/
	
	
	@Override
	public void addUser(UserBean user) throws AirSpaceException {
		// TODO Auto-generated method stub
		int status = 0;
		try {
			con=DbUtil.getConnection();
			String sql = "Insert into Users values (?,?,?,?)";
			PreparedStatement pstm = con.prepareStatement(sql);
			pstm.setString(1, user.getName());
			pstm.setString(2, user.getUserName());
			pstm.setString(3, user.getPassword());
			pstm.setString(4, user.getMobileNo());


			
			status = pstm.executeUpdate();
			if(status == 1){
				return;
			}
			else{
				throw new AirSpaceException("Not able to insert data");
			}
			
		} catch (AirSpaceException | SQLException e) {
			// TODO Auto-generated catch block
			//e.printStackTrace();
			throw new AirSpaceException("User already exists. Try with different user name");
		}
		finally{
			if(con!=null)
				try {
					con.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					//e.printStackTrace();
					throw new AirSpaceException("Error in closing the connection");
				}
		}
		
	}

}
