import { Machine } from "../../react-state-machine-library/fsm/types";

// Define the state of the machine.

export enum Status {
  Idle = "idle",
  Loading = "loading",
  Success = "success",
  Failure = "failure",
}

export enum Event {
  FETCH = "FETCH",
  RESOLVE = "RESOLVE",
  REJECT = "REJECT",
  RETRY = "RETRY",
}

export const initialState: Machine = {
  initialState: Status.Idle,
  states: {
    idle: {
      transitions: {
        [Event.FETCH]: Status.Loading,
      },
    },
    loading: {
      transitions: {
        [Event.RESOLVE]: Status.Success,
        [Event.REJECT]: Status.Failure,
      },
    },
    success: {
      transitions: {},
    },
    failure: {
      transitions: {
        [Event.RETRY]: Status.Loading,
      },
    },
  },
};
