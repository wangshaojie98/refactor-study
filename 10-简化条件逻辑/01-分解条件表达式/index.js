// example
if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
    charge = quantity * plan.summerRate;
else charge = quantity * plan.regularRate + plan.regularServiceCharge;

// make better：提炼函数
function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function summerCharge() {
    return quantity * plan.summerRate;
}

function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
}

if (summer()) {
    charge = summerCharge();
} else {
    charge = regularCharge();
}


// make better：三元运算符
function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function summerCharge() {
    return quantity * plan.summerRate;
}

function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
}

charge = summer() ? summerCharge() : regularCharge();