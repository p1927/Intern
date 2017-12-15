window.onload= init;

let cm; 

function init() { 
	cm = new ContactManager();
	
  	cm.addTestData();
  	cm.printContactsToConsole();
	  cm.displayContactsAsATable("contacts");
}

function formSubmitted() {
	let name = document.querySelector("#name");
  	let email = document.querySelector("#email");
	let newContact = new Contact(name.value, email.value);
	cm.add(newContact);
	
	
	name.value = "";
	email.value = "";
	

	cm.displayContactsAsATable("contacts");
	
	return false;
}

function emptyList() {
	cm.empty();
  	cm.displayContactsAsATable("contacts");
}

function loadList() {
	cm.load();
  	cm.displayContactsAsATable("contacts");
}


class Contact {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
}

class ContactManager {
	constructor() {
		
		this.listOfContacts = [];
	}
	
	addTestData() {
		var c1 = new Contact("Shane Warne", "shane@gmail.com");
  		var c2 = new Contact("Robert Fripp", "robert.fripp@gmail.com");
  		var c3 = new Contact("Angus Young", "angus@gmail.com");
  		var c4 = new Contact("Arnold Schwarzenneger", "arnold@gmail.com");
		
		this.add(c1);
		this.add(c2);
		this.add(c3);
		this.add(c4);
		
		this.sort();
	}

	empty() {
		this.listOfContacts = [];
	}
	
	add(contact) {
		this.listOfContacts.push(contact);
	}
	
	remove(contact) {
		for(let i = 0; i < this.listOfContacts.length; i++) { 
			var c = this.listOfContacts[i];

			if(c.email === contact.email) {

				this.listOfContacts.splice(i, i);
				break;
			}
		}
	}
	
	sort() {
		
		this.listOfContacts.sort(ContactManager.compareByName);
	}
	
	static compareByName(c1, c2) {
	
		if (c1.name < c2.name)
     		return -1;
		
    	if (c1.name > c2.name)
     		return 1;
  
    	return 0;
	}
	
	printContactsToConsole() {
		this.listOfContacts.forEach(function(c) {
			console.log(c.name);
		});
	}
	
	load() {
		if(localStorage.contacts !== undefined) {
			this.listOfContacts = JSON.parse(localStorage.contacts);
		}
	}
	
	save() {
		
		localStorage.contacts = JSON.stringify(this.listOfContacts);
	} 
	
  	displayContactsAsATable(idOfContainer) {
	
    	let container = document.querySelector("#" + idOfContainer);
    	container.innerHTML = "";

		
		if(this.listOfContacts.length === 0) {
			container.innerHTML = "<p>No contacts to display!</p>";
			return;
		}  
  
    	var table = document.createElement("table");
 var table = document.createElement("table");
  var header = table.insertRow();
  header.innerHTML = "<th>Name</th><th>Email</th>";

    	this.listOfContacts.forEach(function(currentContact) {
 var row = table.insertRow();
   row.innerHTML = "<td>" + currentContact.name + "</td>" + "<td>" + currentContact.email + "</td>"
     	});
  
     	container.appendChild(table);
  	}
}

