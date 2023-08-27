import { States, State, Machine, Event } from "./types";

/**
 * A finite state machine (FSM) class that
 * manages state transitions based on events.
 */
class Fsm {
  private currentState: string;
  private states: States;

  constructor(machine: Machine) {
    this.currentState = machine.initialState;
    this.states = machine.states;
  }

  /**
   * Perform a transition based on the provided event.
   * @param event - The event triggering the transition.
   */
  onEvent = (event: Event): void => {
    const current: State = this.states[this.currentState];

    if (!current) {
      throw new Error(`State definition not found for ${this.currentState}`);
    }

    if (current.transitions) {
      const allowedTransitions = Object.keys(current.transitions);

      if (allowedTransitions.includes(event.name)) {
        const nextState: string = current.transitions[event.name];
        console.log(`Moving from ${this.currentState} to ${nextState}`);
        this.currentState = nextState;

        // error
      } else {
        throw new Error(
          `Transition from ${this.currentState} to ${event.name} not allowed`
        );
      }

      // error
    } else throw new Error(`Final state`);
  };

  /**
   * Return true if current state matches the given state.
   * @param - The state to compare.
   */
  is = (state: string): boolean => {
    return this.currentState === state;
  };

  /**
   * Return true if current state is final.
   */
  inFinalState = (): boolean => {
    const current = this.states[this.currentState];
    return (
      Object.keys(current.transitions).length === 0 ||
      current.transitions === undefined
    );
  };

  /**
   * @returns The current state.
   */
  getCurrent = (): string => {
    return this.currentState;
  };
}

export { Fsm };
