setTimeout(() => { 
    console.log('job#1 is done!');
    setTimeout(() => { 
        console.log('job#2 is done!');
        setTimeout(() => { 
            console.log('job#3 is done!');
            setTimeout(() => { 
                console.log('job#4 is done!');
                setTimeout(() => { 
                    console.log('final job is done!');
                }, 1000);
            }, 1000);
        }, 5000);
    }, 2000);
}, 5000);