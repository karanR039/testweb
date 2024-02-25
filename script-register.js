document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalAmount = document.getElementById('total-amount');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            let totalPrice = 0;
            checkboxes.forEach(function(cb) {
                if (cb.checked) {
                    const price = parseInt(cb.getAttribute('data-price'));
                    if (!isNaN(price)) { // Check if the price is a valid number
                        totalPrice += price;
                    }
                }
            });
            totalAmount.textContent = '$' + totalPrice;
        });
    });

    document.getElementById("submit-pay").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        
        var totalAmountValue = parseInt(totalAmount.textContent.slice(1)); // Removing the '$' sign and converting to integer
        if (totalAmountValue === 0 || isNaN(totalAmountValue)) {
            alert("Please select at least one event.");
            return;
        }
        
        var confirmation = confirm("Proceed to pay: $" + totalAmountValue);
        if (confirmation) {
            // Here you can add code to proceed with the payment process
            alert("Payment successful!");
        }
    });
});
