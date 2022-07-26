import { ch4Monthly } from "../../../data/ch4";

export default function carbonHandler({ query: { id } }, res) {
  const filtered = ch4Monthly.filter((c) => c.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `CH₄ data for: ${id} not found.` });
  }
}
