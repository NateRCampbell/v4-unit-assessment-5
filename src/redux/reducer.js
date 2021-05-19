const initialState = {
   username: null,
   profilePic: null,
};

const UPDATE_USER = "UPDATE_USER";
const LOGOUT_USER = "LOGOUT_USER";

export const updateUser = () => {
   return {
      type: UPDATE_USER,
      payload: data,
      //error: data is not defined
      //instructions: The payload should be the object sent in as a parameter,
      //which should have username and profile picture properties.
   };
};

export const logout = () => {
   return {
      type: LOGOUT_USER,
   };
};

export default function reducer(state = initialState, action) {
   switch (action.type) {
      case UPDATE_USER:
         return { ...state, ...action.payload };
      case LOGOUT_USER:
         return { ...state, username: null, profilePic: null };
      default:
         return state;
   }
}
