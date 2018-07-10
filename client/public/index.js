document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var options = {
    alignment: 'right',
  }
  var instances = M.Dropdown.init(elems, options);
});

$(document).ready(function () {
  $('.parallax').parallax();
});

// $( document ).ready(function() {
//   $(".dropdown-trigger").dropdown({
//   });
// });