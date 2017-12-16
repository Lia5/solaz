/*datepicker*/
$( function() {
    
      var date = $('#datepicker').datepicker({ 
          dateFormat: 'd M yy \n D',
          minDate: new Date($('#hiddendelivdate').val()),
          monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
          monthNamesShort : ['Янв','Фев','Мрт','Апр','Май','Июн','Июл','Авг','Сент','Окт','Нояб','Дек'],
          dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
          dayNamesShort: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
          minDate:-4,
          numberOfMonths: [1, 2],
          
    }).val();

    var date2 = $('#datepicker2').datepicker({ 
        dateFormat: 'd M yy \n D',
        minDate: new Date($('#hiddendelivdate').val()),
        monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort : ['Янв','Фев','Мрт','Апр','Май','Июн','Июл','Авг','Сент','Окт','Нояб','Дек'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        dayNamesShort: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
        minDate:-4,
        numberOfMonths: [1, 2],
        
  }).val();

  var day1 = $('#datepicker').datepicker({ 
    dateFormat: 'D',
        
}).val();



}



);


    