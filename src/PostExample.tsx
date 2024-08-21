import axios from 'axios';
import React from 'react'
import { useState } from 'react'

interface BookingForm {
    name: string;
    email: string;
    address: string;
    pickup: string;
    sent: string;
    motor: string;
}

const PostExample = () => {

    const [formData, setFormData] = useState<BookingForm>({
        name: '',
        email: '',
        address: '',
        pickup: '',
        sent: '',
        motor: ''
    })

    // This is the simplified version of onChange listener
    // THis will automatically being called when there is change on the input
    // To use this you have to specify the name and value attribute of the form
    // The name need to be the same as the property of the state

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleForm = async (event: React.FormEvent) => {
        // Override default browser behaviour on form
        event.preventDefault();
        console.log(formData);
        try {
        // {data: data} // {data} // In sheety the requirement to sent data in an object, with property sheet1
       const response = await axios.post("https://api.sheety.co/4db58997dd33ab7eaa3d621c48bdea06/booking/sheet1",
            { sheet1: formData })
        console.log(response.data)
        alert("Post successful");

        }
        catch (error){
            console.log("an error occured",error);
        }
    }

    return (
        <form onSubmit={handleForm}>
            <h2>Motor Booking form</h2>
            <div>
                <input type="text" placeholder='Enter name' value={formData.name} onChange={handleChange} name="name" />
            </div>
            <div>
                <input type="text" placeholder='Enter email' value={formData.email} onChange={handleChange} name="email" />
            </div>
            <div>
                <input type="text" placeholder='Enter address' value={formData.address} onChange={handleChange} name="address" />
            </div>
            <div>
                <input type="date" placeholder='Enter pickup date' value={formData.pickup} onChange={handleChange} name="pickup" />
            </div>
            <div>
                <input type="date" placeholder='Enter sent date' value={formData.sent} onChange={handleChange} name="sent" />
            </div>
            <div>
                <input type="text" placeholder='Enter prefered motor model' value={formData.motor} onChange={handleChange} name="motor" />
            </div>
            <button type='submit'>Book motor</button>
        </form>
    )
}

export default PostExample