
import { useState } from "react";

function Admin() {

    // PRODUCT STATE

    const [productTitle, setProductTitle] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [products, setProducts] = useState([]);

    // COUPON STATE

    const [couponCode, setCouponCode] = useState("");
    const [couponDiscount, setCouponDiscount] = useState("");
    const [coupons, setCoupons] = useState([]);

    // SAVE PRODUCT

    function saveProduct(event) {
        event.preventDefault();

        const newProduct = {
            id: crypto.randomUUID(),
            title: productTitle.trim(),
            category: productCategory.trim(),
            price: Number(productPrice)
        };

        setProducts([...products, newProduct]);

        // CLEAR PRODUCT FORM

        setProductTitle("");
        setProductCategory("");
        setProductPrice("");
    }

    // SAVE COUPON

    function saveCoupon(event) {
        event.preventDefault();

        const newCoupon = {
            id: crypto.randomUUID(),
            code: couponCode.trim(),
            discount: Number(couponDiscount)
        };

        setCoupons([...coupons, newCoupon]);

        // CLEAR COUPON FORM

        setCouponCode("");
        setCouponDiscount("");
    }

    return (
        <main className="container py-5">

            {/* PAGE HEADING */}

            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold">
                    Store Administration
                </h1>

                <p className="lead text-secondary">
                    Manage your store products and coupons.
                </p>
            </div>

            <div className="row g-4 align-items-start">

                {/* PRODUCTS SECTION */}

                <section className="col-lg-6">

                    <div className="bg-white rounded-4 shadow-sm p-4">

                        <h2 className="h4 fw-bold mb-4">
                            Add Products
                        </h2>

                        <form onSubmit={saveProduct}>

                            {/* PRODUCT TITLE */}

                            <div className="mb-3">
                                <label
                                    htmlFor="productTitle"
                                    className="form-label"
                                >
                                    Title
                                </label>

                                <input
                                    id="productTitle"
                                    type="text"
                                    className="form-control"
                                    value={productTitle}
                                    onChange={(event) =>
                                        setProductTitle(event.target.value)
                                    }
                                    required
                                />
                            </div>

                            {/* PRODUCT CATEGORY */}

                            <div className="mb-3">
                                <label
                                    htmlFor="productCategory"
                                    className="form-label"
                                >
                                    Category
                                </label>

                                <input
                                    id="productCategory"
                                    type="text"
                                    className="form-control"
                                    value={productCategory}
                                    onChange={(event) =>
                                        setProductCategory(event.target.value)
                                    }
                                    required
                                />
                            </div>

                            {/* PRODUCT PRICE */}

                            <div className="mb-3">
                                <label
                                    htmlFor="productPrice"
                                    className="form-label"
                                >
                                    Price ($)
                                </label>

                                <input
                                    id="productPrice"
                                    type="number"
                                    className="form-control"
                                    min="0"
                                    step="0.01"
                                    value={productPrice}
                                    onChange={(event) =>
                                        setProductPrice(event.target.value)
                                    }
                                    required
                                />
                            </div>

                            {/* SAVE PRODUCT BUTTON */}

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Save Product
                            </button>

                        </form>

                    </div>

                    {/* PRODUCTS LIST */}

                    <div className="mt-4">

                        <h3 className="h5 fw-bold mb-3">
                            Products List:
                        </h3>

                        {products.length === 0 ? (

                            <p className="text-secondary">
                                No products added yet.
                            </p>

                        ) : (

                            <div className="row g-3">

                                {products.map((product) => (

                                    <div
                                        className="col-sm-6"
                                        key={product.id}
                                    >

                                        <div className="card h-100 shadow-sm">

                                            <div className="card-body">

                                                <span className="badge text-bg-primary mb-2">
                                                    {product.category}
                                                </span>

                                                <h4 className="h5 fw-bold">
                                                    {product.title}
                                                </h4>

                                                <p className="fw-bold text-primary mb-0">
                                                    ${product.price.toFixed(2)}
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        )}

                    </div>

                </section>

                {/* COUPONS SECTION */}

                <section className="col-lg-6">

                    <div className="bg-white rounded-4 shadow-sm p-4">

                        <h2 className="h4 fw-bold mb-4">
                            Add Coupons
                        </h2>

                        <form onSubmit={saveCoupon}>

                            {/* COUPON CODE */}

                            <div className="mb-3">
                                <label
                                    htmlFor="couponCode"
                                    className="form-label"
                                >
                                    Code
                                </label>

                                <input
                                    id="couponCode"
                                    type="text"
                                    className="form-control"
                                    value={couponCode}
                                    onChange={(event) =>
                                        setCouponCode(event.target.value)
                                    }
                                    required
                                />
                            </div>

                            {/* COUPON DISCOUNT */}

                            <div className="mb-3">
                                <label
                                    htmlFor="couponDiscount"
                                    className="form-label"
                                >
                                    Discount (%)
                                </label>

                                <input
                                    id="couponDiscount"
                                    type="number"
                                    className="form-control"
                                    min="1"
                                    max="100"
                                    value={couponDiscount}
                                    onChange={(event) =>
                                        setCouponDiscount(event.target.value)
                                    }
                                    required
                                />
                            </div>

                            {/* SAVE COUPON BUTTON */}

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Save Coupon
                            </button>

                        </form>

                    </div>

                    {/* COUPONS LIST */}

                    <div className="mt-4">

                        <h3 className="h5 fw-bold mb-3">
                            Coupons List:
                        </h3>

                        {coupons.length === 0 ? (

                            <p className="text-secondary">
                                No coupons added yet.
                            </p>

                        ) : (

                            <ul className="list-group">

                                {coupons.map((coupon) => (

                                    <li
                                        key={coupon.id}
                                        className="list-group-item d-flex justify-content-between"
                                    >
                                        <span>{coupon.code}</span>

                                        <strong>
                                            {coupon.discount}% OFF
                                        </strong>
                                    </li>

                                ))}

                            </ul>

                        )}

                    </div>

                </section>

            </div>

        </main>
    );
}

export default Admin;


