
class Contact {
  constructor(givenName, familyName, phoneNumber){
    this.givenName = givenName;
    this.familyName = familyName;
    this.phoneNumber = phoneNumber;
  }
}

class ContactManager {
  constructor(){
    this.Contacts = [];    
  }

  add(contact){
    this.Contacts.push(contact);
  }

  list(element){

    console.dir(this.Contacts);
    if(this.Contacts === undefined || this.Contacts.length === 0){
      console.log("contact list is empty");
      return;
    }
    //console.dir(this.Contacts);

    var e = document.createElement("H2");
    var t = document.createTextNode("Contact List");
    e.appendChild(t);
    element.innerHTML = "";
    element.appendChild(e);
    var table = document.createElement("TABLE");
    table.id = "contact-list";
    var tr = document.createElement("TR");
    var th = document.createElement("TH");
    th.innerHTML = "Given Name";
    tr.appendChild(th);    
    table.appendChild(tr);
    th = document.createElement("TH");
    th.innerHTML = "Family Name";
    tr.appendChild(th);    
    table.appendChild(tr);
    th = document.createElement("TH");
    th.innerHTML = "Phone Number";
    tr.appendChild(th);    
    table.appendChild(tr);

    this.Contacts.forEach(function(contact){
      tr = document.createElement("TR");
      th = document.createElement("TD");
      th.innerHTML = contact.givenName;
      tr.appendChild(th);    
      table.appendChild(tr);
      th = document.createElement("TD");
      th.innerHTML = contact.familyName;
      tr.appendChild(th);    
      table.appendChild(tr);
      th = document.createElement("TD");
      th.innerHTML = contact.phoneNumber;
      tr.appendChild(th);    
      table.appendChild(tr);
     });
    
    element.appendChild(table);
  }

}

var db = new ContactManager();

window.onload = init();

function init() {
  document.querySelector("#add-contact").addEventListener("click", handleAddContact);

  console.log("myContactManager " + db);

  //  db.add(myContact);

  var element = document.querySelector("#contact-list");
  db.list(element);
}

function handleAddContact(){
  let givenName = document.querySelector("#given-name").value;
  let familyName = document.querySelector("#family-name").value;
  let phoneNumber = document.querySelector("#phone-number").value;

  var contact = new Contact(givenName, familyName, phoneNumber);
  db.add(contact);
  console.log("Add Contact " + givenName + " " + familyName + " " + phoneNumber);
  var element = document.querySelector("#contact-list");
  db.list(element);

}

