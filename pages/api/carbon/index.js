import { carbon } from "../../../carbon";

export default function handler(req, res) {
  res.status(200).json(carbon);
}
