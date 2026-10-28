
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main className="container py-5">

            <div className="row justify-content-center">

                <div className="col-md-8 col-lg-7">

                    <div className="bg-white rounded-4 shadow-sm text-center p-4 p-md-5">

                        {/* ERROR NUMBER */}

                        <h1
                            className="display-1 fw-bold mb-3"
                            style={{ color: "var(--store-blue)" }}
                        >
                            404
                        </h1>

                        {/* ERROR HEADING */}

                        <h2 className="h3 fw-bold mb-3">
                            Oops! Page Not Found
                        </h2>

                        {/* ERROR MESSAGE */}

                        <p className="lead text-secondary mb-4">
                            Looks like you've taken a wrong turn!
                        </p>

                        <p className="text-secondary mb-4">
                            The page you're looking for doesn't exist
                            or may have been moved.
                            Don't worry, we'll help you get
                            back on track.
                        </p>

                        {/* NAVIGATION BUTTONS */}

                        <div className="d-flex justify-content-center flex-wrap gap-3">

                            <Link
                                to="/"
                                className="btn btn-primary btn-lg"
                            >
                                Return Home
                            </Link>

                            <Link
                                to="/catalog"
                                className="btn btn-outline-primary btn-lg"
                            >
                                Browse Catalog
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
}

export default NotFound;
