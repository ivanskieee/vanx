// your_script.js

// Simulate a memory-intensive operation
const largeArray = [];

// Fill the array with a large number of objects
for (let i = 0; i < 1e7; i++) {  // Adjust the number as needed
    largeArray.push({ index: i, data: 'Some data' });
}

console.log('Array filled with data. Length:', largeArray.length);

// Function to clear memory
function clearMemory() {
    largeArray.length = 0; // Clear the array
    console.log('Memory cleared.');
}

// Clear memory after some time
setTimeout(clearMemory, 10000); // Clear memory after 10 seconds
