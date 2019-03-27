import { connect } from "react-redux";
import ChangeTemperature from "../components/ChangeTemperature";
import { setTemp } from "../actions";

function mapStateToProps(state) {
  return {
    temp: state.currentTemp
  };
}

const mapDispatchToProps = dispatch => {
  return {
    set: temp => dispatch(setTemp(temp))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeTemperature);
