import { properties } from "../../database/properties";

export default function handler(req, res) {
  const { propertyId } = req.query;

  let property = properties[0];

  switch (propertyId) {
    case "edgewood":
      property = properties[0];
      break;
    case "sag-harbor-village":
      property = properties[1];
      break;
    case "stephen-hands":
      property = properties[2];
      break;
    case "rosehill":
      property = properties[3];
      break;
    case "elybrook":
      property = properties[4];
      break;
    case "116-copeces":
      property = properties[5];
      break;
    case "118-copeces":
      property = properties[6];
      break;
    case "rockville":
      property = properties[7];
      break;
    case "antigua":
      property = properties[8];
      break;
  }

  if (req.method === "GET") {
    res.status(200).json(property);
  }
}
