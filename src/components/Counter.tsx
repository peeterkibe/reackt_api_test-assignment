import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {decrement, increment, incrementByAmount} from "../features/counter/counterSlice";
import {useState} from "react";

export function Counter() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const [ incrementAmount, setIncrementAmount ] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  return(
    <div>
      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        aria-label="add-amount"
        onClick={() => dispatch(incrementByAmount(incrementValue))}
      >
        add amount
      </button>
      <button
        aria-label="decrement"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="incement"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
}
