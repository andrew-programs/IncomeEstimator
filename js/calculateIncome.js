document.addEventListener('DOMContentLoaded', () => {
  var eRate = document.getElementById('rate');
  var eHours = document.getElementById('hours');
  var weekly = document.getElementById('weekly');
  var monthly = document.getElementById('monthly');
  var annual = document.getElementById('annual');

  eRate.addEventListener('input', () => {
    let rate = parseFloat(eRate.value) || 0;
    let hours = parseFloat(eHours.value) || 0;
    
    weekly.innerHTML = rate * hours;
    monthly.innerHTML = rate * hours * 4;
    annual.innerHTML = rate * hours * 52;
  });

  eHours.addEventListener('input', () => {
    let rate = parseFloat(eRate.value) || 0;
    let hours = parseFloat(eHours.value) || 0;

    weekly.innerHTML = rate * hours;
    monthly.innerHTML = rate * hours * 4;
    annual.innerHTML = rate * hours * 52;
  });
});