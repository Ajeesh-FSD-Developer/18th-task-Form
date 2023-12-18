function submitForm() {
    var form = document.getElementById('myForm');
    var tableBody = document.querySelector('#dataTable tbody');

    
    var newRow = tableBody.insertRow();

    
    var values = [
      'firstName', 'lastName', 'address', 'pincode',
      'gender', 'food', 'state', 'country'
    ].map(function(id) {
      return form.elements[id].value;
    });

    
    values.forEach(function(value, index) {
      var cell = newRow.insertCell(index);
      cell.textContent = value;
    });

    
    form.reset();
  }