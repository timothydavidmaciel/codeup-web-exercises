// const userName = "timothydavidmaciel";
//
// const URL = `https://api.github.com/users/${userName}/events/public`;
//
// let data = fetch(URL, {headers: {'Authorization': `${GITHUB_KEY}`}})
//
// let myData = data.then((res) => {
//     return res.json();
// }).then((myData) => {
//     return myData[0].created_at;
// })


const getLastCommit = (userName) => {
    const URL = `https://api.github.com/users/${userName}/events/public`;
    let data = fetch(URL, {headers: {'Authorization': `${GITHUB_KEY}`}})
    let myData = data.then((res) => {return res.json();}).then((myData) => {console.log(myData[0].created_at);})
}




