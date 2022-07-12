import React from "react";
import { connect } from "react-redux";
function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes-{props.numOfCakes}</h2>
      <button onClick={props.cakeReducer}>Buy Cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cakeReducer: () => dispatch(cakeReducer()),
  };
};
export default connect(mapDispatchToProps, mapStateToProps)(CakeContainer);
