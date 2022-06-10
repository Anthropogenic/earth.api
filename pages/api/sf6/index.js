import { sf6Yearly } from "../../../data/sf6";

export default function handler(req, res) {
  res.status(200).json(sf6Yearly);
}
