import { sf6Yearly } from "../../../data/sf6";

export default function carbonHandler({ query: { id } }, res) {
  const filtered = sf6Yearly.filter((c) => c.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Yearly sf6 data for: ${id} not found.` });
  }
}
