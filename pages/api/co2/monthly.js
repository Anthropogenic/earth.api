import { co2Monthly } from "../../../data/co2";

export default function handler(req, res) {
  res.status(200).json(co2Monthly);
}
