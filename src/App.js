import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { remove_features, add_features } from './components/actions/actions';

const App = (props) => {
  

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} remove_features={props.remove_features} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} add_features={props.add_features} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
//mapping everything we have in state and connecting it to props
function mapStateToProps(state) {


  return{
        additionalPrice: state.additionalPrice,
        car: state.car,//price,name,image,and features bundled in car
        additionalFeatures: state.additionalFeatures
  }
}


                      //connecting the store to the (App) component to have access to State
export default connect(mapStateToProps,{remove_features, add_features})(App);
