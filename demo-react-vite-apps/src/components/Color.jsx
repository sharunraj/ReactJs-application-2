function Color() {
  let allColors = ["red", "yellow", "green"];
  let mappedColors = allColors.map(((eachColor) => <li>{eachColor}</li>));
  return (
    <>
      <h3>Color Component!</h3>
      <ul>
        {allColors.map((eachColor) => (
          <li key={eachColor}>{eachColor}</li>
        ))}
      </ul>
      <ol>{mappedColors}</ol>
    </>
  );
}
export default Color;
