import React, { useRef } from 'react'
// useRef is a hook to retrieve reference of a form input (DOM Manipulation - getElementById)

const UncontrolledForm = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const handleForm = (event:React.FormEvent)=>{
        event.preventDefault();
        const name = nameRef.current?.value
        const email = emailRef.current?.value
        console.log(name)
        console.log(email)
    }
    return (
        <form onSubmit={handleForm}>
            <div>
                <label>Name:</label>
                <input type="text" ref={nameRef} required></input>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" ref={emailRef} required></input>
            </div>
            <button type="submit" >Send data</button>
        </form>

    )
}

export default UncontrolledForm