import { ch4Yearly } from "../../../data/ch4";

export default function handler(req, res) {
  res.status(200).json(ch4Yearly);
}
