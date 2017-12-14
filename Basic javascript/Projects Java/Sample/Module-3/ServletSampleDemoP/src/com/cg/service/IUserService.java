package com.cg.service;
import java.util.ArrayList;

import com.cg.dto.LoginDTO;
public interface IUserService {
	public boolean isValidUser(LoginDTO loginDto);
	 public int addUser(LoginDTO userDto);
	 public ArrayList<LoginDTO> getAllUsers();
}
