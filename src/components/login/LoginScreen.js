import React from 'react'

export const LoginScreen = ( { history }) => {

    const handleLogin = () => {
        // history.push("/"); Save the page history
        history.replace("/"); // Don't save the page history
    };

    return (
        <div className="container my-5">
            <h1>Login Screen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick = { handleLogin }
            >
                Click!
            </button>
        </div>
    )
}
