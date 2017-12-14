function insertRow() {
    var table = document.querySelector("#myTable");

    // without parameters, insert at the end,
    // otherwise parameter = index where the row will be inserted
    var row = table.insertRow();

    let p = createRandomPerson();
    row.innerHTML = "<td>" + p.n + "</td><td>" + p.l + "</td><td>" + p.a + "</td><td>" + p.ct + "</td><td>" + p.z + "</td><td>" + p.ctry + "</td>";
}

function insertManyRows () {
    for (let i = 0; i < 200; ++i) {
        insertRow();
    }
}

function getRandomFromArray (arr) {
	let randomIndex = Math.floor(Math.random()*arr.length);
	let randomElement = arr[randomIndex];
	return randomElement;
}

function createRandomPerson() {
    return {
        n: getRandomFromArray(firstNames),
        l: getRandomFromArray(lastNames),
        a: getRandomFromArray(ages),
        ct: getRandomFromArray(cities),
        z: getRandomFromArray(zips),
        ctry: getRandomFromArray(countries)
    }
}

function deleteFirstRow() {
    var table = document.querySelector("#myTable");
    table.deleteRow(1); // 0 is the header
}

function compareValues(input) {

    let myTable = document.querySelector('#myTable');
    // console.log(myTable);
    let inputLength = input.value.length;
    input = input.value.toLowerCase();//lower case for comparison

    let countMatch = 0;
    let feedBack = document.querySelector('#notFound');
    //start loop at 1 to skip header
    for (let i = 1; i < myTable.rows.length; ++i) {
        //a - first and second cell of each row 
        //b -slice name to match lengh of input
        //c -set all tables to default color
        //d - if input matches, change color and input is not empty
        //e - change the color

        let name = myTable.rows[i].cells[0].innerText;//a
        let lastName = myTable.rows[i].cells[1].innerText;
        let fullName = name + " " + lastName;

        fullName = fullName.slice(0, inputLength);//b
        fullName = fullName.toLowerCase();

        myTable.rows[i].style.backgroundColor = '#ffffff';//c

        if ((input === fullName) && (inputLength !== 0)) {//d
            myTable.rows[i].style.backgroundColor = '#ccff99';//e
            countMatch++;
        }
    }

    //display message if there is a match or not
    if (countMatch === 0) {
        feedBack.value = 'Sorry, no contact found.';
    } else {
        feedBack.value = countMatch + ' ' + 'contacts match.';
    }
}


//  ======================
//  ARRAYS

let firstNames = ["Thao", "Caroll", "Julie", "Darcey", "Julene", "Evelin", "Deon", "Amiee", "Kristine", "Kaylene", "Elizebeth", "Gonzalo", "Romaine", "Ernest", "Ayako", "Kathe", "Kristle", "Trena", "Jeraldine", "Dolly", "Isidro", "Cleora", "Inell", "Amira", "Rossie", "Nakia", "Jerry", "Rodrigo", "Wai", "Brian", "Donnie", "Cyrus", "Janean", "Barb", "Sergio", "Darin", "Delfina", "Nyla", "Gema", "Audry", "Alexia", "Junko", "Chet", "Collette", "Nathanael", "Claud", "Dorian", "Silas", "Willene", "Vida", "Sophie", "Clarita", "Bryant", "Shaun", "Francesca", "Trey", "Ahmed", "Rachelle", "Javier", "Adelia", "Clemencia", "Mozelle", "George", "Tawana", "Cherly", "Shay", "Eryn", "Mellissa", "Gabrielle", "Gisela", "Huey", "Kyle", "Brittni", "Ai", "Jake", "Mignon", "Tana", "Emeline", "Walton", "Karla", "Geraldo", "Azzie", "Allen", "Tawny", "Elaina", "Dwain", "Forest", "Ula", "Alejandrina", "Despina", "Zina", "Delila", "Wei", "Raul", "Jeannie", "Lisette", "Donn", "Katrice"];

