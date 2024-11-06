import React, { useState } from 'react';

const MyForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submittedData, setSubmittedData] = useState(null);
    const [fullName, setFullName] = useState("");

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const fullName = `${firstName} ${lastName}`;
        setSubmittedData({ firstName, lastName, email, password, fullName });
        setFullName(fullName);
    }

    return (
        <>
            <div>
                <h1>Hello {fullName}</h1>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Enter Your First Name" onChange={handleFirstNameChange} value={firstName} />
                    <input type="text" placeholder="Enter Your Last Name" onChange={handleLastNameChange} value={lastName} />
                    <input type="email" placeholder="Enter Your Email" onChange={handleEmailChange} value={email} />
                    <input type="password" placeholder="Enter Your Password" onChange={handlePasswordChange} value={password} />
                    <button type="submit">Submit</button>
                </form>
                {submittedData && (
                    <div>
                        <h2>Submitted Data:</h2>
                        <p>Full Name: {submittedData.fullName}</p>
                        <p>Email: {submittedData.email}</p>
                        <p>Password: {submittedData.password}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default MyForm;
