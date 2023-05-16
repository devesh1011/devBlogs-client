import React, { useState, useContext } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from 'react-router-dom';
import AlertContext from "./AlertContext";
const API_BASE_URL = "https://dev-blogs-backend.onrender.com/";

const AuthState = (props) => {
    const navigate = useNavigate();
    const { showAlert } = useContext(AlertContext);

    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const [credentials, setCredentials] = useState({ email: "", password: "", username: ""});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const setAuth = (status) => {
        setIsAuthenticated(status);
    };

    const login = async () => {
        const response = await fetch(`${API_BASE_URL}api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        })

        const json = await response.json();

        if (json.success) {
            setAuth(true)
            localStorage.setItem('username', json.username)
            localStorage.setItem('userId', json.user._id);
            localStorage.setItem('token', json.token)

            navigate("/")
            showAlert("You have been logged in successfully", "success")
        } else {
            showAlert("Invalid Credentials", "danger")
        }
    }

    const signup = async () => {
        const response = await fetch(`${API_BASE_URL}api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: credentials.username, email: credentials.email, password: credentials.password })
        })

        const json = await response.json();
        console.log(json)

        if (json.success) {
            setAuth(true)
            localStorage.setItem('userId', json.user._id);
            localStorage.setItem('token', json.token)
            navigate("/")

            showAlert("Welcome to DevBlogs! Start your new journey by creating nice blogs", "success")
        } else {
            showAlert("User with this email already exists! Try Signing Up with another email")
        }
    }

    const getUser = async () => {
        const response = await fetch(`${API_BASE_URL}api/auth/user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            },
        })

        const data = await response.json();
        setUser(data)
    }

    const logout = () => {
        if (window.confirm("Are you sure you want to log out? ")) {

            setAuth(false)
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            localStorage.removeItem('username')

            setCredentials({ email: "", password: "", username: "" })

            navigate("/login")

            showAlert("You have been logged out successfully", "success")
        }
    }

    const forgotPassword = async () => {
        const response = await fetch(`${API_BASE_URL}api/auth/forgot-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email }),
        });

        if (response.ok) {
            showAlert("An Email has been sent to you to reset your password", "success")
        } else {
            showAlert("An Error Occured Please try again later", "success")
        }
    }

    const resetPassword = async (token) => {
        try {
            const response = await fetch(`${API_BASE_URL}api/auth/reset-password`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password: credentials.password, token }),
            });

            if (response.status === 200) {
                alert('Password reset successfully!');
                navigate("/login")
            }
        } catch (error) {
            setError(error.response.data.message);
            setLoading(false);
        }
    }

    return (    
        <AuthContext.Provider value={{ isAuthenticated, setAuth, login, signup, user, setUser, getUser, logout, forgotPassword, error, setError, loading, setLoading, resetPassword, credentials, setCredentials }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;
