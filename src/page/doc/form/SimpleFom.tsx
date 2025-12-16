import React, { useState } from 'react';

type Users = {
    username: string,
    email: string
}

type newErrors = {
    username: string
}

function SimpleForm() {

    const [formData, setFormData] = useState<Users>({
        username: '',
        email: ''
    })
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))

    }

    const validateForm = () => {

        let newErrors:newErrors = { username: '' };
        
        if ( !formData.username ) newErrors.username = "Username is required";
        if ( !formData.email ) {

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>

                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default SimpleForm