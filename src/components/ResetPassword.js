import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const ResetPasswordPage = () => {
    const { password, setPassword, confirmPassword, setConfirmPassword, error, loading, setLoading, resetPassword } = useContext(AuthContext)

    const location = useLocation();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const token = new URLSearchParams(location.search).get('token');

        resetPassword(token)

    };

    return (
        <div className="container form">
            <h2 className='form-title text-center'>Reset Password</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="form-group">
                    <label htmlFor="password">New Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="form-control"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                    />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Loading...' : 'Reset Password'}
                </button>
            </form>
        </div>
    );
};

export default ResetPasswordPage;
