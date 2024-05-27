// Handle protocol/role changes to show appropriate configuration
const protocolSelect = document.getElementById('protocol');
const roleSelect = document.getElementById('role');
const configurationDiv = document.getElementById('configuration');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

// ... (Logic to dynamically update the configurationDiv based on protocol and role selections)

startBtn.addEventListener('click', () => {
    // Send configuration data to backend (using fetch or similar)
    // ...
});

stopBtn.addEventListener('click', () => {
    // Send stop signal to backend
    // ...
});


