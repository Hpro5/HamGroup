document.addEventListener('DOMContentLoaded', () => {
    const updatesContainer = document.getElementById('updates-container');

    fetch('load_updates.php')
        .then(response => response.json())
        .then(updates => {
            updates.forEach(update => {
                const updateDiv = document.createElement('div');
                fetch(update)
                    .then(response => response.text())
                    .then(markdown => {
                        updateDiv.innerHTML = marked(markdown);
                        updatesContainer.appendChild(updateDiv);
                    });
            });
        });
});
