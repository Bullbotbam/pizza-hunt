// create variable to hold connection
let db;
// establish a connection to IndexDB database called 'pizza_hunt' and set it to version 1
const request = indexedDB.open('pizza_hunt', 1);

// this event will emit if the database version changes(nonexistant to version 1, v1 to v2, etc.)
request.onupgradeneeded = function (event) {
	// save a reference to the database
	const db = event.target.result;
	// create an object store(table) called `new_pizza`, set it to have
	db.createObjectStore('new_pizza', { autoIncrement: true });
};

// upon a successful
request.onsuccess = function (event) {
	// when db is successfully created with its object store (from onupgradeneeded event above) or simply established a connection, save a reference to db in global variable
	db = event.target.result;

	// check if app is online, if yes run uploadPizza() function to send all local db data to api
	if (navigator.onLine) {
		// uploadPizza();
	}
};
request.onerror = function (event) {
	//log error header
	console.log(event.target.errorCode);
};
