
export const Statistics = ({good, neutral, bad, options}) => {

    const optionsValues=[good, neutral, bad]

    
    const  countTotalFeedback = (optionsValues) => {
        return optionsValues.reduce((acc, number) => {
            return acc+number;
            }, 0);
        }

    const countPositiveFeedbackPercentage = (optionsValues) => {
            if(good){
            let total = countTotalFeedback(optionsValues)
            return Math.round((good/total)*100)
          }
            return 0
          }

    const dataButton = (option) => {
        let data
        switch(option){
        case 'good':
            data = good;
            break;
        case 'neutral':
            data = neutral;
            break;
        case 'bad':
            data = bad;
            break;
        default: console.log('что то сломалось в dataButton')
            }
            return data
    }


    return <div>
    {options.map(option => {
        return <p key={option}>{option}: {dataButton(option)}</p>
    })}
     <p>total: {countTotalFeedback(optionsValues)}</p>
     <p>positive feedback: {countPositiveFeedbackPercentage(optionsValues)} %</p>
     </div>
}


