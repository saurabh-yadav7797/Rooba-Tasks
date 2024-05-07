// Simulated data for projects
const projects = [
    { name: "Project 1", description: "blood bank using python django html css javaScipt", color: "#28a745" },
    { name: "Project 2", description: "This project deals with developing a Virtual website ‘E-commerce Website’. It provides the user with a list of the various products available for purchase in the store. For the convenience of online shopping, a shopping cart is provided to the user. After the selection of the goods, it is sent for the order confirmation process. The system is implemented using Python’s web framework Django. To build a Django e-commerce web application, it is necessary to study and understand many technologies.", color: "#007bff" },
    { name: "Project 3", description: "A College Website developed using HTML, CSS, and JavaScript is an interactive platform that provides information about the school, its faculty, courses, events, and other relevant details. It incorporates responsive design principles to ensure compatibility across various devices, offering an engaging user experience for students, parents, and staff.", color: "#dc3545" }
];

// Function to generate project cards
function generateProjectCards() {
    const projectCardsContainer = document.getElementById('projectCards');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('projectCard');
        card.style.backgroundColor = project.color;
        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectCardsContainer.appendChild(card);
    });
}

// Call the function to generate project cards when the page loads
document.addEventListener('DOMContentLoaded', generateProjectCards);
