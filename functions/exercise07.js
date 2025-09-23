function find_employees({employees, department= "IT" , full_time=false, birth_year=2000}) {
    if (arguments.length !== 1)
        throw "You must provide exactly three parameters.";
    for (let arg of arguments){
        console.log(arg);
    }
    let emps = [];
    for (let emp of employees) {
        if (emp.department === department && emp.fulltime === full_time) {
            emps.push(emp);
        }
    }
    return emps;
}

employees = [
    {"fullname": "jack shephard", "department": "Sales", "salary": 100000, "year": 1978, "fulltime": true},
    {"fullname": "kate austen", "department": "IT", "salary": 200000, "year": 1985, "fulltime": false},
    {"fullname": "ben linus", "department": "Finance", "salary": 150000, "year": 1967, "fulltime": true},
    {"fullname": "james sawyer", "department": "HR", "salary": 70000, "year": 1979, "fulltime": true},
    {"fullname": "kim kwon", "department": "Sales", "salary": 120000, "year": 1986, "fulltime": true},
    {"fullname": "sun kwon", "department": "IT", "salary": 200000, "year": 1984, "fulltime": false},
    {"fullname": "hugo reyes", "department": "IT", "salary": 120000, "year": 1992, "fulltime": true}
];

for (let employee of find_employees({
         employees // employees: employees
      }))
{
    console.log(employee);
}
