const {get_employee_model, is_updatable_field} = require("./hr-domain");
const {connectToMongo} = require("./mongo-connection");

const EmployeeModel = get_employee_model();

const get_employee_by_id = async (employee_id) => {
    return EmployeeModel.findOne({_id: employee_id},{},{});
};

const get_all_employees = async (page_no=0,page_size=10) => {
    return EmployeeModel.find({},{},{
        skip: page_no*page_size,
        limit: page_size
    });
};

const hire_employee = async (employee) => {
  const employee_document = new EmployeeModel(employee) ;
  return employee_document.save();
};

const update_employee = async (employee) => {
  let updated_employee = {};
  for (const field in employee) {
      if (is_updatable_field(field))
          updated_employee[field] = employee[field];
  }
  return EmployeeModel.findOneAndUpdate({_id: employee._id}, {$set: updated_employee, upsert: false},{});
};

const fire_employee = async (identity) => {
    return EmployeeModel.findOneAndDelete({_id: identity},{});
};

module.exports = {
    fire_employee,
    hire_employee,
    update_employee,
    get_employee_by_id,
    get_all_employees
}

