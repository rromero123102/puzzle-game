import React, {useState} from 'react';
import DialogueHandler from '../../components/dialogue';
const script = [
    {
        character:'finn',
        emotion:'talk',
        text:"I can't beleive magic man turned you into a pokemon.",
        side:true
    },
    {
        character:'jake',
        emotion:'talk',
        text:"I can't beleive magic man didn't turn you into a pokemon.",
        side:false
    },
    {
        character:'bmo',
        emotion:'talk',
        text:"I know that you guys are mad and all but we have no time to waste",
        side:true
    },
    {
        character:'finn',
        emotion:'talk',
        text:"He's right Jake, lets take a shortcut through these fields",
        side:true
    }
]
const OutsideHouse = () =>{
    const [lineCount, setLineCount] = useState(0);
    return(
        <div className="outside-house">
            <DialogueHandler
                script={script}
                object={script[lineCount]}
                lineCount={lineCount}
                setLineCount={setLineCount}
                linkTo={"/chapter2part2FieldFightBefore"}
            />
        </div>
    )
}

export default OutsideHouse;