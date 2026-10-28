
import { Link } from "react-router-dom";

function About() {
    return (
        <main className="container py-5">

            <div className="row justify-content-center">
                <div className="col-lg-10">

                    <div className="bg-white rounded-4 shadow-sm p-4 p-md-5">

                        {/* PAGE HEADING */}

                        <div className="text-center mb-5">
                            <h1 className="display-5 fw-bold">
                                About My React Store
                            </h1>

                            <p className="lead text-secondary mt-3">
                                Welcome to My React Store!
                                We're dedicated to making shopping
                                simple, convenient, and enjoyable.
                            </p>
                        </div>

                        {/* ABOUT CONTENT */}

                        <div className="row g-4">

                            <div className="col-md-7">
                                <h2 className="h4 fw-bold mb-3">
                                    Our Story
                                </h2>

                                <p className="text-secondary">
                                    My React Store was created in 2026
                                    as part of a web development project.
                                </p>

                                <p className="text-secondary">
                                    Our goal is to provide a simple
                                    shopping experience featuring
                                    candy, merchandise, and dairy products.
                                </p>

                                <p className="text-secondary">
                                    This website demonstrates React
                                    components, routing, product filtering,
                                    and interactive quantity selection.
                                </p>
                            </div>

                            {/* PROJECT INFORMATION */}

                            <div className="col-md-5">
                                <div className="bg-light rounded-3 p-4 h-100">

                                    <h2 className="h5 fw-bold mb-3">
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

                                    <p className="mb-0">
                                        <strong>Technology:</strong> React
                                    </p>

                                </div>
                            </div>

                        </div>

                        {/* CATALOG BUTTON */}

                        <div className="text-center mt-5 pt-4 border-top">

                            <h3 className="h5 fw-bold">
                                Ready to explore our products?
                            </h3>

                            <p className="text-secondary">
                                Check out everything our store has to offer!
                            </p>

                            <Link
                                to="/catalog"
                                className="btn btn-primary btn-lg mt-2"
                            >
                                Browse Our Catalog
                            </Link>

                        </div>

                    </div>

                </div>
            </div>

        </main>
    );
}

export default About;




