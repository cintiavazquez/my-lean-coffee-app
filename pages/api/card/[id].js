import Card from "../../../src/models/Card";
import User from "../../../src/models/User";

export default async function handler(req, res) {
  const { id } = req.query;
  // const cards = getCards();

  // const singleCard = cards.find((card) => card.id === id);

  if (req.method === "DELETE") {
    const deletedCard = await Card.findByIdAndDelete(id);
    res.status(200).json({ message: "card deleted", card: deletedCard });
  } else if (req.method === "PUT") {
    const data = JSON.parse(req.body);
    const card = await Card.findById(id);
    const changedCard = await Card.findByIdAndUpdate(
      id,
      { content: data.content },
      { new: true }
    );
    const changedUser = await User.findByIdAndUpdate(
      card.user,
      { name: data.name },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "card updated", card: changedCard, changedUser });
  } else {
    const singleCard = await Card.findById(id);
    res.status(200).json(singleCard);
  }

  //const index = cards.findIndex((card) => card.id === id);

  //res.status(200).json(cards[index]);
}
