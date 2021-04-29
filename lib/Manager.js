class Manager {
    constructor(managerName, managerID , managerEmail) {
        this.managerID = managerID;
        this.managerEmail = managerEmail;
        this.managerName = managerName;
        this.managerRole = 'Manager';
    }
    getName() {
        return this.managerName;
    }
    getID() {
        return this.managerID;
    }
    getRole() {
        return this.managerRole;
    }
    getEmail() {
        return this. managerEmail;
    }
};

module.exports = Manager;