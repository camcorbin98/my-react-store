
import "./QuantityPicker.css";

function QuantityPicker({ quantity, onQuantityChange }) {

    function handleDecrease() {
        if (quantity > 1) {
            let nextValue = quantity - 1;
            onQuantityChange(nextValue);
        }
    }

    function handleIncrease() {
        let nextValue = quantity + 1;
        onQuantityChange(nextValue);
    }

    return (
        <div className="quantity-picker">

            <button
                className="btn-minus"
                onClick={handleDecrease}
                disabled={quantity === 1}
            >
                -
            </button>

            <label className="label-pty">
                {quantity}
            </label>

            <button
                className="btn-plus"
                onClick={handleIncrease}
            >
                +
            </button>

        </div>
    );
}

export default QuantityPicker;

