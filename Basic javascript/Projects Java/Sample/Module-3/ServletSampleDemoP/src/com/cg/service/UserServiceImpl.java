package com.cg.service;
import java.util.ArrayList;

import com.cg.dao.IUserDao;
import com.cg.dao.UserDaoImpl;
import com.cg.dto.LoginDTO;
public class UserServiceImpl  implements IUserService
{
	IUserDao userDao=new UserDaoImpl();
	@Override
	public boolean isValidUser(LoginDTO loginDto)
	{		
		return userDao.isValidUser(loginDto);
	}
	@Override
	public int addUser(LoginDTO userDto) {
		
		return userDao.addUser(userDto);
	}
	@Override
	public ArrayList<LoginDTO> getAllUsers() {
		
		return userDao.getAllUsers();
	}
}
