const AditionalInfo = ({height,weight}) => {
    return(
        <div id="rectangles-container">
                <div className="rectangle">
                    <p>Altura:<span id="height"> {height}</span></p>
                </div>
                <div className="rectangle">
                    <p>Peso:<span id="weight"> {weight}</span></p>
                </div>
            </div>
    )
}
export default AditionalInfo