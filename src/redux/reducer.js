
  export const userReducer = (
    state = { userData:   null},
    action,
  ) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, userData: action.payload }
        default : 
        return { ...state }

    }
}
      