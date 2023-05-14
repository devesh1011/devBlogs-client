import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
    const { setEmail, setPassword, email, password, login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        login()
    }

    return (
        <div className="container form">
            <h2 className='text-center form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
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
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
                <div className="inline-block d-flex">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
