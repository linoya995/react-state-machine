import { postPayment } from "../../api/axios";
import { Dispatch } from "redux";
import type { RootState } from "../store";
import { transition } from "./paymentMachineSlice";
import { Status, Event } from "./machineState";

/**
 * Thunk function
 * @param amount - payment amount.
 */
export const processPayment = (amount: string) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      // try to pay
      const event =
        getState().payment.status === Status.Failure
          ? Event.RETRY
          : Event.FETCH;
      dispatch(transition(event));
      const paymentData = { amount: parseFloat(amount) };
      const data = await postPayment(paymentData);

      // success
      if (data.success) {
        dispatch(transition(Event.RESOLVE));

        // fail
      } else {
        dispatch(transition(Event.REJECT));
      }
    } catch (e) {
      console.log(e);
      dispatch(transition(Event.REJECT));
    }
  };
};
