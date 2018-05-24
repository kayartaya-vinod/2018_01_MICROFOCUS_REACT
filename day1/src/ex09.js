function getEmpsData() {
    return new Promise((resolve, reject) => {
        // make a request to the remote server
        // if the data is retrieved successuffly, then resolve,
        // else reject
        let xhr = new XMLHttpRequest();
        xhr.open('GET', './emps.json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    let emps = JSON.parse(xhr.responseText);
                    resolve(emps);
                }
                else {
                    reject({ message: xhr.statusText, code: xhr.status });
                }
            }
        };
        xhr.send(); // call to an async function
    });
}

getEmpsData()
    .then(data => {
        data.forEach(obj => {
            console.log(obj);
        });
    })
    .catch(err => {
        console.error('There was an error while fetching data!');
        console.log(err);
    });

console.log('End of script!')