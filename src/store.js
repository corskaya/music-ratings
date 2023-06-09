import { configureStore } from "@reduxjs/toolkit";
import loginReducer, { setLoginStatus } from "./pages/login/slice";
import registerReducer from "./pages/register/slice";
import artistsReducer from "./pages/artists/slice";
import artistReducer from "./pages/artist/slice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    artists: artistsReducer,
    artist: artistReducer,
  },
});

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

if (token && user) {
  store.dispatch(setLoginStatus({ user, token }));
}

export default store;
