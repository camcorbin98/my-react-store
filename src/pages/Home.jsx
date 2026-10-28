
import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="container py-5 home-page">

            {/* WELCOME SECTION */}

            <div className="text-center mb-5 home-hero">
                <h1 className="display-4 fw-bold">
                    Welcome to My React Store!
                </h1>

                <p className="lead mt-3">
                    Your one-stop shop for everyday essentials,
                    tasty treats, and comfortable merchandise.
                </p>

                <Link
                    to="/catalog"
                    className="btn btn-primary btn-lg mt-3"
                >
                    Shop Our Products
                </Link>
            </div>

            {/* PRODUCT CATEGORIES */}

            <h2 className="text-center mb-4">
                Explore Our Categories
            </h2>

            <div className="row g-4">

                {/* CANDY */}

                <div className="col-md-4">
                    <div className="card h-100 text-center shadow-sm">
                        <div className="card-body">
                            <h3>🍫 Candy</h3>

                            <p>
                                Satisfy your sweet tooth with
                                our delicious treats!
                            </p>
                        </div>
                    </div>
                </div>

                {/* MERCHANDISE */}

                <div className="col-md-4">
                    <div className="card h-100 text-center shadow-sm">
                        <div className="card-body">
                            <h3>👕 Merchandise</h3>

                            <p>
                                Find comfortable and stylish
                                merchandise for everyday wear.
                            </p>
                        </div>
                    </div>
                </div>

                {/* DAIRY */}

                <div className="col-md-4">
                    <div className="card h-100 text-center shadow-sm">
                        <div className="card-body">
                            <h3>🥛 Dairy</h3>

                            <p>
                                Discover fresh dairy products
                                for your daily needs.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </main>
    );
}

export default Home;

