// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew()
{
  var name=prompt("what name to add?");
  roster.push(name)
}


// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
function remove_student()
{
  var name=prompt("what name to delete?");

  for(var i=0;i<roster.length;i++)
  {
    if(roster[i]===name)
    {
      roster.splice(i,1);
    }
  }
}

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display()
{
  for(var i=0;i<roster.length;i++)
  {
    console.log(roster[i]);
  }
}

// Start by asking if they want to use the web app
var choice=prompt("start web application?(y/n)");
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
while(choice==='y')
{
  var choice2=prompt("add, delete, display, quit?");

  if(choice2==="add")
  {
    addNew();
  }
  else if (choice2==="delete") {
    remove_student();
  }
  else if (choice2==="display") {
    display();
  }
  else {
    break;
  }
}
