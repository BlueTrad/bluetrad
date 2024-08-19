document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const expandedContent = this.nextElementSibling;
            const isExpanded = expandedContent.style.display === 'block';

            if (isExpanded) {
                expandedContent.style.display = 'none';
                this.textContent = 'Read More';
            } else {
                expandedContent.style.display = 'block';
                this.textContent = 'Read Less';
            }
        });
    });
});