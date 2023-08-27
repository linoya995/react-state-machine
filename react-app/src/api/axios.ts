import axios from "axios";

// Create Axios instance
const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Set the base URL for API requests
});

// Payment data interface
interface PaymentData {
  amount: number;
}

/**
 * Send a POST request to process a payment.
 * @param paymentData - Payment data including amount.
 * @returns Promise resolving to Axios response or rejecting with an error.
 */
export const postPayment = async (paymentData: PaymentData) => {
  try {
    const response = await instance.post("/process-payment", paymentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default instance;