let lastNames = ["Barnes", "Morrow", "Aguilar", "Holden", "Ramos", "Roth", "Harding", "Luna", "Thornton", "Mcintyre", "Atkinson", "Willis", "Sharp", "Leblanc", "Underwood", "Morales", "Warner", "Spears", "Gilliam", "Harris", "Good", "Stevenson", "Carver", "Woodard", "Olsen", "Ballard", "Irwin", "Lopez", "Valencia", "Pollard", "Padilla", "Carlson", "Velez", "Foreman", "Lloyd", "James", "Webster", "Mcleod", "Reeves", "Cole", "Joyce", "Gaines", "Barnes", "Knowles", "Hensley", "Hunter", "Rocha", "Mcbride", "Head", "Thompson", "Morris", "York", "Vance", "Reed", "Hall", "Rodriguez", "Herring", "Noble", "Stone", "Mcintosh", "Trujillo", "Carver", "Bridges", "Ortega", "Stevens", "Simpson", "Dalton", "Johnston", "Gilliam", "Joseph", "Boyd", "Greene", "Silva", "Barber", "Kent", "Frazier", "Mckee", "Salinas", "Rodriquez", "Fitzpatrick", "Clayton", "Randolph", "Warren", "Holland", "Green", "Garza", "Shaw", "William", "Drake", "Petersen", "Hill", "Merritt", "Mckenzie", "Wright", "Mcdaniel", "Mccarthy", "Potts", "Kline", "Ashley", "Walsh"];

let countries =  ["India", "Kenya", "Comoros", "Venezuela", "Cocos (Keeling) Islands", "Trinidad and Tobago", "St. Pierre and Miquelon", "Bhutan", "Andorra", "Libyan Arab Jamahiriya", "Nauru", "Sierra Leone", "Iceland", "Finland", "Guinea", "Georgia", "Tonga", "Iraq", "Montserrat", "Zambia", "Saudi Arabia", "Malaysia", "Tunisia", "Andorra", "Uganda", "Mali", "Palau", "Malta", "United States", "Christmas Island", "Northern Mariana Islands", "Brazil", "Italy", "Djibouti", "St. Pierre and Miquelon", "Cote d'Ivoire", "Korea, Republic of", "Virgin Islands (British)", "Netherlands Antilles", "Angola", "Japan", "Sweden", "Solomon Islands", "Kyrgyzstan", "Philippines", "Austria", "Mauritania", "Liberia", "Guinea-Bissau", "Bosnia and Herzegowina", "Swaziland", "Brazil", "Belgium", "Lesotho", "Portugal", "Mauritius", "Morocco", "Wallis and Futuna Islands", "St. Helena", "Cote d'Ivoire", "Cocos (Keeling) Islands", "Mauritania", "Mozambique", "Bosnia and Herzegowina", "Tuvalu", "Latvia", "Austria", "El Salvador", "Benin", "Gibraltar", "Burundi", "Niue", "St. Helena", "Falkland Islands (Malvinas)", "Martinique", "Pakistan", "Congo", "Solomon Islands", "Somalia", "Norway", "Ghana", "Kenya", "Haiti", "Guadeloupe", "Niue", "French Southern Territories", "Tanzania, United Republic of", "Denmark", "Cambodia", "Congo", "Mexico", "Romania", "Myanmar", "Macau", "India", "Tokelau", "Venezuela", "Turkmenistan", "Martinique", "Niger"];

