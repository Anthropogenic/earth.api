import { n2oMonthly, n2oYearly } from "../../../data/n2o";

export default function carbonHandler({ query: { id } }, res) {
  let filtered = n2oYearly.concat(n2oMonthly);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `N₂O data for: ${id} not found.` });
    // res.status(404).json({ message: id });
  }
}
