function raise(aPerson, factor) {
  aPerson.salary = aPerson.salary.multiply(factor);
}



// example two
function withinBand(usage, bottom, top) {
  return usage > bottom 
    ? Math.min(usage, top) - bottom 
    : 0;
}

function baseCharge(usage) {
  if (usage < 0) return usd(0);

  const amount =
    withinBand(usage, 0, 100) * 0.03 
    + withinBand(usage, 100, 200) * 0.05 
    + withinBand(usage, 200, Number.MAX_SAFE_INTEGER) * 0.07;
    
  return usd(amount);
}