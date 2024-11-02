import DisplayProps from "./DisplayProps";
function Display() {
    let name = "Mark";
    let allColors = ["red", "blue", "green"];
    return (
        <>
        <h3>Display Component</h3>
        <p>Hello {name}!</p>
        <p>Colors: {allColors}</p>
        <DisplayProps name={name} greeting="hi" emotion="How are you" />
        </>
    )

}

export default Display;
