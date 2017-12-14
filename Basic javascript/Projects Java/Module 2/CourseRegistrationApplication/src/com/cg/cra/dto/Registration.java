package com.cg.cra.dto;

import java.time.LocalDate;

public class Registration {
	private int regId;
	private String sname;
	private LocalDate regDate;
	private int courseId;
	public Registration() {
		// TODO Auto-generated constructor stub
	}
	public Registration(int regId, String sname, LocalDate regDate, int courseId) {
		super();
		this.regId = regId;
		this.sname = sname;
		this.regDate = regDate;
		this.courseId = courseId;
	}
	public int getRegId() {
		return regId;
	}
	public void setRegId(int regId) {
		this.regId = regId;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public LocalDate getRegDate() {
		return regDate;
	}
	public void setRegDate(LocalDate regDate) {
		this.regDate = regDate;
	}
	public int getCourseId() {
		return courseId;
	}
	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}
	@Override
	public String toString() {
		return "Registration [regId=" + regId + ", sname=" + sname
				+ ", regDate=" + regDate + ", courseId=" + courseId + "]";
	}
}
