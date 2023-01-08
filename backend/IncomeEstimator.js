// Define functions that will be exported
function hourlyIncome(hourlyRate, weeklyHours) {
  return hourlyRate * weeklyHours * 52;
}

function monthlySalaryIncome(monthlySalary) {
  return monthlySalary * 12;
}

const hourlyRate = 20;
const weeklyHours = 40;

console.log(`Weekly Income for hourly : $${hourlyRate * weeklyHours}`)
console.log(`Monthly income for hourly : ~ $${hourlyRate * weeklyHours * 4}`)
console.log(`Annual Income for hourly : $${hourlyIncome(hourlyRate, weeklyHours)}`);