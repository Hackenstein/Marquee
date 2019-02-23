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

      $.post( "https://io.adafruit.com/api/v2/webhooks/feed/zdwpuA8HvJTMVo4nE6LVcfgi9hpf", { value: String(myParam)}, function( data, txtstatus ) {
        $('#statusResult').text("Data Loaded: " + data.completed_at );
});

  });

  $('#clear').on('click', function() {
    $('#customtext').val('');it
  })


});
