import { renderHook, act } from "@testing-library/react";
import { useMachine } from "../react-state-machine-library/hooks/useMachine";

describe("useMachine Hook", () => {
  // Test initial state
  it("should return the initial state and onEvent function", () => {
    const machine = {
      initialState: "inactive",
      states: {
        inactive: {
          transitions: { TOGGLE: "active" },
        },
        active: {
          transitions: { TOGGLE: "inactive" },
        },
      },
    };

    const { result } = renderHook(() => useMachine(machine));

    expect(result.current[0].getCurrent()).toBe("inactive");
    expect(typeof result.current[1]).toBe("function");
  });

  // Test event
  it("should transition to the correct state on event", () => {
    const machine = {
      initialState: "inactive",
      states: {
        inactive: {
          transitions: { TOGGLE: "active" },
        },
        active: {
          transitions: { TOGGLE: "inactive" },
        },
      },
    };

    const { result } = renderHook(() => useMachine(machine));

    const [, onEvent] = result.current;

    act(() => {
      onEvent({ name: "TOGGLE" });
    });

    expect(result.current[0].getCurrent()).toBe("active");
  });
});
