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
        this.manager = [new Employee("Sidharth")];
        this.teamLeader = [new Employee("Krishna")];
        this.developer = [new Employee("Aadi")];
        this.interns=[new Employee("Prashant"), new Employee("Saurabh"),, new Employee("Ruhi"), new Employee("nilay")]
    }

    // Method to display office information
    displayInfo() {
        const infoElement = document.getElementById('officeInfo');
        infoElement.innerHTML = `
            <p><strong>Office Name:</strong> ${this.officeName}</p>
            <p><strong>Managers:</strong> ${this.getEmployeeNames(this.manager)}</p>
            <p><strong>Team Leaders:</strong> ${this.getEmployeeNames(this.teamLeader)}</p>
            <p><strong>Developers:</strong> ${this.getEmployeeNames(this.developer)}</p>
            <p><strong>Developers:</strong> ${this.getEmployeeNames(this.interns)}</p>
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

