import { ch4Yearly, ch4Monthly } from "../../../data/ch4";

export default function carbonHandler({ query: { id } }, res) {
  let filtered = ch4Yearly.concat(ch4Monthly);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Yearly CH₄ data for: ${id} not found.` });

    // res.status(404).json({ message: id });
  }
}
