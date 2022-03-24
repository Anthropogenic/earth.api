import { carbonYearly } from "../../../carbon";

export default function personHandler({ query: { year } }, res) {
  const filtered = carbonYearly.filter((p) => p.year === year);

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `User with id: ${year} not found.` });
  }
}
