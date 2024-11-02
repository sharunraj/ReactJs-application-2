let ButtonClick = function () {
  let count = 0;
  function handleClick() {
    console.log("clicked" + " " + ++count);
  }
  return (
    <>
      <div className="container">
        <button className="btn btn-danger" onClick={handleClick}>
          Click Me
        </button>
        <div>{count}</div>
      </div>
    </>
  );
};

export default ButtonClick;
