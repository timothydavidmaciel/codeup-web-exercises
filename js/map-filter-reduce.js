// Step 1

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Step 2

const languages3 = users.filter((user) => {
    return user.languages.length >= 3;
});

// Step 3

const allEmail = users.map(({email})=> email);

// Step 4

const userYears = users.reduce((total, years) => {
    return total + years.yearsOfExperience;
}, 0)

let userAve = userYears / users.length;

// Step 5

const longEmail = users.reduce((eMail, mail ) => {
    return longMail.email.length > mail.length;
}, "")

console.log(longEmail);