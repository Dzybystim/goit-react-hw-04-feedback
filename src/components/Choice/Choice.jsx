import React, { useState } from "react";
import {Statistics} from 'components/Statistics/Statistics'
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions'
import {Section} from 'components/Section/Section'
import {Notification} from 'components/Notification/Notification'

export default function Choice() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    let [noСhoiceMade, setNoСhoiceMade] = useState(false);

    const options = ['good', 'neutral', 'bad']

    
    const buttonChoice = (event) => {
        setNoСhoiceMade(noСhoiceMade=true)
        
        switch(event.target.name) {
            case 'good':
                setGood(good+1);
                break;
            case 'neutral':
                setNeutral(neutral+1);
                break;
            case 'bad':
                setBad(bad+1);
                break;
            default: console.log('Ошибка в buttonChoice')

        }
    }
    
    let message

    noСhoiceMade
    ?
    message=<Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        options={options} />
    :
    message=<Notification 
        message={"There is no feedback"}/>
    

    return (
        <div>
            <Section title={"Please leave feedback"}>
            <FeedbackOptions 
            options={options}
            onLeaveFeedback={buttonChoice}
            />
            </Section>
            <Section title={"Statistics"} >
            {message}
           </Section>
        </div>
    )
}