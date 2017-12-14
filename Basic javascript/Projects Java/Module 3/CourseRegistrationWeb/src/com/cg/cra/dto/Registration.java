package com.cg.cra.dto;
import java.time.LocalDate;
public class Registration {
	private int regNo;
	private String studentName;
	private LocalDate regDate;
	private int courseId;
	
	public Registration() {
		// TODO Auto-generated constructor stub
	}

	public int getRegNo() {
		return regNo;
	}

	public void setRegNo(int regNo) {
		this.regNo = regNo;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
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
		return "Registration [regNo=" + regNo + ", studentName=" + studentName
				+ ", regDate=" + regDate + ", courseId=" + courseId + "]";
	}
}