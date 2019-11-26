//
// Database: company.js
// 
// Write the MongoDB queries that return the information below:
//

// all the employees
db.getCollection("employees").find().pretty();
// the number of employees
db.getCollection("employees").find().count();
// one of the employees, with pretty printing (2 methods)
db.getCollection("employees").find()[0]
db.getCollection("employees").find().pretty()[0]
// --

// all the information about employees, except their salary, commission and missions

// the name and salary of all the employees (without the field _id)

// the name, salary and first mission (if any) of all the employees (without the field _id)

// --

// the name and salary of the employees with a salary in the range [1,000; 2,500[

// the name and salary of the clerks with a salary in the range [1,000; 1,500[ (2 methods)

// the employees whose manager is 7839 or whose salary is less than 1000

// the clerks and the analysts (2 methods)

// --

// the name, job and salary of the employees, sorted first by job (ascending) and then by salary (descending)

// one of the employees with the highest salary

// --

// the employee names that begin with 'S' and end with 't' (2 methods)

// the employee names that contain a double 'l'

// the employee names that begins with 'S' and contains either 'o' or 'm' (2 methods)

// --

// the name and the commission of the employees whose commission is not specified
// (the field "commission" does not exists or it has a null value)


// the name and the commission of the employees whose commission is specified
// (the field "commission" does exist and it has a non-null value)

// the name and the commission of the employees with a field "commission"
// (regardless of its value)

// the name and the commission of the employees whose commission is null
// (the field "commission" does exist but it has a null value)


// --

// the employees who work in Dallas

// the employees who don't work in Chicago (2 methods)

// the employees who did a mission in Chicago

// the employees who did a mission in Chicago or Dallas  (2 methods)

// the employees who did a mission in Lyon and Paris (2 methods)

// the employees who did all their missions in Chicago

// the employees who did a mission for IBM in Chicago

// the employees who did their first mission for IBM

// the employees who did exactly two missions

// --

// the jobs in the company

// the name of the departments

// the cities in which the missions took place

// --

// the employees with the same job as Jones'









