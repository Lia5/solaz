/*datepicker*/
$( function() {
  $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
  
  $( ".datepicker-both" ).datepicker({
    dateFormat: "d M yy",
    numberOfMonths: 2,
    minDate:-4,
  });
// Getter
var dateFormat = $( ".datepicker-both" ).datepicker( "option", "dateFormat" );
var altField = $( ".datepicker-both" ).datepicker( "option", "altField" );
var altFormat = $( ".datepicker-both" ).datepicker( "option", "altFormat" );
// Setter
$( ".datepicker-both" ).datepicker( "option", "dateFormat", "d M yy" );
$( "#datepicker-from" ).datepicker( "option", "altField", "#checkInWeekday" );
$( "#datepicker-to" ).datepicker( "option", "altField", "#checkOutWeekday" );
$( ".datepicker-both" ).datepicker( "option", "altFormat", "DD" );

  var from = $( "#datepicker-from" )
    .datepicker({
      defaultDate: "+1w",
      changeMonth: true,

    })
    .on( "change", function() {
      to.datepicker( "option", "minDate", getDate( this ) );
    }),
  to = $( "#datepicker-to" ).datepicker({
    defaultDate: "+1w",
    changeMonth: true,

  })
  .on( "change", function() {
    from.datepicker( "option", "maxDate", getDate( this ) );
  });



function getDate( element ) {
  var date;
  try {
    date = $.datepicker.parseDate( dateFormat, element.value );
  } catch( error ) {
    date = null;
  }

  return date;
}
$( "#datepicker-from" ).datepicker({
  altField: "#checkInWeekday",
  altFormat: "DD"
});
   

}



);

jQuery(document).ready(function(){
  // This button will increment the value
  $('.occupancy__box-container-n .qtyplus').click(function(e){
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name='+fieldName+']').val());
      // If is not undefined
      if (!isNaN(currentVal)) {
          // Increment only if value is < 20
          if (currentVal < 20)
          {
            $('input[name='+fieldName+']').val(currentVal + 1);
            $('.occupancy__box-container-n .qtyminus').val("-").removeAttr('style');
          }
          else
          {
            $('.occupancy__box-container-n .qtyplus').val("+").css('color','#aaa');
            $('.occupancy__box-container-n .qtyplus').val("+").css('cursor','not-allowed');
          }
      } else {
          // Otherwise put a 0 there
          $('input[name='+fieldName+']').val(1);

      }

  });
// This button will decrement the value till 0
$(".occupancy__box-container-n .qtyminus").click(function(e) {
  // Stop acting like a button
  e.preventDefault();
  // Get the field name
  fieldName = $(this).attr('field');
  // Get its current value
  var currentVal = parseInt($('input[name='+fieldName+']').val());
  // If it isn't undefined or its greater than 0
  if (!isNaN(currentVal) && currentVal > 1) {
      // Decrement one only if value is > 1
      $('input[name='+fieldName+']').val(currentVal - 1);
       $('.occupancy__box-container-n .qtyplus').val("+").removeAttr('style');
  } else {
      // Otherwise put a 0 there
      $('input[name='+fieldName+']').val(1);
      $('input[name=quantity-d]').val(0);
      $('.occupancy__box-container-n .qtyminus').val("-").css('color','#aaa');
      $('.occupancy__box-container-n .qtyminus').val("-").css('cursor','not-allowed');
  }


});
});



jQuery(document).ready(function(){
  // This button will increment the value
  $('.occupancy__box-container-v .qtyplus').click(function(e){
      // Stop acting like a button
      e.preventDefault();
      // Get the field name

      fieldName = $(this).attr('field');
      // Get its current value
      var currentValV = parseInt($('input[name='+fieldName+']').val());
      // If is not undefined
      if (!isNaN(currentValV)) {
          // Increment only if value is < 20
          if (currentValV < 20)
          {
            $('input[name='+fieldName+']').val(currentValV + 1);
            $('.occupancy__box-container-v .qtyminus').val("-").removeAttr('style');
          }
          else
          {
            $('.occupancy__box-container-v .qtyplus').val("+").css('color','#aaa');
            $('.occupancy__box-container-v .qtyplus').val("+").css('cursor','not-allowed');
          }
      } else {
          // Otherwise put a 0 there
          $('input[name='+fieldName+']').val(1);

      }




  });
// This button will decrement the value till 0
$(".occupancy__box-container-v .qtyminus").click(function(e) {
  // Stop acting like a button
  e.preventDefault();
 
  // Get the field name
  fieldName = $(this).attr('field');
  // Get its current value
  var currentValV = parseInt($('input[name='+fieldName+']').val());
  // If it isn't undefined or its greater than 0
  if (!isNaN(currentValV) && currentValV > 1) {
      // Decrement one only if value is > 1
      $('input[name='+fieldName+']').val(currentValV - 1);
       $('.occupancy__box-container-v .qtyplus').val("+").removeAttr('style');
  } else {
      // Otherwise put a 0 there
      $('input[name='+fieldName+']').val(1);
      $('.occupancy__box-container-v .qtyminus').val("-").css('color','#aaa');
      $('.occupancy__box-container-v .qtyminus').val("-").css('cursor','not-allowed');
  }

});
});
    
/*


else {
  $('input[name=quantity]').val(1); 
  $('.occupancy__box-container .qtyminus').val("-").css('color','#aaa');
  $('.occupancy__box-container .qtyminus').val("-").css('cursor','not-allowed');
}


if (parseInt($('input[name=quantity]').val())) {
 
} else 

if (parseInt($('input[name=quantity-v]').val())) {
 $('input[name=quantity-v]').val(1); 
 $('.occupancy__box-container-v .qtyminus').val("-").css('color','#aaa');
 $('.occupancy__box-container-v .qtyminus').val("-").css('cursor','not-allowed');
} else 

if (parseInt($('input[name=quantity-d]').val())) {
$('input[name=quantity-d]').val(0); 
$('.occupancy__box-container-d .qtyminus').val("-").css('color','#aaa');
$('.occupancy__box-container-d .qtyminus').val("-").css('cursor','not-allowed');
}*/