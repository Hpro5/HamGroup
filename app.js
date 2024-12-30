document.addEventListener('DOMContentLoaded', () => {
    const updatesContainer = document.getElementById('updates-container');

    // Array of markdown content
    const updates = [
        {
            filename: 'update1.md',
            content: `
# Update 1

This is the first update for HamGroup.

- Point 1
- Point 2
- Point 3
            `
        },
        {
            filename: 'update2.md',
            content: `
# Update 2

This is the second update for HamGroup.

- Another Point
- Yet Another Point
- More Points
            `
        }
        // Add more updates as needed
    ];

    // Render the markdown content
    updates.forEach(update => {
        const updateDiv = document.createElement('div');
        updateDiv.innerHTML = marked(update.content);
        updatesContainer.appendChild(updateDiv);
    });
});
