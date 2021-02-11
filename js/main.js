$(document).ready(function() {

  // Start: Title button's functionality
  var value = $('#msg').val();
  // End


  // End
  $('#submit').on('click',function() {
      var chosen = $('input[name=msg]:checked').val();
      var myParam;
      if (chosen ==='27')
      {
        myParam=$('#customtext').val();
      }
      else {
        myParam = "%"+chosen;
      }
      postToFeed(myParam);

  });

  $('#clearCompete').on('click', function() {
    $('#compete').text('');
  });

  $('#delete').on('click', function() {
    $('#compete option:selected').remove();
  });

  $('#addToCompete').on('click', function() {
    //var chosen = $('#roster option:selected').val();
    //console.log(chosen);
    var $newRow = $("<option value='" + $('#roster option:selected').val() + "'>"  + $('#roster option:selected').text() + "</option>");
    $("#compete").append($newRow);
  });

  $('#popTop').on('click', function() {
    $('#compete').prop('selectedIndex', 0);
    var chosen = $('#compete option:selected').val() ;
    console.log(chosen);
    var myParam;
    if (chosen > '26')
    {
      myParam=$('#customtext').val();
    }
    else {
      myParam = "%"+chosen;
    }

    postToFeed(myParam);
    $('#compete option:selected').remove();
  });

  function postToFeed(myParam) {
    $('#status').text(myParam);
    $.post( "https://io.adafruit.com/api/v2/webhooks/feed/DM2kkYvjfUdsKE2kwGxeKqA8Ybjk", { value: String(myParam)}, function( data, txtstatus ) {
      $('#statusResult').text("Data Loaded: " + data.completed_at );
    });
  };

});
