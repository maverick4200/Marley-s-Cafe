document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
     // Check if any text fields are empty
    var textFields = document.querySelectorAll('#contactForm input[type="text"], [type="number"]');
    var isMissing = false;
     textFields.forEach(function (textField) {
      if (textField.value.trim() === '') {
        isMissing = true;
        textField.classList.add('is-invalid'); // Add Bootstrap's "is-invalid" class for visual feedback
      } else {
        textField.classList.remove('is-invalid');
      }
    });
     if (isMissing) {
      // Display SweetAlert warning message if text fields are missing
      Swal.fire({
        icon: 'warning',
        title: 'Missing Info',
        text: 'Please fill out all the required text fields.',
        confirmButtonColor: '#2f1900',
      });
       return false; // Prevent form submission
    } else {
      // All text fields are filled, proceed with form submission logic here
       // Display SweetAlert success message
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Form submitted successfully.',
        confirmButtonColor: '#2f1900',
      });
    }
  });
 