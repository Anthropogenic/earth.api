import { n2oYearly } from "../../../data/n2o";

export default function carbonHandler({ query: { id } }, res) {
  const filtered = n2oYearly.filter((c) => c.id === id);

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `User with year: ${id} not found.` });
  }
}
