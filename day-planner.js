$(document).ready(function() {
  const wds = false;
  const now = moment().format('MMMM Do YYYY');
  let nowHour24 = moment().format('H');
  let nowHour12 = moment().format('h');

  if (wds) {
    nowHour24 = 13;
    nowHour12 = 1;
  }

  let $dateHeading = $('#navbar-subtitle');
  $dateHeading.text(now);

  let storedWDS = JSON.parse(localStorage.getItem('storedWDS'));

  if (storedWDS !== null) {
    planTextArr = storedWDS;
  } else {
    planTextArr = new Array(9);
    planTextArr[4] = 'Afternoon Class';
  }

  let $plannerDiv = $('#plannerContainer');
  $plannerDiv.empty();

  for (let hour = 9; hour <= 17; hour++) {
    let index = hour - 9;

    let $rowDiv = $('<div>');
    $rowDiv.addClass('row');
    $rowDiv.addClass('plannerRow');
    $rowDiv.attr('hour-index', hour);

    let $col2TimeDiv = $('<div>');
    $col2TimeDiv.addClass('col-md-2 btn-save');

    const $timeBoxSpn = $('<span>');
    $timeBoxSpn.attr('class', 'timeBox');

    let displayHour = 0;
    let ampm = '';
    if (hour > 12) {
      displayHour = hour - 12;
      ampm = 'pm';
    } else {
      displayHour = hour;
      ampm = 'am';
    }

    $timeBoxSpn.text(`${displayHour} ${ampm}`);

    $rowDiv.append($col2TimeDiv);
    $col2TimeDiv.append($timeBoxSpn);

    let $dailyPlanSpn = $('<input>');

    $dailyPlanSpn.attr('id', `input-${index}`);
    $dailyPlanSpn.attr('hour-index', index);
    $dailyPlanSpn.attr('type', 'text');
    $dailyPlanSpn.attr('class', 'dailyPlan');

    $dailyPlanSpn.val(planTextArr[index]);

    let $col9IptDiv = $('<div>');
    $col9IptDiv.addClass('col-md-9 btn-save');

    $rowDiv.append($col9IptDiv);
    $col9IptDiv.append($dailyPlanSpn);

    let $col1SaveDiv = $('<div>');
    $col1SaveDiv.addClass('col-md-1 btn-save');

    let $saveBtn = $('<i>');
    $saveBtn.attr('id', `saveid-${index}`);
    $saveBtn.attr('save-id', index);
    $saveBtn.attr('class', 'far fa-save saveIcon btn');

    $rowDiv.append($col1SaveDiv);
    $col1SaveDiv.append($saveBtn);

    updateRowColor($rowDiv, hour);

    $plannerDiv.append($rowDiv);
  }

  function updateRowColor($hourRow, hour) {
    if (hour < nowHour24) {
      $hourRow.css('background-color', 'white');
    } else if (hour > nowHour24) {
      $hourRow.css('background-color', 'yellow');
    } else {
      $hourRow.css('background-color', 'green');
    }
  }

  $(document).on('click', 'i', function(event) {
    event.preventDefault();
    let $index = $(this).attr('save-id');
    let inputId = '#input-' + $index;
    let $value = $(inputId).val();

    planTextArr[$index] = $value;

    $(`#saveid-${$index}`).removeClass('shadowPulse');
    localStorage.setItem('storedWDS', JSON.stringify(planTextArr));
  });

  $(document).on('change', 'input', function(event) {
    event.preventDefault();
    let i = $(this).attr('hour-index');
    $(`#saveid-${i}`).addClass('shadowPulse');
  });
});
