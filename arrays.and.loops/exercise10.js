employees = [
    {"fullname": "jack shephard", "department": "Sales", "salary": 100000, "year": 1978, "fulltime": true},
    {"fullname": "kate austen", "department": "IT", "salary": 200000, "year": 1985, "fulltime": false},
    {"fullname": "ben linus", "department": "Finance", "salary": 150000, "year": 1967, "fulltime": true},
    {"fullname": "james sawyer", "department": "HR", "salary": 70000, "year": 1979, "fulltime": true},
    {"fullname": "kim kwon", "department": "Sales", "salary": 120000, "year": 1986, "fulltime": true},
    {"fullname": "sun kwon", "department": "IT", "salary": 200000, "year": 1984, "fulltime": false},
    {"fullname": "hugo reyes", "department": "IT", "salary": 120000, "year": 1992, "fulltime": true}
]
function by_salary_in_asc_order(emp1,emp2){
    if (emp1["salary"] < emp2["salary"]) return -1;
    if (emp1["salary"] > emp2["salary"]) return 1;
    return emp1["year"] - emp2["year"];
}
employees.sort(by_salary_in_asc_order)
console.log(employees);
