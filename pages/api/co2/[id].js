import { co2Yearly } from "../../../data/co2";

export default function carbonHandler({ query: { id } }, res) {
  const filtered = co2Yearly.filter((c) => c.id === id);

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `User with year: ${id} not found.` });
  }
}
