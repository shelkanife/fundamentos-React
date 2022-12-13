const Stats = ({type,stats}) => {
    return(
        <div id="data-screen">
                <p>Type: <span id="type"> {type.join(" ")}</span></p>
                <div id="stats-container">
                    <div className="porcentage-bar">
                        <div className="bar"><div className="color-bar" id="ps" style={{height:`${stats[0] * 100 / 200}%`}}></div></div>
                        <p>PS</p>
                    </div>
                    <div className="porcentage-bar">
                        <div className="bar"><div className="color-bar" id="atk" style={{height:`${stats[1] * 100 / 200}%`}}></div></div>
                        <p>ATK</p>
                    </div>
                    <div className="porcentage-bar">
                        <div className="bar"><div className="color-bar" id="def" style={{height:`${stats[2] * 100 / 200}%`}}></div></div>
                        <p>DEF</p>
                    </div>
                    <div className="porcentage-bar">
                        <div className="bar"><div className="color-bar" id="spatk" style={{height:`${stats[3] * 100 / 200}%`}}></div></div>
                        <p>SP.ATK</p>
                    </div>
                    <div className="porcentage-bar">
                        <div className="bar"><div className="color-bar" id="spdef" style={{height:`${stats[4] * 100 / 200}%`}}></div></div>
                        <p>SP.DEF</p>
                    </div>
                    <div className="porcentage-bar">
                        <div className="bar"><div className="color-bar" id="speed" style={{height:`${stats[5] * 100 / 200}%`}}></div></div>
                        <p>SPEED</p>
                    </div>  
                </div>
            </div>
    )
}
export default Stats