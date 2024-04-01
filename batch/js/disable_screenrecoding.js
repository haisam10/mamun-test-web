//document.addEventListener('contextmenu', event => event.preventDefault());
function detectScreenRecording() {
    // Check if MediaStream Recording API is available
    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        // Screen recording is possible
        // Display watermark
        displayWatermark();
        // You can also take further actions like preventing recording
    } else {
        // Screen recording is not possible
        // Proceed with normal behavior
    }
}

// Function to display watermark
function displayWatermark() {
    // Create a div for the watermark
    var watermark = document.createElement('div');
    watermark.style.position = 'fixed';
    watermark.style.bottom = '20px';
    watermark.style.right = '20px';
    watermark.style.padding = '10px';
    watermark.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    watermark.style.color = '#000';
    watermark.style.fontFamily = 'Arial, sans-serif';
    watermark.style.fontSize = '16px';
    watermark.innerHTML = 'Screen recording disabled';
    document.body.appendChild(watermark);
}

// Call the detection function when the page loads
window.onload = detectScreenRecording;