// example
if (anEmployee.seniority < 2) return 0;
if (anEmployee.monthsDisabled > 12) return 0;
if (anEmployee.isPartTime) return 0;

// make better：逻辑与
function isNotEligableForDisability() {
  return anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime;
}

// example
if (anEmployee.onVacation)
  if (anEmployee.seniority > 10)
    return 1;
return 0.5;

// make better
function handleSeniority() {
  if ((anEmployee.onVacation) 
      && (anEmployee.seniority > 10)) {
    return 1;
  }
  
  return 0.5;
}