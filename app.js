document.addEventListener('DOMContentLoaded', () => {
    const updatesContainer = document.getElementById('updates-container');

    // Load the updates from updates.js
    updates.forEach(update => {
        const updateDiv = document.createElement('div');
        updateDiv.className = 'update-box';
        updateDiv.innerHTML = update.content;
        updatesContainer.appendChild(updateDiv);
    });
});
