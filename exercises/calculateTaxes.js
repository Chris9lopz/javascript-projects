function calculateTaxes(income) {
  if (income <= 1000) {
    return income * 0.02;
  }

  if (income <= 10000) {
    return income * 0.03;
  }

  if (income > 10000) {
    return income * 0.05;
  }
}
