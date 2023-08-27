import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import PaymentForm from "../components/containers/PaymentForm";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";

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

  // I need to write more tests here ..... :)
  // mock server here ....

  /**
   * Tests should be written :
   * 1. displays payment status
   * 2. handles payment submission
   * 3. Simulate clicking the payment button
   * 4. Simulate inserting data to input field
   * 5. check edge cases
   */
});
