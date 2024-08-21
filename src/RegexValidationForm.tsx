import React, { useState } from 'react'



const RegexValidationForm = () => {
    const [formData, setFormData] = useState({email:'',currency:'', phoneNumber:''})
    const [errors, setErrors] = useState({email:'', currency:'', phoneNumber:''})

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=> {
        const {name,value} = event.target; // refers to event.target.name and event.target.value
        setFormData({...formData, [name]:value}); // set the form data to "a copy of form data", "name" set it the new value 

        // Perform validation

        switch(name){
            case 'email':
                const emailRegex = /\S+@\S+\.\S+/;
                setErrors(prev=> ({
                    ...prev,
                    email: emailRegex.test(value)? '' :'Invalid Email address'
                }))


            break;
            case 'currency':
                const currencyRegex = /^\d+(\.\d{1,2})?$/;
                setErrors(prev=>({
                    ...prev,
                    currency:currencyRegex.test(value) ? '' : 'Invalid Currency format (eg: 123.45)'
                }))
            break;
            case 'phoneNumber':
                const phoneRegex = /^(\(\d{3}\)\s|\d{3}-)\d{3}-\d{4}$/;
                setErrors(prev=>({
                    ...prev,
                    phoneNumber:phoneRegex.test(value) ? '' : 'Invalid phone value'
                }))


            break;
            default:
            break;
        }

    }
    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        if (!errors.currency && !errors.email && !errors.phoneNumber) {
            alert("All is ok")
        }
        else {
            alert("Please correct the form")
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange}/>

        {errors.email && <p style={{color:'red', fontSize:16}}>{errors.email}</p>}
        </div>
        <div>Currency:
        <input type="number" name="currency" value={formData.currency} onChange={handleChange}/>
        {errors.currency && <p style={{color:'red', fontSize:16}}>{errors.currency}</p>}
        </div>
        <div>
        Phone Number:
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
        {errors.phoneNumber && <p style={{color:'red',fontSize:16}}>{errors.phoneNumber}</p>}
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default RegexValidationForm