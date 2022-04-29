import { getCards } from "../../src/services/get-cards";

export default async function handler(req, res) {
  const cards = await getCards();

  // cards.push({
  //   id: 1,
  //   content: "Testy test",
  //   name: "Testname",
  // });

  res.status(200).json(cards);
}
