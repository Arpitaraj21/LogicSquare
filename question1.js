function generateStudentMarkSheets(students, Details) {
    const studentsMarkSheets = [];

    const detailsMap = new Map();
    Details.forEach(detail => {
        detailsMap.set(detail.Roll, detail.subjects);
    });

    students.forEach(student => {
        const { name, Roll } = student;
        const subjects = detailsMap.get(Roll);

        if (subjects) {
            const math = subjects.math || 0;
            const english = subjects.english || 0;
            const chemistry = subjects.chemistry || 0;
            const computer = subjects.computer || 0;
            const total = math + english + chemistry + computer;

            const status = total >= 200 ? "pass" : "fail";
            
            const markSheet = {
                name,
                Roll,
                math,
                english,
                chemistry,
                computer,
                total,
                status
            };

            
            studentsMarkSheets.push(markSheet);
        }
    });

    return studentsMarkSheets;
}


const students = [
    { name: "Dhishan Debnath", Roll: 1 },
    { name: "Animesh Gupta", Roll: 2 },
    { name: "Tapas Sen", Roll: 3 },
    { name: "Misti Dutta", Roll: 4 },
    { name: "Chini Misra", Roll: 5 }
];

const Details = [
    { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
    { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
    { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
    { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
    { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } }
];


const studentsMarkSheets = generateStudentMarkSheets(students, Details);


console.log(studentsMarkSheets);

