import PropTypes from 'prop-types';
import { But } from './Button.styled';

export const Button = ({ onClicked, text, disabled }) => {
  return (
    <But type="button" onClick={onClicked} disabled={disabled}>
      {text}
    </But>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};
