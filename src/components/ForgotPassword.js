import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';

const ForgotPassword = () => {
    const { setEmail, email, forgotPassword } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        forgotPassword();

        setEmail("")
    };

    return (
        <div className="container">
            <h2 className="text-center">Forgot Password</h2>
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        width={"80"}
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Send Reset Email</button>
            </form>
        </div>
    )
}

export default ForgotPassword
