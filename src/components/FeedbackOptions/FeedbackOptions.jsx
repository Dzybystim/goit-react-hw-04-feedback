
import PropTypes from 'prop-types';
import {NavigatorButton, Button} from './FeedbackOptions.styled'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {

return <NavigatorButton>
{options.map(option => {
    return <Button key={option} type="button" name={option} onClick={onLeaveFeedback}>{option}</Button>
})}
</NavigatorButton>
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
  }
