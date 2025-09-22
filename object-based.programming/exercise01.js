let jack = {
    full_name: "jack bauer",
    identity_no: "11111111110",
    salary: 100_000,
    iban: "TR1",
    departments: ["IT", "AI", "SALES"],
    birth_year: "1965",
    increase_salary: function(rate){
        this.salary *= (1+rate/100);
    }
};

console.log(jack);
jack.increase_salary(50);
console.log(jack);
