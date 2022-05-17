let strArray = localStorage.getItem("users");
let user = JSON.parse(strArray);
let link = user[0].img;

document.getElementById("user").innerHTML = user[0].name;

document.getElementById("userImg").src = link;

class books {
    constructor(title, genre, author,book){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.book = book;
    }}

    let b1 = new books("The patient silent","thriller","Alex Michealedis","./images/b1.jpg");
    let b2 = new books("The patient silent","thriller","Alex Michealedis","./images/b1.jpg");
    let b3 = new books("The patient silent","thriller","Alex Michealedis","./images/b1.jpg");
    let b4 = new books("The patient silent","thriller","Alex Michealedis","./images/b1.jpg");
    let b5 = new books("The patient silent","thriller","Alex Michealedis","./images/b1.jpg");
    let b6 = new books("The patient silent","thriller","Alex Michealedis","./images/b1.jpg");

    let book = [];

    book.push(b1, b2, b3, b4, b4, b6);

    localStorage.setItem("Books", JSON.stringify(book));

    // const fname = form['fname'];
    // const last = form['last'];
    // const cell = form['cell'];
    // const email = form['email'];
    // const pass = form['pass'];
    // const conf = form['conf'];
    // const img = form['img'];
    

    // //create the key for the item
    // const items = JSON.parse(localStorage.getItem('items')) || [];
    
    // //function to push arras into the local storage
    // const add = (fname, last, cell, email, pass, conf, img) => {
    //     items.push({
    //       fname,
    //       last,
    //       cell,
    //       email,
    //       pass,
    //       conf,
    //       img,
    //     });
        
    //     localStorage.setItem("items", JSON.stringify(items));
      
    //     //return { fname, last, cell, email, pass, conf, img};
    //   };
     
    //   //input values
    // //   form.onsubmit = e => {
    // //     e.preventDefault();

    //     add (fname.value, last.value, cell.value ,email.value, pass.value, conf.value, img.value);
           
    // // }


