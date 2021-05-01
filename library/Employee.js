class Employee {
    constructor(employeeName, employeeID , employeeEmail) {
        this.employeeID = employeeID;
        this.employeeEmail = employeeEmail;
        this.employeeName = employeeName;
        this.employeeRole = 'Employee';
    }
    getName() {
        return this.employeeName;
    }
    getID() {
        return this.employeeID;
    }
    getRole() {
        return this.employeeRole;
    }
    getEmail() {
        return this. employeeEmail
    }
};

module.exports = Employee;