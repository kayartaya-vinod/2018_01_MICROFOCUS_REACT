function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}


wait(5000)
    .then(() => {
        console.log('job#1 is done!');
        return wait(2000);
    })
    .then(() => {
        console.log('job#2 is done!');
        return wait(5000);
    })
    .then(() => {
        console.log('job#3 is also done!');
        return wait(1000);
    })
    .then(() => {
        console.log('final job is also done!');
    })
    .catch(err => {
        console.error('something went wrong!');
        console.error(err);
    });
