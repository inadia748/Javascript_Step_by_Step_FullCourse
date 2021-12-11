function ricePromise(){
    const bucket = ['coffee', 'chips','vegetables','salts','rice'];
    return new Promise((resolve,reject)=>{
      if(bucket.includes("vegetables")&& bucket.includes("salts") && bucket.includes("rice")){
          resolve({value:"friedrice"});
      }else{
          reject("Promise could not fullfilled");
      }
    })
  }


  ricePromise().then(
    // jab promise resolve happens
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error);
    })