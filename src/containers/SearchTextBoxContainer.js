import { connect } from "react-redux";
import SearchTextBox from "../components/SearchTextBox";
import { setSearchText } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    set: text => dispatch(setSearchText(text))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchTextBox);
