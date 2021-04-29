class Intern {
    constructor(internName, internID , internEmail) {
        this.internID = internID;
        this.internEmail = internEmail;
        this.internName = internName;
        this.internRole = 'Intern';
    }
    getName() {
        return this.internName;
    }
    getID() {
        return this.internID;
    }
    getRole() {
        return this.internRole;
    }
    getEmail() {
        return this. internEmail;
    }
};

module.exports = Intern;