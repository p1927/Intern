package com.cg.astelecomm.service;

import com.cg.astelecomm.dao.CustomerDaoImpl;
import com.cg.astelecomm.dao.ICustomerDao;
import com.cg.astelecomm.dto.UserBean;
import com.cg.astelecomm.exception.AirSpaceException;

public class CustomerServiceImpl implements ICustomerService{
	ICustomerDao customerDao = new CustomerDaoImpl();
	
	
	/*****************************************************************
	 *  - Method Name:	addUser(UserBean user) 
	 *  - Input Parameters : UserBean user
	 *  - Return Type :	void
	 *  - Throws : AirSpaceException 
	 *  - Author : Ajeet Pandey 136105
	 *  - Creation Date : 23/10/2017
	 *  - Description :  pass User object to DAO layer
	 *******************************************************************/
	
	
	@Override
	public void addUser(UserBean user) throws AirSpaceException {
		// TODO Auto-generated method stub
		customerDao.addUser(user);
	}

}
