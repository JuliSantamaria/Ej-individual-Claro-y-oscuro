$(document).ready(function() {
    $('#btn-claro').click(function() {
      $('body').removeClass('bg-dark text-light').addClass('bg-light text-dark');
      $('nav').removeClass('navbar-dark bg-dark').addClass('navbar-light bg-primary');
      $('table').removeClass('table-dark');
    });
  
    $('#btn-oscuro').click(function() {
      $('body').removeClass('bg-light text-dark').addClass('bg-dark text-light');
      $('nav').removeClass('navbar-light bg-primary').addClass('navbar-dark bg-dark');
      $('table').addClass('table-dark');
    });
  });
  