import { co2Yearly, co2Monthly, co2Weekly } from "../../../data/co2";

export default function carbonHandler({ query: { id } }, res) {
  let filtered = co2Yearly.concat(co2Monthly, co2Weekly);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Yearly CO₂ data for: ${id} not found.` });

    // res.status(404).json({ message: id });
  }
}
