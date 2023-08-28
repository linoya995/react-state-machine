import { Fsm } from "../react-state-machine-library/fsm/fsm";

// Test suite for FSM functionality
describe("FSM Tests", () => {
  // Define the state transitions and initial state
  const states = {
    A: {
      transitions: {
        toB: "B",
      },
    },
    B: {
      transitions: {
        toC: "C",
      },
    },
    C: {
      transitions: {
        toA: "A",
      },
    },
  };

  // Define the state machine configuration
  const machine = {
    initialState: "A",
    states,
  };

  let fsm: Fsm;

  // Set up the FSM instance before each test
  beforeEach(() => {
    fsm = new Fsm(machine);
  });

  // Test
  it("should initialize with the correct initial state", () => {
    expect(fsm.getCurrent()).toBe("A");
  });

  // Test
  it("should transition to the next state", () => {
    fsm.onEvent({ name: "toB" });
    expect(fsm.getCurrent()).toBe("B");
  });

  // Test
  it("should transition to multiple states", () => {
    fsm.onEvent({ name: "toB" });
    expect(fsm.getCurrent()).toBe("B");

    fsm.onEvent({ name: "toC" });
    expect(fsm.getCurrent()).toBe("C");
  });

  // Test
  it("should handle invalid transitions", () => {
    expect(() => {
      fsm.onEvent({ name: "toC" }); // Trying to transition from A to C
    }).toThrowError("Transition from A to toC not allowed");

    fsm.onEvent({ name: "toB" });
    expect(() => {
      fsm.onEvent({ name: "toA" }); // Trying to transition from B to A
    }).toThrowError("Transition from B to toA not allowed");
  });

  // Test
  it("should prevent transition from invalid state", () => {
    fsm.onEvent({ name: "toB" });
    fsm.onEvent({ name: "toC" }); // Trying to transition from B to C
    expect(fsm.getCurrent()).toBe("C");
  });

  // Test
  it("should check current state", () => {
    expect(fsm.is("A")).toBe(true);
    expect(fsm.is("B")).toBe(false);
  });

  // Test
  it("should handle unknown state in is method", () => {
    expect(fsm.is("X")).toBe(false);
  });
});
