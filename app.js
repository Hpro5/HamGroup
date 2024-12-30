document.addEventListener('DOMContentLoaded', () => {
    const updatesContainer = document.getElementById('updates-container');

    // GitHub repository details
    const owner = 'Hpro5';
    const repo = 'HamGroup';

    // Fetch the list of markdown files from the GitHub repository
    fetch(`https://api.github.com/repos/${owner}/${repo}/contents/updates`)
        .then(response => response.json())
        .then(files => {
            // Filter markdown files and fetch their contents
            files.filter(file => file.name.endsWith('.md')).forEach(file => {
                fetch(file.download_url)
                    .then(response => response.text())
                    .then(markdown => {
                        const updateDiv = document.createElement('div');
                        updateDiv.innerHTML = marked(markdown);
                        updatesContainer.appendChild(updateDiv);
                    });
            });
        })
        .catch(error => console.error('Error loading updates:', error));
});
