// Title fade out and options fade in
setTimeout(() => {
    document.getElementById('titleSection').style.display = 'none'; // Hide title
    const optionsSection = document.getElementById('optionsSection');
    optionsSection.style.display = 'block'; // Show options
}, 1000);
