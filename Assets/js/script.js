
//      FETCH CURRENT DATE AND TIME WITH DAYJS

var currentDate = dayjs().format('dddd, MMMM D');
$('#currentDay').text(currentDate);
var currentHour = dayjs().format('H');



//      RUN SAVE FUNCTION ON CLICK, SAVE TO LOCAL STORAGE

$('.saveBtn').on('click', function () {

  var textInput = $(this).siblings('.description').val();
  var timeRow = $(this).parent().attr('id');

  localStorage.setItem(timeRow, textInput);
})
$('#9  .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));


//      CHANGES ROW COLOR DEPENDING ON CURRENT HOUR COMPARED TO ROWS HOUR

$('.row').each(function () {
  var timeRow = parseInt($(this).attr('id'));

  if (timeRow < currentHour) {
    $(this).addClass('past');
  }
  else if (timeRow === currentHour) {
    $(this).removeClass('past');
    $(this).addClass('present');
  }
  else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
});