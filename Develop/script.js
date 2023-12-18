// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  



  $( 'button' ).on('click', function() {

    var schedules = [...localStorage.getItem('schedules')]
    schedules.map((schedule)=> {
      if (schedule.key !== $(this).parent().prop('id')){
        schedules.push(
          {
            key: $(this).parent().prop('id'),
            value: $(this).prev().val()
          }
        )
      }
    })

    localStorage.setItem('schedules', schedules);
    schedules.map((schedule)=> {
      //TO DO: get text area and edit the value property on text area make it 
      //equal to schedule.value
      var hr9 = document.getElementById(schedule.key);
      hr9.value = schedule.value;
    })

  


    
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  var currentHour = dayjs().format('H'); // returns 0-23 thats based on a 24 hour clock
  var idHour = document.querySelector('div id')

  for (var i = currentHour; i < 18; i++) {
      if (i < idHour) {
          document.getElementById(i.toString()).classList.add('past');
      } else if (i === idHour) {
          document.getElementById(i.toString()).classList.add('present');
      } else if (i > idHour) {
          document.getElementById(i.toString()).classList.add('future');
      }
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  var get9 = localStorage.getItem($('button').parent().prop('id'), $(button).prev().val());
  document.getElementById('hour-9').value = get9
  
  var get10 = localStorage.getItem($('button').parent().prop('hour-10'));
  document.getElementById('hour-10').value = get10
  
  
  var get9 = localStorage.getItem($(button).parent().prop('id'), $(button).prev().val());
  document.getElementById('hour-11').value = get9
  
  var get10 = localStorage.getItem($('button').parent().prop('hour-12'));
  document.getElementById('hour-12').value = get10



  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs().format('dddd, MMMM D')
  $('#currentDay').text(today);
});
