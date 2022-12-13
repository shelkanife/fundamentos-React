const Screen = ({src}) => {
    return(
        <div id="screen-container">
                <div id="screen-ligths">
                    <div className="screen-circle"></div>
                    <div className="screen-circle"></div>
                </div>
                <img id="img" src={src}/>
                <div id="screen-idicators">
                    <div id="light"></div>
                    <div id="sound-container">
                        <div className="sound"></div>
                        <div className="sound"></div>
                        <div className="sound"></div>
                    </div>
                </div>
            </div>
    )
}
export default Screen