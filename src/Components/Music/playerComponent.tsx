import React from 'react';

const PlayerComponent = () => {
    return (
        <div>
            <div id="controls">
                <div className="audio-track">
                    <div className="time"></div>
                </div>
                <button className="play">Play</button>
                <button className="pause">Pause</button>
                <button className="prev">&#60;prev</button>
                <button className="next">next&#62;</button>
            </div>
            </div>
    );
};

export default PlayerComponent;