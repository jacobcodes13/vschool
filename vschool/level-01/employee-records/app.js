// // Constructor Functions

// // They build objects 
// // "new" - instantiates the object


// function Car(make, model, year, honkSound){
//   this.make = make
//   this.model = model
//   this.year = year
//   this.honkSound = honkSound
//   // this.honk = function(){
//   //     console.log(this.honkSound)
//   // }
// }

// var jeep = new Car("Jeep", "Cherokee", 1995, "MEEERRRP")
// var mazda = new Car("Mazda", "3 hatchback", 2015, "BLAAARP")


// Car.prototype.honk = function(){
//    console.log(this.honkSound)
// }

// jeep.honk()
// mazda.honk()


// EMPLOYEE RECORDS

// First, create an empty array called employees
const employees = [];

// Make an constructor function called employee ("status" will be defaulted to "Full Time")
function Employee(name, jobTitle, salary, status = "Full Time") {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = status;
  this.printEmployeeForm = () => {
    console.log("Name: " + name + ", Job Title: " + jobTitle + ", Salary: " + salary + ", Status: " + status);
  }
}

// Instantiate the employees / Override the status attribe to "Part Time"
  let employeeJacob = new Employee("Jacob", "HR Manager", "$5,000/month");
  let employeeNoah = new Employee("Noah", "Sales Rep", "$3,00/month", "Part Time");
  let employeeHunter = new Employee("Hunter", "CEO", "$10,000/month");

// Call the printEmployeeForm method for each employee
  employeeJacob.printEmployeeForm();
  employeeNoah.printEmployeeForm();
  employeeHunter.printEmployeeForm();

// Put the generated employees in the employees array
  employees.push(employeeJacob, employeeNoah, employeeHunter);
  console.log(employees);