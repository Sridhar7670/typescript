"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration, } = data;
    if (initialAmount < 0)
        return "Initial investment must not be negative";
    if (duration <= 0)
        return "Duration must be at least 1 year";
    if (expectedReturn < 0)
        return "Expected return must be at least zero";
    let total = initialAmount;
    let totalContribution = 0;
    const annualResult = [];
    for (let i = 0; i < duration; i++) {
        total *= 1 + expectedReturn;
        totalContribution += annualContribution;
        total += annualContribution;
        const interestEarned = total - totalContribution - initialAmount;
        annualResult.push({
            year: `Year ${i + 1}`,
            totalAmount: parseFloat(total.toFixed(2)),
            totalContribution: totalContribution,
            totalInterestEarned: parseFloat(interestEarned.toFixed(2)),
        });
    }
    return annualResult;
}
function printResults(results) {
    if (typeof results === "string") {
        console.log("Error:", results);
    }
    else {
        console.table(results);
    }
}
// Example usage:
const data = {
    initialAmount: 1000,
    annualContribution: 500,
    expectedReturn: 0.07,
    duration: 5,
};
const results = calculateInvestment(data);
printResults(results);
