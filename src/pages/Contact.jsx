
import { useState } from "react";

function Contact() {

    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <main className="container py-5">

            {/* PAGE HEADING */}

            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold">
                    Contact Us
                </h1>

                <p className="lead text-secondary">
                    Have a question about My React Store?
                    We'd love to hear from you!
                </p>
            </div>

            <div className="row g-4 justify-content-center">

                {/* CONTACT INFORMATION */}

                <div className="col-md-4">
                    <div className="bg-white rounded-4 shadow-sm p-4 h-100">

                        <h2 className="h4 fw-bold mb-4">
                            Get in Touch
                        </h2>

                        <p className="text-secondary">
                            My React Store is a web development
                            project created using React.
                        </p>

                        <hr />

                        <h3 className="h6 fw-bold">
                            Project Creator
                        </h3>

                        <p className="text-secondary">
                            Cameron Corbin
                        </p>

                        <h3 className="h6 fw-bold">
                            Established
                        </h3>

                        <p className="text-secondary">
                            2026
                        </p>

                        <h3 className="h6 fw-bold">
                            Course Information
                        </h3>

                        <p className="text-secondary">
                            Cohort #71 | Course #109
                        </p>

                    </div>
                </div>

                {/* CONTACT FORM */}

                <div className="col-md-8">
                    <div className="bg-white rounded-4 shadow-sm p-4 p-md-5 h-100">

                        <h2 className="h4 fw-bold mb-3">
                            Send a Message
                        </h2>

                        <p className="text-secondary small">
                            This is a demonstration form.
                            Messages are not actually sent.
                        </p>

                        <form onSubmit={handleSubmit}>

                            {/* NAME */}

                            <div className="mb-3">
                                <label
                                    htmlFor="contactName"
                                    className="form-label"
                                >
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    id="contactName"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            {/* EMAIL */}

                            <div className="mb-3">
                                <label
                                    htmlFor="contactEmail"
                                    className="form-label"
                                >
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    id="contactEmail"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* MESSAGE */}

                            <div className="mb-4">
                                <label
                                    htmlFor="contactMessage"
                                    className="form-label"
                                >
                                    Your Message
                                </label>

                                <textarea
                                    className="form-control"
                                    id="contactMessage"
                                    rows="5"
                                    placeholder="Write your message here..."
                                    required
                                />
                            </div>

                            {/* SUBMIT BUTTON */}

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Submit Demo Form
                            </button>

                        </form>

                        {/* FORM FEEDBACK */}

                        {submitted && (
                            <div
                                className="alert alert-info mt-4"
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

        </main>
    );
}

export default Contact;
