import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';

// 1) Declare the interface that represent our data
interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[]
}

const AsyncExample = () => {

    // State to store the promise response either success, pending or reject
    // success state

    // 2) Specify the data type of the response , Product or null
    const [data, setData] = useState<Product | null>(null);
    // pending state
    const [loading, setLoading] = useState<boolean>(true);
    // reject state (union data )
    const [error, setError] = useState<string | null>(null);


    // When the component is loaded, we will call the API using axios
    // For that we use useEffect

    useEffect(() => {
        // We define the function that we want to call here

        // we mark async in the function declaration for code that has async await inside it
        //  async - await => asynchronous process , eg: api call, local storage
        // device features, camera, geolocation, web notification = async await  (PWA)
        // calling database (in Next.js)- async await
        const fetchData = async () => {


            // 1) Using async await
            // // If I'm using async await, Need to use try catch
            // // So I can catch the error part
            // try {
            //     // How we call the GET method (get)
            //     const response = await axios.get("https://dummyjson.com/products/1")
            //     setData(response.data)
            // }
            // catch (error) {
            //     setError(`failed to load data`);
            // }
            // finally {
            //     setLoading(false);
            // }


            // 2) then, catch , finally

            axios.get("https://dummyjson.com/products/1")
            .then((response)=>{
                setData(response.data)
            }).catch((err)=>{
                setError('failed to load data')
            }).finally(()=>{
                setLoading(false)
            })

        }
        // Execute the fetchData function
        fetchData();


    }, []);
    // Once during the component load []
    // tomorrow we will see the case where useEffect is used to observe/listen to state change

    return (
        <div>
            <h2>Data loading exercise</h2>
            {/* The data is returned in JSON / Object, we use JSON stringify to transfrom Object to String */}
            {
                data &&
                <>
                    <h1>{data.title}</h1>
                    {
                        data.images.map((val, index) => <div key={index}><img src={val} alt="" width={300}/></div>)
                    }
                    <p>{data.description}</p>
                    <p>{data.price}</p>

                </>

            }
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
        </div>
    )
}

export default AsyncExample