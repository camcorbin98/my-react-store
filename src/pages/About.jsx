import { Link } from "react-router-dom";
import "./About.css";

function About() {
    return (
        <main className="about-page py-5">

            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-lg-10">

                        <div className="about-card rounded-4 shadow-sm p-4 p-md-5">

                            {/* PAGE HEADING */}

                            <div className="text-center mb-5">

                                <h1 className="about-title display-5 fw-bold">
                                    About My React Store
                                </h1>

                                <p className="about-text lead mt-3">
                                    Welcome to My React Store!
                                    We're dedicated to making shopping
                                    simple, convenient, and enjoyable.
                                </p>

                            </div>

                            {/* ABOUT CONTENT */}

                            <div className="row g-4">

                                {/* OUR STORY */}

                                <div className="col-md-7">

                                    <h2 className="about-heading h4 fw-bold mb-3">
                                        Our Story
                                    </h2>

                                    <p className="about-text">
                                        My React Store was created in 2026
                                        as part of a web development project.
                                    </p>

                                    <p className="about-text">
                                        Our goal is to provide a simple
                                        shopping experience featuring
                                        candy, merchandise, and dairy products.
                                    </p>

                                    <p className="about-text">
                                        This website demonstrates React
                                        components, routing, product filtering,
                                        interactive quantity selection,
                                        and shopping cart functionality.
                                    </p>

                                </div>

                                {/* PROJECT INFORMATION */}

                                <div className="col-md-5">

                                    <div className="about-info-box rounded-3 p-4 h-100">

                                        <h2 className="about-heading h5 fw-bold mb-4">
                                            Project Information
                                        </h2>

                                        <p>
                                            <strong>Established:</strong> 2026
                                        </p>

                                        <p>
                                            <strong>Cohort:</strong> #71
                                        </p>

                                        <p>
                                            <strong>Course:</strong> #109
                                        </p>

                                        <p>
                                            <strong>Technology:</strong> React
                                        </p>

                                        <p className="mb-0">
                                            <strong>Project:</strong> Online Store
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* CATALOG BUTTON */}

                            <div className="about-footer text-center mt-5 pt-4">

                                <h3 className="about-heading h5 fw-bold">
                                    Ready to explore our products?
                                </h3>

                                <p className="about-text">
                                    Check out everything our store has to offer!
                                </p>

                                <Link
                                    to="/catalog"
                                    className="btn about-button btn-lg mt-2"
                                >
                                    Browse Our Catalog
                                </Link>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </main>
    );
}

export default About;




