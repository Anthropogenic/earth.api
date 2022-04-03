import { co2Yearly } from "../../../data/co2";

export default function handler(req, res) {
  res.status(200).json(co2Yearly);
}
