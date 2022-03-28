import { global-temperature } from "../../../global-temperature";

export default function handler(req, res) {
  res.status(200).json(carbon);
}
