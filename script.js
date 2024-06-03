let contacts = [];

function addContact() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name === '' || phone === '') {
        alert('Please enter both name and phone number.');
        return;
    }

    const contact = { name, phone };
    contacts.push(contact);
    nameInput.value = '';
    phoneInput.value = '';
    renderContacts();
}

function deleteContact(index) {
    contacts.splice(index, 1);
    renderContacts();
}

function renderContacts() {
    const contactsList = document.getElementById('contactsList');
    contactsList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.textContent = `${contact.name}: ${contact.phone}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => deleteContact(index);
        li.appendChild(deleteButton);
        contactsList.appendChild(li);
    });
}
