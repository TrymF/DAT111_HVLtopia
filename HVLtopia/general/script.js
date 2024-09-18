



// Define a reusable function to load and use a specific template
function loadTemplate(templateFile, templateId, containerId, numberOfCopies) {
    fetch(templateFile)
        .then(response => response.text())
        .then(templateHTML => {
            
            // Create a temporary div to hold the fetched HTML content
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = templateHTML;

            // Extract the specified template by its id
            const template = tempDiv.querySelector(`#${templateId}`);
            if (!template) {
                console.error(`Template with id '${templateId}' not found.`);
                return;
            }

            // Get the container where the cloned template will go
            const container = document.getElementById(containerId);
            if (!container) {
                console.error(`Container with id '${containerId}' not found.`);
                return;
            }

            // Create multiple clones of the template content
            for (let i = 1; i <= numberOfCopies; i++) {
                // Clone the template's content
                const clone = document.importNode(template.content, true);

                // Modify the clone as needed (optional, based on template type)
                if (templateId === 'card-template') {
                    // Example: Modify card template content
                    clone.querySelector('.card-title').textContent = `Card Title ${i}`;
                    clone.querySelector('.card-content').textContent = `This is card number ${i}.`;
                }

                // Append the clone to the container
                container.appendChild(clone);
            }
        })
        .catch(error => {
            console.error('Error fetching the template:', error);
        });
}
