import { useState } from "react";
export default function Counter() {
  let [counter, setCounter] = useState(0);
  function handleIncrement() {
    setCounter(counter + 1);
  }
  function handleDecrement(){
    if(counter > 0 && counter!=-1){
         setCounter((counter)=>counter - 1);
         setCounter((counter) => counter - 1);
         setCounter((counter) => counter - 1);
        }
  }

  return (
    <div className="container m-5 p-5">
      <div className="card text-center">
        <div className="card-header">
          <h2>Counter</h2>
        </div>
        <h2>
          <div className="card-body">
            <button className="btn btn-danger" onClick={handleDecrement}>
              -
            </button>
            <span className="mx-5 badge bg-success">{counter}</span>
            <button className="btn btn-warning" onClick={handleIncrement}>
              +
            </button>
          </div>
        </h2>
      </div>
    </div>
  );
}
