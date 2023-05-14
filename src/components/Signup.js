import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Signup = () => {

    const { setEmail, setPassword, email, password, signup, username, setUsername } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        signup();
    }

    return (
        <div className="container form">
            <h2 className='text-center form-title'>Signup</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="no-username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="no-password"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;
