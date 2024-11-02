
function DisplayProps(props){
    let {name, greeting, emotion} = props;
    return(
        <>
            <p>{greeting} {name}, {emotion}</p>
        </>
    )
}
export default DisplayProps;