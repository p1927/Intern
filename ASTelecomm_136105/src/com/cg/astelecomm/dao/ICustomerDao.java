package com.cg.astelecomm.dao;

import com.cg.astelecomm.dto.UserBean;
import com.cg.astelecomm.exception.AirSpaceException;



public interface ICustomerDao {
	public void addUser(UserBean user) throws AirSpaceException;
}
