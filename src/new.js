const fetchUserFromServer = username => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = true;
            if (isSuccess) {
                resolve("success value");
            }
            else {
                reject("error")
            }
        }, 2000)
    })
}
fetchUserFromServer("Манго")
    .then(x => console.log(x))
.cath(y=>console.log(y))