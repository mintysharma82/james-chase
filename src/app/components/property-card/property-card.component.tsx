"use client";
import { Hotel } from "@/types/booking";
import { RatingsKeyMap } from "@/types/filter";
import {
  ratingDetails,
  ratingKeyMap,
} from "../search-filters/search-filter.const";
import {
  Card,
  CardActions,
  CardDetails,
  Location,
  Price,
  Button,
} from "./property-card.styles";
import SearchCardDetails from "./property-card-details.component";
import { useState } from "react";

const getDisplayDetails = (hotel: Hotel) => {
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
}: {
  hotel: Hotel;
  pricePerPerson: number;
}) {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const { ratingComponent } = getDisplayDetails(hotel);

  return (
    <Card id={hotel.id}>
      <CardDetails>
        <h2>{hotel.content.name}</h2>
        <Location>{hotel.content.parentLocation}</Location>
        <p>{ratingComponent}</p>
        <Button onClick={() => setShowDetails((current) => !current)}>
          Show Details
        </Button>
        {showDetails && (
          <SearchCardDetails
            boardBasis={hotel.boardBasis}
            atAGlance={hotel.content.atAGlance}
            hotelFacilities={hotel.content.hotelFacilities}
          />
        )}
      </CardDetails>
      <CardActions>
        <Price>
          &#163;{pricePerPerson}
          <span>pp</span>
        </Price>
      </CardActions>
    </Card>
  );
}
