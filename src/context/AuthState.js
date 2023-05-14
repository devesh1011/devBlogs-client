import React, { useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from 'react-router-dom';
import AlertContext from "./AlertContext";
const API_BASE_URL = "https://dev-blogs-backend.onrender.com/";

const AuthState = (props) => {
    const navigate = useNavigate();
    const { showAlert } = useContext(AlertContext);

    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    const setAuth = (status) => {
        setIsAuthenticated(status);
    };

    const checkTokenValidity = async (token) => {
        try {
            const response = await fetch(`${API_BASE_URL}api/auth/validate-token`, {
                headers: { Authorization: token }
            });
            return response.status === 200;
        } catch (err) {
            return false;
        }
    };

    const login = async () => {
        const response = await fetch(`${API_BASE_URL}api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })

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
            body: JSON.stringify({ username, email, password })
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

            setEmail("")
            setPassword("")

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
            body: JSON.stringify({ email }),
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
                body: JSON.stringify({ password, token }),
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

    const updateProfilePicture = async (formData) => {
        try {
            const response = await fetch(`${API_BASE_URL}api/auth/updateProfilePicture`, {
                method: 'POST',
                headers: {
                    "Authorization": localStorage.getItem('token'),
                },
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setUser({ ...user, profilePicture: data.filePath });
            } else {
                // Handle the error, e.g., show an error message or alert
                console.error('Error uploading profile picture:', data.message);
            }
        } catch (error) {
            console.error('Error uploading profile picture:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuth, setEmail, login, setPassword, email, password, username, setUsername, signup, user, setUser, getUser, logout, forgotPassword, selectedFile, setSelectedFile, updateProfilePicture, confirmPassword, setConfirmPassword, error, setError, loading, setLoading, resetPassword, checkTokenValidity }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;
