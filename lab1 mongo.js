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
db.getCollection("employees").find()[0];
db.getCollection("employees").find().pretty()[0];
// --

// all the information about employees, except their salary, commission and missions
db.employees.find({}, { salary: 0, missions: 0, comission: 0 }).pretty();
// the name and salary of all the employees (without the field _id)
db.employees.find({}, { name: 1, salary: 1, _id: 0 }).pretty();
// the name, salary and first mission (if any) of all the employees (without the field _id)
db.employees.find({}, { name: 1, salary: 1, missions: { $slice: 1 }, _id: 0 }).pretty();
// --

// the name and salary of the employees with a salary in the range [1,000; 2,500[
    db.employees.find( { $and:[ {salary:{$gte:1000}}, {salary:{$lt:2500}} ]}, {name:1,salary:1, _id:0}).pretty();

// the name and salary of the clerks with a salary in the range [1,000; 1,500[ (2 methods)
db.employees.find( {job:"clerk", $and:[ {salary:{$gte:1000}}, {salary:{$lt:1500}}]}, {name:1,salary:1, _id:0}).pretty();

db.employees.find( {$and:[ {salary:{$gte:1000}}, {salary:{$lt:1500}}, {job:"clerk"}]}, {name:1,salary:1, _id:0}).pretty();

// the employees whose manager is 7839 or whose salary is less than 1000
db.employees.find( { $or:[ {manager:7839}, {salary:{$lt:1000}}]}, {}).pretty();
// the clerks and the analysts (2 methods)
db.employees.find( {$or:[{job:"clerk"}, {job:"analyst"}]}, {}).pretty();


// --

// the name, job and salary of the employees, sorted first by job (ascending) and then by salary (descending)
db.employees.find({},{name:1, job:1, salary:1, _id:0}).sort({job:1, salary:-1})
// one of the employees with the highest salary
db.employees.find({},{}).sort({salary:-1}).limit(1).pretty();

// --

// the employee names that begin with 'S' and end with 't' (2 methods)
db.employees.find({name:/S.*t/},{name:1, _id:0} ).pretty();
// the employee names that contain a double 'l'
db.employees.find({name:/.*ll.*/},{name:1, _id:0} ).pretty();
// the employee names that begins with 'S' and contains either 'o' or 'm' (2 methods)
db.employees.find({ $or:[ {$and: [{name:/S.*o.*/}, {name:{$not:{$regex:/.*m.*/}} }]}, {$and: [{name:/S.*m.*/}, {name:{$not:{$regex:/.*o.*/}}}]}]}, {name:1, _id:0} ).pretty();
// --

// the name and the commission of the employees whose commission is not specified
// (the field "commission" does not exists or it has a null value)
db.employees.find({$or:[{comission: null},{comission:{$exists:false}}]},{name:1, comission:1, _id:0});

// the name and the commission of the employees whose commission is specified
// (the field "commission" does exist and it has a non-null value)
db.employees.find(  {$and:[ {comission: {$exists:true}}, {comission:{$ne:null}} ]},{name:1, comission:1,_id:0})

// the name and the commission of the employees with a field "commission"
// (regardless of its value)
db.employees.find(   {comission: {$exists:true}},{name:1, comission:1,_id:0})

// the name and the commission of the employees whose commission is null
// (the field "commission" does exist but it has a null value)
db.employees.find(   {$and:[{comission: {$exists:true}}, {comission:null}]},{name:1, comission:1,_id:0});


// --

// the employees who work in Dallas
db.employees.find( {"department.location":"Dallas"});
// the employees who don't work in Chicago (2 methods)
db.employees.find( {"department.location":{$ne:"Chicago"}});
db.employees.find( {"department.location":{$not:/Chicago/}})
// the employees who did a mission in Chicago
db.employees.find({"missions.location":"Chicago"});

// the employees who did a mission in Chicago or Dallas  (2 methods)
db.employees.find({"missions.location":"Chicago"});
// the employees who did a mission in Lyon and Paris (2 methods)
db.employees.find({$and:[{"missions.location":"Lyon"}, {"missions.location":"Paris"}]});
// the employees who did all their missions in Chicago
db.employees.find( {{$ne:"Chicago"}:$nin:{"employees.department"} ).pretty();
// the employees who did a mission for IBM in Chicago
db.employees.find({$and:[{"missions.company":"IBM"},{"missions.location":"chicago"}]});
// the employees who did their first mission for IBM
db.employees.find({missions: { $slice: 1 }})
// the employees who did exactly two missions
db.employees.find
// --

// the jobs in the company

// the name of the departments

// the cities in which the missions took place

// --

// the employees with the same job as Jones'





