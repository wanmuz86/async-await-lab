import React, { useEffect } from 'react'



const PromiseExample = () => {



  useEffect(()=>{

      // Example of Promise.all

  // Promise1 will resolve the promise right away
  const promise1 = Promise.resolve('First promise resolved');

  // Promise2 will wait for 1 second and resolve the promise
  const promise2 = new Promise((resolve) => setTimeout(() => resolve('second promise resolved'), 1000))


  const promise3 = new Promise((resolve)=> setTimeout(()=> resolve('Race promise resolved first'),500));
  const promise4 = new Promise((resolve)=> setTimeout(()=> resolve('Race promise resolved second'),1000));



    //Promise.all(): runs multiple promises in parallel and resolves when all promises have resolved.

    Promise.all([promise1, promise2])
    .then((messages)=> console.log("Promise succesfully resolved", messages))
    .catch((error)=> console.log('Error in promises', error))

    // Promise.race: run multiple promises in parallel, and resolve when the first promise finished have been resolved

    Promise.race([promise3,promise4])
    .then((message)=> console.log(message))
    .catch((error)=> console.log('Error in promises', error))

  }, [])




  return (
    <div>Example with Promise</div>
  )
}

export default PromiseExample