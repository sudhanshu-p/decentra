import { createStore } from "redux";
import walletReducer from "./reducers/WalletReducers";
const store = createStore(walletReducer);
export default store;

