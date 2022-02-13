document.getElementById('case-plus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-plus-count');
    const caseCount = caseInput.value;
    caseInput.value = parseInt(caseCount) + 1;

});