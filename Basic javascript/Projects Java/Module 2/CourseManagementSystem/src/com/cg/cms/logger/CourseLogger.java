package com.cg.cms.logger;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class CourseLogger {
	static Logger logger; 
	public static Logger getLogger(){
		if(logger==null){
			logger = Logger.getLogger("CourseLogger");
			PropertyConfigurator.configure("resources/log4j.properties");
		}
		return logger;
	}
}