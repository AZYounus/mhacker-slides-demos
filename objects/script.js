function getApproxAge() {
    return 2022 - this.birth_year;
}

const user = {
    first: 'Adam',
    last: 'Gunn',
    graduation_date: {
        month: 'April',
        year: 2024
    },
    birth_year: 2002,
    major: 'Computer Science',
    hometown: 'Chicago',
    languages: ['JavaScript', 'C++'],
    getApproxAge: getApproxAge
}

console.log(user.first);
console.log(user.graduation_date.year);
console.log(user["hometown"]);
console.log(user.getApproxAge());