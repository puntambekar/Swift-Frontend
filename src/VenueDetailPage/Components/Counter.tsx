import { useState } from "react";

export const Counter: React.FC<{ max: number }> = (props) => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        if (count < props.max) {
            setCount(count + 1);

        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="d-flex align-items-center">
            <button onClick={handleDecrement} className="btn btn-dark rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: '30px', height: '30px', padding: '0' }}>-</button>

            <span className="mx-2 d-flex justify-content-center" style={{ width: '30px' }}>{count}</span>


            <button onClick={handleIncrement} className="btn btn-dark rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: '30px', height: '30px', padding: '0' }}>+</button>
                
        </div>



    );
}