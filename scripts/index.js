"use strict"

window.onload = () => {

    loadPeopleTable();

}

function loadPeopleTable() {
    let peopleTableBody = document.querySelector("#peopleTableBody");
    people.forEach((person) => {

        buildTableRow(peopleTableBody, person);
    });
}

function buildTableRow(tableBody, data) {
    let newRow = tableBody.insertRow();

    let cell1 = newRow.insertCell();
    cell1.innerHTML = data.id;

    let cell2 = newRow.insertCell();
    cell2.innerHTML = data.firstName;

    let cell3 = newRow.insertCell();
    cell3.innerHTML = data.lastName;

    let cell4 = newRow.insertCell();
    cell4.innerHTML = data.email;

    let cell5 = newRow.insertCell();
    cell5.innerHTML = data.ipAddress;

}