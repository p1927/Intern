package com.cg.astelecomm.service;

import com.cg.astelecomm.dto.UserBean;
import com.cg.astelecomm.exception.AirSpaceException;


public interface ICustomerService {
	public void addUser(UserBean user) throws AirSpaceException;

}
