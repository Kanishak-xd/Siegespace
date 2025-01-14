// Sample project data
const projects = [
    { id: 1, name: 'project 1', description: 'project description', image: '' },
    { id: 2, name: 'project 2', description: 'project description', image: '' },
    { id: 3, name: 'project 3', description: 'project description', image: '' },
    { id: 4, name: 'project 4', description: 'project description', image: '' },
    // { id: 5, name: 'project 5', description: 'project description', image: '' },
    // { id: 6, name: 'project 6', description: 'project description', image: '' },
];

const projectList = document.getElementById('project-list');

// Dynamically generate project cards
projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
        <img src="${project.image}" alt="${"project image"}">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
    `;
    projectList.appendChild(card);
});
