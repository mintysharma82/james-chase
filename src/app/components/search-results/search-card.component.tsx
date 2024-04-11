"use client";
import { Hotel } from "@/types/booking";
import { Rating, RatingsKeyMap } from "@/types/filter";
import {
  ratingDetails,
  ratingKeyMap,
} from "../search-filters/search-filter.const";
import {
  Card,
  CardActions,
  CardDetails,
  Location,
  List,
  Price,
} from "./search-results.styles";

export type RatingsState = {
  [key in Rating]?: boolean;
};

const getDisplayDetails = (
  hotel: Hotel,
  ratingFilterCount: number,
  ratingsState: RatingsState
) => {
  const ratingKey = hotel.content.starRating;
  const ratingComponent =
    ratingKey !== undefined
      ? ratingDetails[ratingKeyMap[ratingKey as keyof RatingsKeyMap]].component
      : null;
  return {
    ratingComponent,
  };
};

export default function SearchCard({
  hotel,
  pricePerPerson,
  ratingFilterCount,
  ratingsState,
}: {
  hotel: Hotel;
  pricePerPerson: number;
  ratingFilterCount: number;
  ratingsState: RatingsState;
}) {
  const { ratingComponent } = getDisplayDetails(
    hotel,
    ratingFilterCount,
    ratingsState
  );

  return (
    <Card id={hotel.id}>
      <CardDetails>
        <h2>{hotel.content.name}</h2>
        <Location>{hotel.content.parentLocation}</Location>
        <p>{ratingComponent}</p>
        <p>{hotel.boardBasis}</p>
        <List>
          {hotel.content.atAGlance.map((item) => (
            <li key={item} dangerouslySetInnerHTML={{ __html: item }}></li>
          ))}
        </List>
      </CardDetails>
      <CardActions>
        <Price>
          &#163;{pricePerPerson}
          <span>pp</span>
        </Price>
        <h3>Amenities</h3>
        <List>
          {hotel.content.hotelFacilities.map((item) => (
            <li key={item} dangerouslySetInnerHTML={{ __html: item }}></li>
          ))}
        </List>
      </CardActions>
    </Card>
  );
}
