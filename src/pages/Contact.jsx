import { useState } from "react";
import "./Contact.css";

function Contact() {

    // FORM SUBMISSION STATE

    const [submitted, setSubmitted] = useState(false);

    // HANDLE FORM SUBMISSION

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <main className="contact-page py-5">

            <div className="container">

                {/* PAGE HEADING */}

                <div className="text-center mb-5">

                    <h1 className="contact-title display-5 fw-bold">
                        Contact Us
                    </h1>

                    <p className="contact-text lead mt-3">
                        Have a question about My React Store?
                        We'd love to hear from you!
                    </p>

                </div>

                <div className="row g-4 justify-content-center">

                    {/* CONTACT INFORMATION */}

                    <div className="col-md-4">

                        <div className="contact-card rounded-4 shadow-sm p-4 h-100">

                            <h2 className="contact-heading h4 fw-bold mb-4">
                                Get in Touch
                            </h2>

                            <p className="contact-text">
                                My React Store is a web development
                                project created using React.
                            </p>

                            <hr className="contact-divider" />

                            {/* PROJECT CREATOR */}

                            <h3 className="contact-heading h6 fw-bold">
                                Project Creator
                            </h3>

                            <p className="contact-text">
                                Cameron Corbin
                            </p>

                            {/* ESTABLISHED */}

                            <h3 className="contact-heading h6 fw-bold">
                                Established
                            </h3>

                            <p className="contact-text">
                                2026
                            </p>

                            {/* COURSE INFORMATION */}

                            <h3 className="contact-heading h6 fw-bold">
                                Course Information
                            </h3>

                            <p className="contact-text">
                                Cohort #71 | Course #109
                            </p>

                        </div>

                    </div>

                    {/* CONTACT FORM */}

                    <div className="col-md-8">

                        <div className="contact-card rounded-4 shadow-sm p-4 p-md-5 h-100">

                            <h2 className="contact-heading h4 fw-bold mb-3">
                                Send a Message
                            </h2>

                            <p className="contact-text small mb-4">
                                This is a demonstration form.
                                Messages are not actually sent.
                            </p>

                            <form onSubmit={handleSubmit}>

                                {/* NAME */}

                                <div className="mb-3">

                                    <label
                                        htmlFor="contactName"
                                        className="contact-label form-label"
                                    >
                                        Your Name
                                    </label>

                                    <input
                                        type="text"
                                        className="contact-input form-control"
                                        id="contactName"
                                        placeholder="Enter your name"
                                        autoComplete="name"
                                        required
                                    />

                                </div>

                                {/* EMAIL */}

                                <div className="mb-3">

                                    <label
                                        htmlFor="contactEmail"
                                        className="contact-label form-label"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className="contact-input form-control"
                                        id="contactEmail"
                                        placeholder="Enter your email"
                                        autoComplete="email"
                                        required
                                    />

                                </div>

                                {/* MESSAGE */}

                                <div className="mb-4">

                                    <label
                                        htmlFor="contactMessage"
                                        className="contact-label form-label"
                                    >
                                        Your Message
                                    </label>

                                    <textarea
                                        className="contact-input form-control"
                                        id="contactMessage"
                                        rows={5}
                                        placeholder="Write your message here..."
                                        required
                                    />

                                </div>

                                {/* SUBMIT BUTTON */}

                                <button
                                    type="submit"
                                    className="btn contact-button"
                                >
                                    Submit Demo Form
                                </button>

                            </form>

                            {/* FORM FEEDBACK */}

                            {submitted && (

                                <div
                                    className="contact-alert rounded-3 p-3 mt-4"
                                    role="status"
                                >
                                    Thank you for testing the form!
                                    This is a demonstration, so no
                                    message was sent.
                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
}

export default Contact;
