

export const Counter: React.FC<{ max: number,
  slot: {
    time: string;
    courtAvailable: number;
    courtBooked: number;
},
  index:number,
  handleCounter:(courtBooked:number,index:number)=>void }> = (props) => {
    // const [count, setCount] = useState(1);

    const handleIncrement = () => {
        if (props.slot.courtBooked < props.max) {
         // setCount(count + 1);
          props.handleCounter(props.slot.courtBooked + 1, props.index); // Call the callback function
        }
      };

      const handleDecrement = () => {
        if (props.slot.courtBooked > 1) {
         // setCount(count - 1);
          props.handleCounter(props.slot.courtBooked - 1, props.index); // Call the callback function
        }
      };

    return (
        <div className="d-flex align-items-center">
            <button onClick={handleDecrement} className="btn btn-dark rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: '30px', height: '30px', padding: '0' }}>-</button>

            <span className="mx-2 d-flex justify-content-center" style={{ width: '30px' }}>{props.slot.courtBooked}</span>


            <button onClick={handleIncrement} className="btn btn-dark rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: '30px', height: '30px', padding: '0' }}>+</button>
                
        </div>



    );
}