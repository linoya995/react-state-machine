import { Machine } from "../../react-state-machine-library/fsm/types";

export const initialState: Machine = {
  initialState: "idle",
  states: {
    idle: {
      transitions: {
        FETCH: "loading",
      },
    },
    loading: {
      transitions: {
        RESOLVE: "success",
        REJECT: "failure",
      },
    },
    success: {
      transitions: {},
    },
    failure: {
      transitions: {
        RETRY: "loading",
      },
    },
  },
};
