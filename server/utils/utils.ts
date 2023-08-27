/**
 * Simulates payment processing with a delay of 2 seconds.
 * @param amount - The payment amount to be processed. Should be greater than 0;
 * @returns - A promise that resolves to a success message or rejects with an error message.
 */
export const simulatePaymentProcessing = async (
  amount: number
): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Reject cases
      if (amount === undefined) {
        reject("Amount field is required");
      } else if (typeof amount !== "number") {
        reject("Invalid input");
      } else if (amount <= 0) {
        reject("Amount must be greater than 0");

        // Resolve case
      } else {
        resolve("Payment successful");
      }
    }, 2000); // Resolves after 2 seconds
  });
};
