const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSFER':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case 'SUBSTRACT_FROM_BALANCE':
      return {
        ...state,
        balance: state.balance.map((obj) => {
          const { fromAccount, amount } = action.payload;
          const { account, balance } = obj;
          if (account === fromAccount) {
            const result = balance.value - amount.value;
            balance.value = Math.round(result * 100) / 100;
            return obj;
          }
          return obj;
        }),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
