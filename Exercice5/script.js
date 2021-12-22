
const title = document.getElementById('title');
const author = document.getElementById('author');
const price = document.getElementById('price');
const date = document.getElementById('date');
const email = document.getElementById('yourEmail');
let types = document.getElementsByClassName("booktpes");



const petSelect = document.getElementById('pet-select');
var bookType = document.querySelector('input[name="typeradio"]:checked');
var table = document.getElementById("testings");
var formes = [];



class Books {
    constructor(title, author, price, date, email, petSelect, bookType) {

        this.title = title;
        this.author = author;
        this.price = price;
        this.date = date;
        this.email = email;
        this.petSelect = petSelect;
        this.bookType = bookType;
    }
}





/*function add() {
formes.push(fos);
title.value = "";
author.value = "";
price.value = "";
date.value = "";
email.value = "";
petSelect.value = "";
bookType.value = "";
}*/
// for (var i = 0; i < formes.length; i++) {
//     var row = table.insertRow(0);
//     var cell = row.insertCell(0);
//     cell.innerHTML = formes[i].title;
// }

// }
// localStorage.setItem(fos);
// localStorage.getItem(fos);
// let fos = new Books(title.value, author.value, price.value, date.value, email.value, petSelect.value, hh);
let hh = () => {
    for (let i = 0; i < types.length; i++) {
        if (types[i].checked) {
            var hh = types[i].value;
        }
    }
    var fos = new Books(title.value, author.value, price.value, date.value, email.value, petSelect.value, hh);
    
    localStorage.setItem("title",title.value);
    console.log(localStorage.getItem('title'))

    formes.push(fos);
    title.value = "";
    author.value = "";
    price.value = "";
    date.value = "";
    email.value = "";
    petSelect.value = "";
    hh;


    for (var i = 0; i < formes.length; i++) {
    var row = table.insertRow(1);
     var cell = row.insertCell(0);
     cell.innerHTML = formes[i].title;

    
     var cell1 = row.insertCell(1);
     cell1.innerHTML = formes[i].author;

    
     var cell2 = row.insertCell(2);
     cell2.innerHTML = formes[i].price;

   
     var cell4 = row.insertCell(3);
     cell4.innerHTML = formes[i].date;

     var cell5 = row.insertCell(4);
     cell5.innerHTML = formes[i].email;

     var cell6 = row.insertCell(5);
     cell6.innerHTML = formes[i].petSelect;

     var cell7 = row.insertCell(6);
     cell7.innerHTML = formes[i].hh;

     var cell8 = row.insertCell(7);
        cell8.createElement = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
     }
}



