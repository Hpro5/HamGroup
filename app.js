document.addEventListener('DOMContentLoaded', () => {
    const updatesContainer = document.getElementById('updates-container');
    
    // List of markdown files
    const updates = [
        'updates/update1.md',
        'updates/update2.md',
        // Add more markdown files here
    ];

    updates.forEach(update => {
        fetch(update)
            .then(response => response.text())
            .then(markdown => {
                const updateDiv = document.createElement('div');
                updateDiv.innerHTML = marked(markdown);
                updatesContainer.appendChild(updateDiv);
            });
    });
});
