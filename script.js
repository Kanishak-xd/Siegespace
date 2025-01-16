const projects = [
    { id: 1, name: 'AQUASOL↗', subtitle: 'Smart Water Management', description: 'IoT Based Smart Water Management System AQUASOL Mobile Application', image: 'images/p1.png', link: 'https://example.com/project1' },
    { id: 2, name: 'RE:JAPANESE↗', subtitle: 'Learn Japanese Language', description: 'Basic Japanese language learning website designed by using HTML, CSS & Javascript', image: 'images/p2.png', link: 'https://example.com/project2' },
    // { id: 3, name: 'Project 3↗', subtitle: 'Subtitle for Project 3', description: 'project description', image: '', link: 'https://example.com/project3' },
    // { id: 4, name: 'Project 4↗', subtitle: 'Subtitle for Project 4', description: 'project description', image: '', link: 'https://example.com/project4' },
];

const projectList = document.getElementById('project-list');

// Dynamically generate project cards
projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    // Create anchor tag for linking
    const anchor = document.createElement('a');
    anchor.href = project.link;
    anchor.classList.add('project-link');
    anchor.target = '_blank'; // Open in new tab

    // Add image only if available
    if (project.image) {
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = `${project.name} image`;
        img.classList.add('project-image');
        anchor.appendChild(img);
    } else {
        // Placeholder for projects without images
        const placeholder = document.createElement('div');
        placeholder.classList.add('project-placeholder');
        placeholder.textContent = 'No Image Available';
        anchor.appendChild(placeholder);
    }

    // Add project name
    const projectName = document.createElement('h3');
    projectName.textContent = project.name;
    projectName.classList.add('project-name');
    anchor.appendChild(projectName);

    // Add subtitle
    const projectSubtitle = document.createElement('p');
    projectSubtitle.textContent = project.subtitle;
    projectSubtitle.classList.add('project-subtitle');
    anchor.appendChild(projectSubtitle);

    // Add project description
    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;
    projectDescription.classList.add('project-description');
    anchor.appendChild(projectDescription);

    // Append the anchor to the card and card to the project list
    card.appendChild(anchor);
    projectList.appendChild(card);
});
