package com.cg.cra.dto;

public class Course {
	private int courseId;
	private String title;
	private int duration;
	public Course() {
		// TODO Auto-generated constructor stub
	}
	public Course(int courseId, String title, int duration) {
		super();
		this.courseId = courseId;
		this.title = title;
		this.duration = duration;
	}
	@Override
	public String toString() {
		return courseId + "\t" + title	+ "\t" + duration ;
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

}
