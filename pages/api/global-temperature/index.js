import { globalTemperatureYearly } from "../../../data/global-temperature";

export default function handler(req, res) {
  res.status(200).json(carbon);
}