let zips = [65202, 35988, 83663, 83371, 40653, 30187, 93198, 19521, 13440, 80282, 85838, 80310, 45265, 19952, 87362, 13557, 91916, 49101, 50692, 39953, 64976, 43901, 16208, 82982, 50817, 29036, 55643, 32558, 39407, 81554, 14184, 91658, 71277, 70839, 17521, 82810, 51396, 85446, 46405, 27478, 59491, 19255, 32199, 43241, 94593, 79156, 24193, 45300, 10240, 53918, 69525, 99273, 56661, 94185, 69279, 79956, 52511, 70843, 26176, 49864, 31017, 17641, 80971, 66678, 59015, 12174, 79342, 62607, 41562, 84884, 95729, 57722, 28704, 14277, 56806, 62418, 40343, 84469, 57222, 66669, 80022, 47690, 64797, 13921, 16550, 84939, 10981, 19734, 66051, 97500, 85333, 23217, 52915, 62909];

let cities = ["Ashville", "Millry", "Leighton", "Riverview", "Indian springs village", "Abbeville", "Slocomb", "Baileyton", "Coker", "Billingsley", "Ider", "Fulton", "Newville", "Orange beach", "Helena", "Oakman", "Pickensville", "Oak hill", "Brent", "Mobile", "Mcdonald chapel", "Evergreen", "Ridgeville", "Blue mountain", "Bessemer", "Geraldine", "Vestavia hills", "Linden", "Oxford", "Notasulga", "New brockton", "Sanford", "Daleville", "Union grove", "Hazel green", "Hokes bluff", "South vinemont", "Vredenburgh", "Lexington", "Uniontown", "Parrish", "Hoover", "Childersburg", "Sipsey", "Ashville", "Kennedy", "West jefferson", "Gainesville", "Dadeville", "Grayson valley", "Forkland", "Daphne", "Gaylesville", "Slocomb", "Snead", "Moundville", "Fulton", "Camden", "Woodland", "Flomaton", "Grand bay", "Phenix city", "Fairfield", "Mcmullen", "Centre", "Silverhill", "Cordova", "Summerdale", "Sheffield", "Kimberly", "Dozier", "Elba", "Childersburg", "Boligee", "York", "Mobile", "Sand rock", "Mcintosh", "Camp hill", "Union grove", "Carolina", "La fayette", "Elba", "Toxey", "Jackson", "New site", "Edgewater", "Hackleburg", "Spanish fort", "Smiths", "Oxford", "Bon air", "Alexander city", "Tarrant", "Elmore", "Margaret", "Steele", "Woodland", "Huguley", "Meridianville"];

let ages = [464, 23, 78, 19, 346, 225, 493, 157, 387, 154, 195, 293, 112, 292, 332, 390, 91, 306, 472, 346, 200, 220, 2, 219, 114, 161, 469, 169, 75, 384, 372, 160, 226, 84, 157, 286, 171, 176, 415, 407, 192, 439, 441, 206, 191, 182, 87, 168, 24, 331, 107, 367, 389, 214, 463, 267, 396, 161, 46, 478, 63, 486, 41, 140, 462, 100, 404, 215, 392, 434, 105, 77, 467, 252, 177, 72, 151, 394, 347, 314, 316, 210, 455, 359, 437, 246, 195, 0, 36, 55, 150, 403, 399, 409, 259, 30, 221, 428, 488, 84];



/*

MichelBuffa (Staff)
a day ago


"How can the pagination be achieved?"

Ok, there are many possibilities here. The simpler: you need to have an array of objects that will be the data you want to display in a table.

ex:

var persons = [];

persons.push({ givenName: "Michel", familyName:"Buffa", job:"professor"});
// do this multiple times...
persons.length = number of data to display.

Then write a function :

function renderAsTable(persons, page, pagesize) { // first page is 0
    // empty current table
    table.innerHTML = "";

    let startingIndex = page*pagesize;

    for(var i=0; i < pageSize; i++) {
        addRow(persons[startingIndex + i];
    }
}
Then use a global variable currentPage, buttons, and click listeners for next button and previous button, that will increment/decrement the currentPage and call renderAsTable(currentPage, size of page);

The table the student used has a scrolling because it's rendered inside a div that has a fixed size + a CSS property like that:

#tableDiv {
  overflow: scroll;
}
overflow: scroll means : add a scrollbar if the content is bigger than the div.

*/