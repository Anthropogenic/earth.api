import { n2oMonthly } from "../../../data/n2o";

export default function handler(req, res) {
  res.status(200).json(n2oMonthly);
}
