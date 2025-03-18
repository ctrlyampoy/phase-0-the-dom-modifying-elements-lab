// Remove the <main> element
const main = document.getElementById('main');
main.remove();

// Create and configure the new <h1>
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Alice is the champion'; // Example with "Alice"

// Append to the body (optional but ensures visibility)
document.body.appendChild(newHeader);