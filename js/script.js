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

  var /*dateFormat = "mm-dd-yy",*/
  from = $( "#datepicker-from" )
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


    