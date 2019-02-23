$(document).ready(function() {

  // Start: Title button's functionality
  var value = $('#msg').val();
  // End


  // End
  $('#submit').on('click',function() {
      var chosen = $('input[name=msg]:checked').val();
      var myParam;
      if (chosen ==='28')
      {
        myParam=$('#customtext').val();
      }
      else {
        myParam = "%"+chosen;
      }
      $('#status').text(myParam);
  });

  $('#clear').on('click', function() {
    $('#customtext').val('');
  })
});
