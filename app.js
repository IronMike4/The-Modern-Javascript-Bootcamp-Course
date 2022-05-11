const student = {
    firstName : 'David',
    lastName : 'Jones',
    strengths : ['Music','Art'],
    exams : {
        midterm : 92,
        final : 88
    }
};

const avg = (student.exams.midterm + student.exams.final) / 2;

student.strengths[1]