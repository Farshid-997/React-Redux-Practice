const initialCakeState = {
  numOfCakes: 10,
  cakePrice: 100,
};

const initialIcecreamState = {
  numOfIceCream: 10,
  IceCreamPrice: 100,
};

export const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

export const IceCreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_IceCream:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };

    default:
      return state;
  }
};
