// Disable text selection
document.onselectstart = function () {
    return false;
};

// Disable copy and paste events
document.oncopy = function (event) {
    event.preventDefault();
};

document.oncut = function (event) {
    event.preventDefault();
};
