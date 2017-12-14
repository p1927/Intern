package com.cg.dao;

import java.sql.*;
import java.util.ArrayList;

import com.cg.dto.LoginDTO;
import com.cg.util.DBUtil;

public class UserDaoImpl  implements IUserDao{

	Connection con;
	Statement st;
	PreparedStatement pst;
	ResultSet rs;
	@Override
	public boolean isValidUser(LoginDTO loginDto)
	{		
		con=DBUtil.getConnection();
		System.out.println(" CGot  Connection Con  In ..Dao."+con);
		String qry="SELECT * FROM UserDetailTable where userid=?";
		boolean flag=false;
		try 
		{			
			pst=con.prepareStatement(qry);
			pst.setString(1, loginDto.getUserName());
			rs=pst.executeQuery();
			rs.next();
			String tblUID=rs.getString("userid");
			String tblPwd=rs.getString("password");			
			if(tblPwd.equalsIgnoreCase(loginDto.getPassword()))
			{
				flag=true;
			}
			else
			{
				flag=false;
			}
		}
		catch (SQLException e)
		{			
			e.printStackTrace();
		}
		finally
		{	
			try
			{
				rs.close();
				pst.close();
				con.close();
			}
			catch(Exception ee){ee.printStackTrace();}
		}
		return flag;
	}
	@Override
	public int addUser(LoginDTO userDto) {
		
		con=DBUtil.getConnection();
		String insertQry=
		"INSERT INTO userdetailtable values(?,?)";
		int dataInserted=0;
		try 
		{
			pst=con.prepareStatement(insertQry);
			pst.setString(1, userDto.getUserName());
			pst.setString(2, userDto.getPassword());
			dataInserted=pst.executeUpdate();
		} 
		catch (Exception e)
		{			
			e.printStackTrace();
		}	
		finally
		{
			try
			{
				pst.close();
				con.close();
			} 
			catch (SQLException e) 
			{			
				e.printStackTrace();
			}			
		}
		return dataInserted;
	}
	@Override
	public ArrayList<LoginDTO> getAllUsers() {
		
		con=DBUtil.getConnection();
		String qry="SELECT * FROM userdetailTable";		
		ArrayList<LoginDTO> userList=
				new ArrayList<LoginDTO>();
		try
		{
			st=con.createStatement();
			rs=st.executeQuery(qry);
			while(rs.next())
			{
				LoginDTO lg=new LoginDTO();
				lg.setUserName(rs.getString("userid"));
				lg.setPassword(rs.getString("password"));
				userList.add(lg);
				System.out.println("Arraylist in dao :"+
						userList);
			}
		} 
		catch (SQLException e) 
		{			
			e.printStackTrace();
		}
		return userList;
	}

}
