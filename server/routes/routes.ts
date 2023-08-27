import { Request, Response, Router } from "express";
import { simulatePaymentProcessing } from "../utils/utils";

// Create an instance of the Express router
const router = Router();

/**
 * POST route to process a payment.
 * @param req - The Express request object.
 * @param res - The Express response object.
 */
router.post("/process-payment", async (req: Request, res: Response) => {
  const { amount } = req.body;
  console.log(`Processing payment with amount ${amount}.....`);

  try {
    // Simulate payment processing and handle the result
    const result = await simulatePaymentProcessing(amount);
    console.log(`result:`, result);
    res.json({ success: true, message: result });
  } catch (e) {
    // Handle errors during payment processing
    res.status(400).json({ success: false, message: e });
  }
});

export default router;
