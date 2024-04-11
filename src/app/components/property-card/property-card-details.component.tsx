"use client";
import { List } from "./property-card.styles";

export default function SearchCardDetails({
  boardBasis,
  atAGlance,
  hotelFacilities,
}: {
  boardBasis: string;
  atAGlance: string[];
  hotelFacilities: string[];
}) {
  return (
    <div>
      <p>{boardBasis}</p>
      <List>
        {atAGlance.map((item) => (
          <li key={item} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </List>
      <h3>Amenities</h3>
      <List>
        {hotelFacilities.map((item) => (
          <li key={item} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </List>
    </div>
  );
}
