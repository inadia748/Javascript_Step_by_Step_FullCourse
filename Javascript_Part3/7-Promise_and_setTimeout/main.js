// promise and setTimeout

// I want to resolve/ reject promise after 5 seconds



function myPromise() {
    return new Promise((resolve, reject)=> {
        const value = true;
        // const value = false
        setTimeout(()=> {
            if(value) {
                resolve();
            } else {
                reject();
            }
        }, 5000)
    })
}

myPromise().then(()=>{console.log('resolved')}).catch(()=> {
    console.log('rejected');
});