document.addEventListener('DOMContentLoaded',() => {
  var eRate = document.getElementById('rate');
  var eHours = document.getElementById('hours');
  var weekly = document.getElementById('weekly');
  var monthly = document.getElementById('monthly');
  var annual = document.getElementById('annual');

  eRate.addEventListener('input', () => {
    let rate = parseFloat(eRate.value) || 0;
    let hours = parseFloat(eHours.value) || 0;

    incomeWeekly = rate * hours;
    incomeMonthly = rate * hours * 4;
    incomeAnnual = rate * hours * 52;

    weekly.innerHTML = "Weekly : $" + incomeWeekly; 
    monthly.innerHTML = "Monthly : $" + incomeMonthly; 
    annual.innerHTML = "Annual : $" + incomeAnnual;
  });

  eHours.addEventListener('input', () => {
    let rate = parseFloat(eRate.value) || 0;
    let hours = parseFloat(eHours.value) || 0;

    incomeWeekly = rate * hours;
    incomeMonthly = rate * hours * 4;
    incomeAnnual = rate * hours * 52;

    weekly.innerHTML = "Weekly : $" + incomeWeekly; 
    monthly.innerHTML = "Monthly : $" + incomeMonthly; 
    annual.innerHTML = "Annual : $" + incomeAnnual;
  });
});