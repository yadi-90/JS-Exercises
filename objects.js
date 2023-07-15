// Exercise
// Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

// Put a function into the constructor that can report the book info like so:

// theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
// Note: It is almost always best to return things rather than putting console.log() directly into the function. In this case, return the info string and log it after the function has been called:

// console.log(theHobbit.info());

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  
    this.info = function() {
      let readStatus = "";
      if (this.read) {
        readStatus = "already read";
      } else {
        readStatus = "not read yet";
      }
  
      return (
        this.title +
        " by " +
        this.author +
        ", " +
        this.pages +
        " pages, " +
        readStatus
      );
    };
  }

  //Describe what a prototype is and how it can be used.
A prototype is an object, where it can add new variables and methods to the existing object.

  //Explain prototypal inheritance.
Basically being able to access object properties from another object.
//Understand the basic do’s and don’t’s of prototypical inheritance.
The Do's 
- Set up the prototype chain correctly
- Use the prototype object for shared properties and methods
-Modify prototype before creating instances
- Utilize the "constructor" property

The Don't's
- Avoid modifying the prototype of build-in objects
- Avoid relying too heavily on inheritance
- Avoid deeply nested prototype chains
- Being cautious when modifying inherited properties

//Explain what Object.create does.
It just creates a new Object

//How does this behave in different situations?
-When 'this' is used outside of any function or object, it's a global object.
- When a function is called as a standalone function, without any object context, 
this refers to the global object (in non-strict mode) or undefined (in strict mode) 
-When a function is called as a method of an object, this refers to the object on which 
the method is being called.
-When a function is used as a constructor to create new objects using the new keyword, 
this refers to the newly created object.
