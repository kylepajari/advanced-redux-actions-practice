import { connect } from "react-redux";
import ShowModal from "../components/ShowModal";
import { setIsLoading } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    setIsLoading: isLoading => dispatch(setIsLoading(isLoading))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ShowModal);
