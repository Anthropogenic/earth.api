import { n2oYearly } from "../../../data/n2o";

export default function handler(req, res) {
  res.status(200).json(n2oYearly);
}
