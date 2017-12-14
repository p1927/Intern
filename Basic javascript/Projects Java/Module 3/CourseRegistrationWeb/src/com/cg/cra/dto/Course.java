package com.cg.cra.dto;

public class Course {
	private int courseId;
	private String title;
	private int duration;
	private double fees;
	public Course() {
		// TODO Auto-generated constructor stub
	}
	public Course(int courseId, String title, int duration, double fees) {
		super();
		this.courseId = courseId;
		this.title = title;
		this.duration = duration;
		this.fees = fees;
	}
	public int getCourseId() {
		return courseId;
	}
	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	public double getFees() {
		return fees;
	}
	public void setFees(double fees) {
		this.fees = fees;
	}
	@Override
	public String toString() {
		return courseId + "\t" + title
				+ "\t" + duration + "\t" + fees;
	}
}
