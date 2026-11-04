import { useState } from "react";
import "./Admin.css";

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

        setProducts((currentProducts) => [
            ...currentProducts,
            newProduct
        ]);

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

        setCoupons((currentCoupons) => [
            ...currentCoupons,
            newCoupon
        ]);

        // CLEAR COUPON FORM

        setCouponCode("");
        setCouponDiscount("");
    }

    return (
        <main className="admin-page py-5">

            <div className="container">

                {/* PAGE HEADING */}

                <div className="text-center mb-5">

                    <h1 className="admin-title display-5 fw-bold">
                        Store Administration
                    </h1>

                    <p className="admin-text lead mt-3">
                        Manage your store products and coupons.
                    </p>

                </div>

                <div className="row g-4 align-items-start">

                    {/* PRODUCTS SECTION */}

                    <section className="col-lg-6">

                        {/* ADD PRODUCTS FORM */}

                        <div className="admin-panel rounded-4 shadow-sm p-4">

                            <h2 className="admin-heading h4 fw-bold mb-4">
                                Add Products
                            </h2>

                            <form onSubmit={saveProduct}>

                                {/* PRODUCT TITLE */}

                                <div className="mb-3">

                                    <label
                                        htmlFor="productTitle"
                                        className="admin-label form-label"
                                    >
                                        Product Title
                                    </label>

                                    <input
                                        id="productTitle"
                                        type="text"
                                        className="admin-input form-control"
                                        placeholder="Enter product title"
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
                                        className="admin-label form-label"
                                    >
                                        Category
                                    </label>

                                    <input
                                        id="productCategory"
                                        type="text"
                                        className="admin-input form-control"
                                        placeholder="Enter product category"
                                        value={productCategory}
                                        onChange={(event) =>
                                            setProductCategory(event.target.value)
                                        }
                                        required
                                    />

                                </div>

                                {/* PRODUCT PRICE */}

                                <div className="mb-4">

                                    <label
                                        htmlFor="productPrice"
                                        className="admin-label form-label"
                                    >
                                        Price ($)
                                    </label>

                                    <input
                                        id="productPrice"
                                        type="number"
                                        className="admin-input form-control"
                                        placeholder="Enter product price"
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
                                    className="btn admin-button"
                                >
                                    Save Product
                                </button>

                            </form>

                        </div>

                        {/* PRODUCTS LIST */}

                        <div className="admin-panel rounded-4 shadow-sm p-4 mt-4">

                            <h3 className="admin-heading h5 fw-bold mb-3">
                                Products List
                            </h3>

                            {products.length === 0 ? (

                                <p className="admin-text mb-0">
                                    No products added yet.
                                </p>

                            ) : (

                                <div className="row g-3">

                                    {products.map((product) => (

                                        <div
                                            className="col-sm-6"
                                            key={product.id}
                                        >

                                            <div className="admin-product-card rounded-3 p-3 h-100">

                                                {/* CATEGORY */}

                                                <span className="admin-category-badge">
                                                    {product.category}
                                                </span>

                                                {/* TITLE */}

                                                <h4 className="admin-heading h5 fw-bold mt-3">
                                                    {product.title}
                                                </h4>

                                                {/* PRICE */}

                                                <p className="admin-price fw-bold mb-0">
                                                    ${product.price.toFixed(2)}
                                                </p>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            )}

                        </div>

                    </section>

                    {/* COUPONS SECTION */}

                    <section className="col-lg-6">

                        {/* ADD COUPONS FORM */}

                        <div className="admin-panel rounded-4 shadow-sm p-4">

                            <h2 className="admin-heading h4 fw-bold mb-4">
                                Add Coupons
                            </h2>

                            <form onSubmit={saveCoupon}>

                                {/* COUPON CODE */}

                                <div className="mb-3">

                                    <label
                                        htmlFor="couponCode"
                                        className="admin-label form-label"
                                    >
                                        Coupon Code
                                    </label>

                                    <input
                                        id="couponCode"
                                        type="text"
                                        className="admin-input form-control"
                                        placeholder="Enter coupon code"
                                        value={couponCode}
                                        onChange={(event) =>
                                            setCouponCode(event.target.value)
                                        }
                                        required
                                    />

                                </div>

                                {/* COUPON DISCOUNT */}

                                <div className="mb-4">

                                    <label
                                        htmlFor="couponDiscount"
                                        className="admin-label form-label"
                                    >
                                        Discount (%)
                                    </label>

                                    <input
                                        id="couponDiscount"
                                        type="number"
                                        className="admin-input form-control"
                                        placeholder="Enter discount percentage"
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
                                    className="btn admin-button"
                                >
                                    Save Coupon
                                </button>

                            </form>

                        </div>

                        {/* COUPONS LIST */}

                        <div className="admin-panel rounded-4 shadow-sm p-4 mt-4">

                            <h3 className="admin-heading h5 fw-bold mb-3">
                                Coupons List
                            </h3>

                            {coupons.length === 0 ? (

                                <p className="admin-text mb-0">
                                    No coupons added yet.
                                </p>

                            ) : (

                                <ul className="admin-coupon-list list-group">

                                    {coupons.map((coupon) => (

                                        <li
                                            key={coupon.id}
                                            className="admin-coupon-item list-group-item d-flex justify-content-between align-items-center gap-3"
                                        >

                                            <span className="fw-semibold">
                                                {coupon.code}
                                            </span>

                                            <strong className="admin-discount">
                                                {coupon.discount}% OFF
                                            </strong>

                                        </li>

                                    ))}

                                </ul>

                            )}

                        </div>

                    </section>

                </div>

            </div>

        </main>
    );
}

export default Admin;


