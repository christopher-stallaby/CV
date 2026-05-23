document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.portfolio-card');
    const modal = document.getElementById('portfolio-modal');
    const closeModal = document.getElementById('close-modal');
    
    const modalTitle = document.getElementById('modal-title');
    const modalType = document.getElementById('modal-type');
    const modalBody = document.getElementById('modal-body');

    let hoverTimer;

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Start 2 second timer on hover
            hoverTimer = setTimeout(() => {
                openModal(card);
            }, 2000);
        });

        card.addEventListener('mouseleave', () => {
            // Clear timer if user leaves before 2 seconds
            clearTimeout(hoverTimer);
        });
    });

    function openModal(card) {
        // Populate modal with data from the card
        modalTitle.textContent = card.dataset.title;
        modalType.textContent = card.dataset.type;
        modalBody.textContent = card.dataset.preview;

        // Show the modal
        modal.style.display = 'flex';
    }

    // Close modal logic
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close if clicking the background
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});