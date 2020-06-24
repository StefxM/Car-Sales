export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  }
                        //assigning initialstate to state
export const carReducer = (state = initialState,action) => {
    switch(action.type) {
        case "ADD_FEATURES":
            return {
                ...state, 
                car:{...state.car, 
                    features:[...state.car.features, 
                        state.additionalFeatures.filter(feature => 
                feature.id === action.payload)[0]]},
                //when user clicks on feature and inserts it into feature array and removes said feature from additionfeatures and returns a new array with feature removed
                additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.payload),
                                //adding the additional price to the additional feature price we picked from the filter
                additionalPrice: state.additionalPrice += state.additionalFeatures.filter(feature =>
                    feature.id === action.payload)[0].price
                    
            }
        case "REMOVE_FEATURES":
            return {
                ...state,
                //a new array for these features to go back to
                additionalFeatures: [...state.additionalFeatures, state.car.features.filter(feature => feature.id === action.payload)[0]],
                additionalPrice: state.additionalPrice -= state.car.features.filter(feature => feature.id === action.payload)[0].price,
                car:{...state.car, //features going back to where they came from, removed array [] to avoid a array inside an array
                    features: state.car.features.filter(feature => 
                feature.id !== action.payload)}
            }
        default: 
            return state;
        }
}

