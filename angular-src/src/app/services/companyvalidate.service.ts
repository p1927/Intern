import { Injectable } from '@angular/core';

@Injectable()
export class CompanyvalidateService {

	constructor() { }

	validateRegister(company){
	  	if(company.name == undefined || company.email == undefined || company.password == undefined){
	  		return false;
	  	}
	  	else return true;
	}

  	validateEmail(email){
	    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}
}