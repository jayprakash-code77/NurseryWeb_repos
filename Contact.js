
    //limitation to the feedback 
    document.addEventListener('DOMContentLoaded', function() {
    const feedbackContainer = document.getElementById('feedback-container');
    const charCount = document.getElementById('char-count');
    const maxChars = 200;

    feedbackContainer.addEventListener('input', function() {
        let text = this.innerText.trim();

        if (text.length > maxChars) {
            // Limit text to maxChars and set it back to the div
            text = text.substring(0, maxChars);
            this.innerText = text;
            // Place the cursor at the end of the text
            const range = document.createRange();
            const sel = window.getSelection();
            range.setStart(this.childNodes[0], maxChars);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }

        charCount.innerText = `${text.length}/${maxChars}`;

        // Toggle the over-limit class based on text length
        if (text.length > maxChars) {
            feedbackContainer.classList.add('over-limit');
            charCount.classList.add('over-limit');
        } else {
            feedbackContainer.classList.remove('over-limit');
            charCount.classList.remove('over-limit');
        }
    });
});


// -----------------------------------------

function hideShow(index) {
    // Get all elements with class 'com'
    var comElements = document.querySelectorAll('.com');
    
    // Loop through all 'com' elements
    for (var i = 0; i < comElements.length; i++) {
        if (i === index) {
            // Toggle the display of the clicked element
            comElements[i].style.display = comElements[i].style.display === 'none' ? 'block' : 'none';
        } else {
            // Hide all other 'com' elements
            comElements[i].style.display = 'none';
        }
    }
}

// Initially hide all 'com' elements
document.addEventListener('DOMContentLoaded', function() {
    var comElements = document.querySelectorAll('.com');
    comElements.forEach(function(element) {
        element.style.display = 'none';
    });
});
