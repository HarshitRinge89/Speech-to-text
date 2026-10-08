import './Content.css'
export default function Content(){
    return(
        <div className="main-container">
            <div className="welcome"><h3>Welcome User</h3></div>
            <div className="bottom">
                <div className="colone">
                    <div className="record">
                        <h2>Record or Upload Audio</h2>
                        <div className='record-container'>
                            <button className='record-audio'></button>
                        </div>
                    </div>
                    <div className="doc-opt">
                        Document Options
                    </div>
                </div>
                {/* <div className="coltwo">
                    <div className="transcript">
                        Transcript
                    </div>
                </div>
                <div className="colthree">
                </div> */}
            </div>
        </div>
    );
}