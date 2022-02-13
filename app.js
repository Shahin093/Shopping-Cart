function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-count');
    let caseCount = caseInput.value;
    if (isIncreasing == true) {
        caseCount = parseInt(caseCount) + 1;
    } else {
        if (caseCount > 0) {
            caseCount = parseInt(caseCount) - 1;
        }
    }
    caseInput.value = caseCount;
    // Update case total 
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseCount * 59;
}

document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false);
});

