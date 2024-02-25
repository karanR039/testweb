document.addEventListener("DOMContentLoaded", function() {
    // Generate random identity number
    var identityNumber = generateIdentityNumber();
    document.getElementById("identity-number").innerText = identityNumber;
  
    // Print button functionality
    document.getElementById("print-button").addEventListener("click", function() {
      window.print();
    });
  
    // Share via WhatsApp button functionality
    document.getElementById("share-whatsapp-button").addEventListener("click", function() {
      var message = "My identity number is: " + identityNumber;
      window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(message));
    });
  
    // Share via Email button functionality
    document.getElementById("share-email-button").addEventListener("click", function() {
      var subject = "Access Card Information";
      var body = "My identity number is: " + identityNumber;
      window.location.href = "mailto:abc@example.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  
    // Submit query button functionality (just an example)
    document.getElementById("submit-query-button").addEventListener("click", function() {
      var query = document.getElementById("query-textarea").value;
      if (query.trim() !== "") {
        alert("Query submitted: " + query);
      } else {
        alert("Please enter a query.");
      }
    });
  });
  
  function generateIdentityNumber() {
    // Generate a random identity number (just an example)
    return Math.floor(100000 + Math.random() * 900000);
  }
  