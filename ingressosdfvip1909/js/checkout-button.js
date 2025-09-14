document.addEventListener('DOMContentLoaded', () => {
    const ticketBlocks = document.querySelectorAll('.main-ticket-card');

    ticketBlocks.forEach(block => {
        const quantitySelect = block.querySelector('select[data-qa="ticket-quantity"]');
        const checkoutButton = block.querySelector('.checkout-button');
        const priceElement = block.querySelector('.main-ticket-card-price');

        if (quantitySelect && checkoutButton && priceElement) {
            const priceText = priceElement.textContent.trim();
            const priceMatch = priceText.match(/R\$\s*([\d,.]+)/);
            const price = priceMatch ? parseFloat(priceMatch[1].replace('.', '').replace(',', '.')) : 0;

            const updateButton = () => {
                const quantity = parseInt(quantitySelect.value, 10);
                const total = price * quantity;

                checkoutButton.textContent = `Comprar (${quantity} ingresso${quantity !== 1 ? 's' : ''} - R$ ${total.toFixed(2).replace('.', ',')})`;
                checkoutButton.disabled = quantity === 0;
            };

            quantitySelect.addEventListener('change', updateButton);

            checkoutButton.addEventListener('click', () => {
                if (parseInt(quantitySelect.value, 10) > 0) {
                    window.location.href = 'https://www.google.com.br';
                }
            });

            // Initial state
            updateButton();
        }
    });
});
