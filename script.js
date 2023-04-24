$(function() {
    
//for loop to set an index for each hour div
for (let i = 0; i < 9; i++) {
  
  const $textarea = $(`#hour-${i+9} .description`);
  const $saveBtn = $(`#hour-${i+9} .saveBtn`);

  //load saved value from local storage
  $textarea.val(localStorage.getItem(`scheduleText-${i+9}`));

  //save value to local storage when the save button is clicked
  $saveBtn.on('click', function() {
  localStorage.setItem(`scheduleText-${i+9}`, $textarea.val());
});
};
    
//get the current hour and add correlating classes to each hour div
let currentHour = new Date().getHours();

$('.time-block').each(function() {
  //get the hour from the div's id
  var hour = parseInt($(this).attr("id").split("-")[1]);

  //compare the hour to the current hour and add the appropriate class
  if (hour < currentHour) {
    $(this).removeClass("present future").addClass("past");
  } else if (hour === currentHour) {
    $(this).removeClass("past future").addClass("present");
  } else {
    $(this).removeClass("past present").addClass("future");
  }
});

//get current date and display it in the header, date ordinal currently not working
let today = dayjs();

$('#currentDay').text(today.format('[Today is:] dddd[,] MMMM Do YYYY'));

});
  