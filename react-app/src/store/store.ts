import { combineReducers } from "redux";
import paymentReducer from "./paymentMachine/paymentMachineSlice";
import { configureStore } from "@reduxjs/toolkit";

// Define Reducers
const rootReducer = combineReducers({
  payment: paymentReducer,
});

// Create store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {},
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
