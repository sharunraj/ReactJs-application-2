function NumberComponent(){
    let evenNumbers = [2,4,6,8,10];
    let oddNumbers = [1,3,5,7,9];
    let newList = [...evenNumbers,...oddNumbers].sort((a,b) => a-b);
    return (
      <>
        <h2>Even List</h2>
        <ul>
          {evenNumbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
        <h2>Odd List</h2>
        <ul>
          {oddNumbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
        <h2>Combined List</h2>
        <ul>
          {newList.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </>
    );
}


export default NumberComponent;