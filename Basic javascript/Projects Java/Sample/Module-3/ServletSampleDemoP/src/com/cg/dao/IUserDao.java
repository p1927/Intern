package com.cg.dao;
import java.util.ArrayList;

import com.cg.dto.LoginDTO;


public interface IUserDao
{
	public boolean isValidUser(LoginDTO loginDto);
    public int addUser(LoginDTO userDto);
    public ArrayList<LoginDTO> getAllUsers();
}
