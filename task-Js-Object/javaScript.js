// Define Employee class
class Employee {
    constructor(name) {
        this.name = name;
    }
}

// Define Office class
class Office {
    constructor() {
        this.officeName = "RoobaFinance";
        this.managers = [new Employee("Manager1"), new Employee("Manager2")];
        this.teamLeaders = [new Employee("TeamLeader1"), new Employee("TeamLeader2")];
        this.developers = [new Employee("Developer1"), new Employee("Developer2"), new Employee("Developer3")];
    }

    // Method to display office information
    displayInfo() {
        const infoElement = document.getElementById('officeInfo');
        infoElement.innerHTML = `
            <p><strong>Office Name:</strong> ${this.officeName}</p>
            <p><strong>Managers:</strong> ${this.getEmployeeNames(this.managers)}</p>
            <p><strong>Team Leaders:</strong> ${this.getEmployeeNames(this.teamLeaders)}</p>
            <p><strong>Developers:</strong> ${this.getEmployeeNames(this.developers)}</p>
        `;
    }

    // Method to get employee names
    getEmployeeNames(employees) {
        return employees.map(employee => employee.name).join(', ');
    }
}

// Create an instance of Office
const roobaFinanceOffice = new Office();

// Call the displayInfo method to display the office information
roobaFinanceOffice.displayInfo();

