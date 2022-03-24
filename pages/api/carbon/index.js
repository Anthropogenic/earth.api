import { carbonYearly, carbonMonthly, carbonDaily } from "../../../carbon";

export default function handler(req, res) {
  res.status(200).json(carbonYearly);
}
