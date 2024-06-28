document.getElementById('resultForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const studentId = document.getElementById('student_id').value;
    const resultContainer = document.getElementById('result');

    // Simulated student results data
    const studentResults = {
        '101': { name: 'Prahlad', marks: 999 },
        '102': { name: 'Neelam Gadhi', marks: 0 },
        '103': { name: 'Gunndi', marks: 11 }
    };

    if (studentResults[studentId]) {
        const result = studentResults[studentId];
        resultContainer.innerHTML = `<p>Name: ${result.name}</p><p>Marks: ${result.marks}</p>`;
    } else {
        resultContainer.innerHTML = '<p>No results found for the given student ID.</p>';
    }
});
