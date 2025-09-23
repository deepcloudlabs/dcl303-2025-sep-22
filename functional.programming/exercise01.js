employees = [
    {"fullname": "jack shephard", "department": "IT", "salary": 100000, "year": 1978, "fulltime": true},
    {"fullname": "kate austen", "department": "IT", "salary": 200000, "year": 1985, "fulltime": false},
    {"fullname": "ben linus", "department": "IT", "salary": 150000, "year": 1967, "fulltime": true},
    {"fullname": "james sawyer", "department": "IT", "salary": 70000, "year": 1979, "fulltime": true},
    {"fullname": "kim kwon", "department": "IT", "salary": 120000, "year": 1986, "fulltime": true},
    {"fullname": "sun kwon", "department": "IT", "salary": 200000, "year": 1984, "fulltime": false},
    {"fullname": "hugo reyes", "department": "IT", "salary": 120000, "year": 1992, "fulltime": true}
]

// imperative programming: structured programming, procedural programming, oop, ...
let total_salary = 0;
for (let employee of employees) {
    if (employee.department === "IT") {
        if (employee.fulltime) {
            const full_time_employee_salary = employee.salary;
            total_salary += full_time_employee_salary;
        }
    }
}
console.log(total_salary);
// declarative programming: functional programming
const if_employee_works_in_it_department = employee => employee.department === "IT";
const if_full_time_employee = employee => employee.fulltime;
const employee_to_salary = employee => employee.salary;
//console.log(if_employee_works_in_it_department(employees[0]));
function to_their_sum(x,y){ return x+y}
total_salary =
employees.filter(if_employee_works_in_it_department)
         .filter(if_full_time_employee)
         .map(employee_to_salary)
         .reduce(to_their_sum, 0);
console.log(total_salary);

// Higher-Order Functions: filter, map, reduce, ...
