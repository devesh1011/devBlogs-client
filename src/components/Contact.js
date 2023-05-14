import React, { useState, useContext } from 'react'
import AlertContext from '../context/AlertContext';

const Contact = () => {
    const host = "http://localhost:5000/"

    const { showAlert } = useContext(AlertContext);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        setFormData({
            name: '',
            email: '',
            message: '',
        })

        if (response.ok) {
            showAlert("Your message has been sent", "success")
        } else {
            showAlert("Facing error in sending message now! Please try again later", "success")
        }
    };

    return (
        <div>
            <div className="container singleblog">
                <div className="row">
                    <div className="col-md-8 mx-auto">

                        <article className="card mb-4">
                            <h1 className="card-title text-center">Contact Us</h1>
                            <div className="card-body singleblog-text">

                                <p>
                                    At DevBlogs, we love hearing from our readers and value your feedback, ideas, and suggestions. Whether you have a question, a topic you'd like us to cover, or simply want to share your thoughts, we're here to listen and respond. <br /><br />

                                    To get in touch with our team, please fill out the contact form below, and we'll get back to you as soon as possible. Alternatively, you can also reach out to us via email or social media.
                                    <br />

                                </p>

                                <form className="contact-form" onSubmit={handleSubmit}>
                                    {/* ... */}
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Name"
                                            required
                                        />
                                    </div>
                                    {/* ... */}
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email address"
                                            required
                                        />
                                    </div>
                                    {/* ... */}
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            placeholder="Message"
                                            required
                                        ></textarea>
                                    </div>
                                    {/* ... */}
                                    <button type="submit" className="btn btn-dark">
                                        Send Message
                                    </button>
                                </form>
                                <p>
                                    Email: devesh.22scse1100004@galgotiasuniversity.edu.in<br /><br />

                                    For general inquiries or feedback, feel free to send us an email at deveshk237@gmail.com. If you're interested in submitting a guest post or joining our team of writers, please include a brief introduction, writing samples, and the topics you're passionate about in your email.
                                    <br /><br />
                                    Social Media:
                                    <br /><br />
                                    
                                    Stay connected with DevBlogs by following and messaging us on our social media channels:
                                    <br /><br />
                                    Facebook: [Facebook Page URL] <br />
                                    Twitter: [@YourBlogTwitterHandle] <br />
                                    Instagram: [@YourBlogInstagramHandle] <br />
                                    LinkedIn: [LinkedIn Page URL] <br /> <br />
                                    We appreciate your interest in DevBlogs and look forward to connecting with you. Our team is dedicated to providing a welcoming and inclusive community for everyone, and we're excited to hear from you.
                                    <br /><br />
                                    Thank you for reaching out, and we'll be in touch soon!
                                </p>

                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
