import React from 'react'
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
    // All the state will be managed by react hook from through register props
    // Submission will be managed by react hook from through handleSubmit props
    // Errors will be managed by react hook from thorough errors
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const {Name, Email, Message, Phone} = data
        console.log(errors)
        console.log(Name)
        console.log(Email)
        console.log(Message)
        console.log(Phone)
    }

    return (
        //Call the handleSubmit function, inside the onSubmit function, pass a callback funtion that 
        // will be executed after handleSubmit is done
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />
            { errors.Name && <p style={{color:'red'}}>Please fill in your name</p>}
            <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
            { errors.Email && <p style={{color:'red'}}>Please check if email is there and in right format</p>}
            <select {...register("Division", { required: true })}>
                <option value="I.T">I.T</option>
                <option value="Management">Management</option>
                <option value="Sales">Sales</option>
                <option value="Admin">Admin</option>
                <option value=" Marketing"> Marketing</option>
                <option value="Operation">Operation</option>
            </select>
            <textarea {...register("Message", {})} />
            <button type='submit'>Send info</button>

        </form>
    )
}

export default ReactHookForm