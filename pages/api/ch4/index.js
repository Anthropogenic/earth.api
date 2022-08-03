import { ch4Monthly } from "../../../data/ch4";

export default function handler(req, res) {
  res.status(200).json(ch4Monthly);
}
