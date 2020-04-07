import React from "react";
import Aux from "../../hoc/AuxWrap";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends React.Component {
  render() {
    //   <div></div>
    return (
      <AuxWrap>
        {/* <div>Burger component</div> */}
        <Burger />
        <div>Build controls</div>
      </AuxWrap>
    );
  }
}

export default BurgerBuilder;
