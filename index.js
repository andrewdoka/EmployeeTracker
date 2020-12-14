var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,
 
  // Your username
  user: "UCIBC",

  // Your password
  password: "UCI12345",
  database: "employee_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  

main();

});

function main() {

    console.log("Your are now connected to employee_DB server.");

    employeeFunction();
}


function employeeFunction() {

inquirer
.prompt([
    {
      name: "employeeFN",
      type: "input",
      message: "What is the employee's First Name ? "
    },
    {
      name: "employeeLN",
      type: "input",
      message: "What is the employee's Last Name ?"
    },
    {
        name: "employeeMGRFN",
        type: "input",
        message: "Who is the employee's Manager's First Name ?"
      },
      {
        name: "employeeMGRLN",
        type: "input",
        message: "Who is the employee's Manager's Last Name ?"
      },
      {
        name: "employeeDPT",
        type: "input",
        message: "What is the employee's department ?"
      },
      {
        name: "employeeRole",
      type: "input",
      message: "What is the employee's role ID ?",
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    },
      {
        name: "employeeTitle",
        type: "input",
        message: "What is the employee's title ?"
      },
    {
      name: "employeeSaL",
      type: "input",
      message: "What is the current employee's salary ?",
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    }
  ])
  .then(function(answer) {
       console.log(answer);   
    // when finished prompting, insert a new item into the db with that info
    var query = connection.query(
      "INSERT INTO Employee SET ?",
      {
        EFirstName: answer.employeeFN,
        ELastName : answer.employeeLN,
      },
      function(err) {
        if (err) throw err;
        console.log("Your auction was created successfully!");
        // re-prompt the user for if they want to restart. 
    }
    );

  var query = connection.query(
    "INSERT INTO Managers SET ?",
    {
      MFirstName: answer.employeeMGRFN,
      MLastName : answer.employeeMGRLN,
    },
    function(err) {
      if (err) throw err;
      console.log("Your entry was created successfully!");
      // re-prompt the user for if they want to restart.
  employeeFunction();  
  connection.end();
  }
  );
});

}

