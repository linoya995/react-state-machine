interface Event {
  name: string;
}

interface State {
  transitions: {
    [name: string]: string;
  };
}

interface States {
  [name: string]: State;
}

interface Machine {
  states: States;
  initialState: string;
}

export type { States, Machine, State, Event };
