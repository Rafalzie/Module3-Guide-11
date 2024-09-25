// Contact list array to hold all contacts
let contactList = [];

// Add a contact HERE to the contact list
add({ name: "Aron Fernandez", email: "Aron@advania.com", phone: "123456789", company: "Advania." });
get("Aron@advania.com");
edit("Aron@advania.com", { phone: "987654321", company: "Tech." });
listAll();
remove("Aron@advania.com");
clear();
function add(contact) {
  if (!contact.name || !contact.email) {
    console.log("Error: Missing fields"); // Name and email are required
    return;
  }

  // Checks for duplicate emails 
  const existingContact = contactList.find(c => c.email === contact.email);
  if (existingContact) {
    console.log("Error: Duplicate was found");
    return;
  }

  contactList.push(contact);
  console.log(`${contact.name} was added`);
}

// Remove a contact by email
function remove(email) {
  const index = contactList.findIndex(c => c.email === email);
  
  if (index === -1) {
    console.log("Error: Contact not found");
    return;
  }

  const removedContact = contactList.splice(index, 1)[0];
  console.log(`${removedContact.name} was removed`);
}

// Edit a contact by email
function edit(email, newData) {
  const contact = contactList.find(c => c.email === email);

  if (!contact) {
    console.log("Error: Contact not found");
    return;
  }

  // Update only provided fields (name, email, phone, company)
  Object.assign(contact, newData);
  console.log(`${contact.name} was updated`);
}

// Get a contact by email and display their information
function get(email) {
  const contact = contactList.find(c => c.email === email);

  if (!contact) {
    console.log("Error: Contact not found");
    return;
  }

  console.log(`name: ${contact.name}\nEmail: ${contact.email}\nPhone number: ${contact.phone || 'N/A'}\nCompany: ${contact.company || 'N/A'}`);
}

// List all contacts in the contact list
function listAll() {
  if (contactList.length === 0) {
    console.log("No contacts available.");
    return;
  }

  const contacts = contactList.map(c => `${c.name} ${c.email}`);
  console.log(contacts.join(', '));
}

// Clear all contacts from the contact list
function clear() {
  contactList = [];
  console.log("The contact list was cleared");
}

// Example Usage in the console:
// add({ name: "John Doe", email: "john@example.com", phone: "123456789", company: "Tech Co." });
// remove("john@example.com");
// edit("john@example.com", { phone: "987654321", company: "New Co." });
// get("john@example.com");
// listAll();
// clear();
