import { sf6Monthly, sf6Yearly } from "../../../data/sf6";

export default function carbonHandler({ query: { id } }, res) {
  let filtered = sf6Yearly.concat(sf6Monthly);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `SF₆ data for: ${id} not found.` });

    // res.status(404).json({ message: id });
  }
}
