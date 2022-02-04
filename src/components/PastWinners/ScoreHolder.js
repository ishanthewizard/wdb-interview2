import React from 'react';
import ScoreCard from './ScoreCard';
import Data from './Data.json';
function ScoreHolder() {
    let data = Data.data;

    return <div class= "scoreholder">
        
        <div class= "scoreSubHolder">
            {data.map((ob, idx) => {
                return <ScoreCard
                    key = {idx}
                    contestant= {ob.contestant}
                    winningYear= {ob.winningYear}
                    voteCount= {ob.voteCount}
                    body= {ob.body}
                 />
            })}
            
        </div>


        
    </div>
}

export default ScoreHolder;