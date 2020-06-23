import React from 'react';
//no longer needed to import since we are passing this down as props
//import { remove_features } from './actions/actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.remove_features(props.feature.id)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
