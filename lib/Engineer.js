class Engineer {
    constructor(engineerName, engineerID , engineerEmail) {
        this.engineerID = engineerID;
        this.employeeEmail = engineerEmail;
        this.employeeName = engineerName;
        this.engineerRole = 'Engineer';
    }
    getName() {
        return this.engineerName;
    }
    getID() {
        return this.engineerID;
    }
    getRole() {
        return this.engineerRole;
    }
    getEmail() {
        return this. engineerEmail
    }
};

module.exports = Engineer;