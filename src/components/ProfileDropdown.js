import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const ProfileDropdown = () => {
    const { user, getUser, logout } = useContext(AuthContext);
    // const [selectedFile, setSelectedFile] = useState(null);

    // const handleFileChange = (event) => {
    //     setSelectedFile(event.target.files[0]);
    // };

    // const handleUpdateProfilePicture = async () => {
    //     if (selectedFile) {
    //         const formData = new FormData();
    //         formData.append('profilePicture', selectedFile);

    //         await updateProfilePicture(formData);

    //         setSelectedFile("")
    //     } else {
    //         console.error('Please select a file to update your profile picture.');
    //     }
    // };

    useEffect(() => {
        const handleUser = async (e) => {
            if (e) e.preventDefault();

            getUser();
        };

        handleUser();
    }, [getUser]);

    return (
        <div className="dropdown">
            <Link className="btn btn-secondary dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img
                    src={user.profilePicture ? `/backend/${user.profilePicture}` : "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
                    alt="Profile"
                    className="profile-picture" />
            </Link>

            <ul className="dropdown-menu">
                <strong><span className='mx-2'>{user.username}</span></strong>
                <strong><p className='mx-2'>{user.email}</p></strong>

                <hr />
                <button className='btn btn-primary mx-2' onClick={logout}>Logout</button>
            </ul>
        </div>
    )
};

export default ProfileDropdown;
