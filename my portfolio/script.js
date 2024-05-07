// Simulated data for projects
const projects = [
    { name: "Project 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", color: "#28a745" },
    { name: "Project 2", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", color: "#007bff" },
    { name: "Project 3", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", color: "#dc3545" }
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
