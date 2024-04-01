document.addEventListener('keydown', function(event) {
    // Check if the user is pressing the PrtScn key
    if (event.key === 'PrintScreen' || event.key === 'PrtScn' || (event.keyCode === 44 && event.ctrlKey === true)) {
        event.preventDefault(); // Prevent the default action
        alert("Screenshots are not allowed on this website."); // Optionally, show an alert
    }
});
