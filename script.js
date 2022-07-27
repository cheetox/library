let myLibrary = [];

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    
}
Book.prototype.info=function(){
    this.rd=this.read ? 'already read' :'not read yet';
    return `${this.title} by ${this.author},${this.pages} pages, ${this.rd}`
}

const theHobbit=new Book('The Hobbit',"J.R.R. Tolkien",295,true);
const hp=new Book('Harry Potter',"J. K. Rowling",180,false);
const kafkaOnTheShore=new Book('Kafka On The Shore','Haruki Murakami',360,true);
console.log(theHobbit.info());

function addBookToLibrary(book){
    myLibrary.push(book);
}
addBookToLibrary(theHobbit);
addBookToLibrary(hp);
addBookToLibrary(kafkaOnTheShore);

console.log(myLibrary);



window.onload=function(){
    const bookList=document.querySelector('.library');
    
    for (let i = 0; i < myLibrary.length; i++) {
        const book=document.createElement('div');
        book.classList.add('book');
        for (let [key, value] of Object.entries(myLibrary[i])) {
            const atributes=document.createElement('div');
            atributes.textContent=value;
            book.appendChild(atributes);
        }
        
        bookList.appendChild(book);
        
    }
    const addNewBook=document.createElement('button');
    addNewBook.classList.add('add-btn');
    addNewBook.textContent='Add New Book';
    bookList.appendChild(addNewBook);
    addNewBook.addEventListener('click',()=>{
        const form=document.querySelector('.addbook');
        form.classList.add('show');

    
    });
    const addbtn=document.querySelector('.adlib');
    addbtn.addEventListener('click',()=>{
        const bbt=document.createElement('li');
        let bAdd=new Book();
        const textFields=document.querySelectorAll('input');
        textFields.forEach(textField=>{
            if(textField.id==='read'){
                bAdd[textField.id]=textField.checked;
            }else{
                bAdd[textField.id]=textField.value;
            }
            
        });
        
        bbt.textContent=bAdd.info();
        addBookToLibrary(bAdd);
        bookList.appendChild(bbt);

        
    })
    
}
