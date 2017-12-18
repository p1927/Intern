package com.cg.astelecomm.dto;

public class UserBean {
	private String name;
	private String userName;
	private String password;
	private String mobileNo;
	public UserBean() {
		// TODO Auto-generated constructor stub
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	
	@Override
	public String toString() {
		return "UserBean [name=" + name + ", userName=" + userName
				+ ", password=" + password + ", mobileNo=" + mobileNo + "]";
	}
	
}
