import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import PaymentForm from "../components/containers/PaymentForm";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { rest } from "msw";

const base = "http://localhost:5000";

// Create mock server
export const handlers = [
  // Define a handler for the POST request
  rest.post(`${base}/api/process-payment`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ success: true, message: "Payment successful" })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

// Mock Redux store with Thunk middleware
const mockStore = configureStore([thunk]);

describe("PaymentForm", () => {
  // Test
  it("renders correctly", () => {
    // Initial state for payment
    const initialState = {
      payment: "idle",
    };

    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <PaymentForm />
      </Provider>
    );

    expect(screen.getByText("Payment Page")).toBeInTheDocument();
  });
});

describe("PaymentForm with mock server", () => {
  // Test
  it("should trigger the payment submit handler on button click", async () => {
    const store = mockStore({
      payment: {
        status: "idle",
        isFinal: false,
      },
    });

    render(
      <Provider store={store}>
        <PaymentForm />
      </Provider>
    );

    const amountInput = screen.getByLabelText("Payment Amount:");
    const submitButton = screen.getByText("Submit Payment");
    const amount = "100";
    // Type an amount in the input field
    userEvent.type(amountInput, amount);

    fireEvent.click(submitButton);

    const expectedActions = [
      { type: "stateMachine/transition", payload: "FETCH" },
      { type: "stateMachine/transition", payload: "RESOLVE" },
    ];
    const actions = store.getActions();

    await waitFor(() => {
      expect(actions).toEqual(expectedActions);
    });
  });
});

// I need to write more tests here ..... :)

/**
 * Tests should be written :
 * 1. displays payment status
 * 2. handles payment submission
 * 3. Simulate clicking the payment button
 * 4. Simulate inserting data to input field
 * 5. check edge cases
 */
