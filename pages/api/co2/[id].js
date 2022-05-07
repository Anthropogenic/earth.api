import { co2Yearly } from "../../../data/co2";

export default function carbonHandler({ query: { id } }, res) {
  // const filtered = co2Yearly.filter((c) => c.id === id);
  // const yearlySource = data[0].source[0];
  // const yearlyData = data[1].data[0];
  const filtered = co2Yearly.filter((c) => c.id === id);

  // const filtered = co2Yearly.filter(function (element) {
  //     return element.subElements.some( function (subElement) {
  //         return subElement.surname === surname
  //     });
  // });

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Yearly co2 data for: ${id} not found.` });

    // res.status(404).json({ message: id });
  }
}
