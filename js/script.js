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
// Setter
$( ".datepicker-both" ).datepicker( "option", "dateFormat", "d M yy" );

  var /*dateFormat = "mm-dd-yy",*/
  from = $( "#datepicker-from" )
    .datepicker({
      defaultDate: "+1w",
      changeMonth: true,
            altFormat: "DD"
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
 $( "#datepicker-from" ).datepicker(
  $.extend({
    altField: '#checkInWeekday'
}, from)
  );
    /*
      var from = $( "#from" )
      .datepicker({
        dateFormat: "d M yy D",
        minDate: new Date($('#hiddendelivdate').val()),
        monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort : ['Янв','Фев','Мрт','Апр','Май','Июн','Июл','Авг','Сент','Окт','Нояб','Дек'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        dayNamesShort: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
        minDate:-4,
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2
      })
      .on( "change", function() {
       to.datepicker( "option", "minDate", getDate( this ) );
      }),
      to = $( "#to" ).datepicker({

        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });


  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
   */

}



);


    