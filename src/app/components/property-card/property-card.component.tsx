"use client";
import { Hotel } from "@/types/booking";
import {
  Card,
  CardActions,
  CardDetails,
  Location,
  Price,
  Button,
} from "./property-card.styles";
import { lazy, memo, useState } from "react";
import { getDisplayDetails } from "./property-card.functions";

const SearchCardDetails = lazy(
  () => import("./property-card-details.component")
);

const SearchCard = memo(function SearchCard({
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
        <Button
          data-testid="show-details"
          onClick={() => setShowDetails((current) => !current)}
        >
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
});

export default SearchCard;
