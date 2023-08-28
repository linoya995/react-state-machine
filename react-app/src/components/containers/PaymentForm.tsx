import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/hooks";
import "../style/Ticket.scss";
import { processPayment } from "../../store/paymentMachine/thunks";
import withLogger from "../hoc/WithLogger";
import Button from "../presentational/Button";
import Input from "../presentational/Input";
import { Status } from "../../store/paymentMachine/machineState";

/**
 * Demonstrates the use case of react-state-machine-library with
 * Redux Thunk and a backend service
 */
const PaymentForm = () => {
  const dispatch = useAppDispatch();
  const paymentState = useSelector((state: any) => state.payment);
  const [amount, setPaymentAmount] = useState("");

  // Trigger machine transition
  const handlePaymentSubmit = () => {
    dispatch(processPayment(amount));
  };

  const isLoading = paymentState.status === Status.Loading;

  // if payment is done successfully
  const isSuccess: boolean =
    paymentState.status === Status.Success && paymentState.isFinal;

  return (
    <div className="ticket">
      {/* Title */}
      <h1>Payment Page</h1>

      <p>This example is using fsm library directly with redux thunk</p>

      {/* Form */}
      {isSuccess ? (
        <div> {`Thank you for paying ${amount} $ !`}!!</div>
      ) : (
        <form>
          <label htmlFor="amount">Payment Amount:</label>
          <Input
            id="amount"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) => setPaymentAmount(e.target.value)}
          />
          <Button
            onClick={handlePaymentSubmit}
            title={"Submit Payment"}
            disabled={isLoading}
          />

          {/* Status */}
          <p>Current Payment Status: {paymentState.status}</p>
        </form>
      )}
    </div>
  );
};

// with Logging HOC
export default withLogger(PaymentForm);
