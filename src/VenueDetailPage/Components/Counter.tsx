import { useState } from "react";

export const Counter: React.FC<{ max: number,index:number,handleCounter:(courtBooked:number,index:number)=>void }> = (props) => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        if (count < props.max) {
          setCount(count + 1);
          props.handleCounter(count + 1, props.index); // Call the callback function
        }
      };

      const handleDecrement = () => {
        if (count > 1) {
          setCount(count - 1);
          props.handleCounter(count - 1, props.index); // Call the callback function
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