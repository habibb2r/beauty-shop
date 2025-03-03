import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Redux/Features/counterSlice";


const ETC = () => {
    const dispatch = useDispatch()
    const {count} = useSelector(state=>state.counter)

    console.log(count)
    const handleIncrement = (amount)=>{
        dispatch(increment(amount))
    }
    const handleDecrement = ()=>{
        dispatch(decrement())
    }
    return (
        <div className="pt-10 text-center">
            <button onClick={()=>handleIncrement(5)}>Increment 5</button>
            <button onClick={()=>handleIncrement(1)}>Increment 5</button>
            <h1>{count}</h1>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default ETC;