"use client";
import { BookingResponse, Holiday } from "@/types/booking";
import SearchFiltersComponent from "../search-filters/search-filters.component";
import { useState } from "react";
import { Filters } from "@/types/filter";
import SearchCard from "./search-card.component";
import { ResultContainer } from "./search-results.styles";
import { AmenityState, RatingsState, PriceState } from "./search-result-types";
import { checkIsValid } from "./search-result-functions";

export default function SearchDisplay({
  results,
}: {
  results: BookingResponse;
}) {
  const [ratingFilterCount, setRatingFilterCount] = useState(0);
  const [ratingsState, setRatingsState] = useState<RatingsState>({});
  const [amenityFilterCount, setAmenityFilterCount] = useState(0);
  const [amenityState, setAmenityState] = useState<AmenityState>({});
  const [priceFilterCount, setPriceFilterCount] = useState(0);
  const [priceState, setPriceState] = useState<PriceState>({});

  const handleFilterChange = (target: HTMLInputElement, filterType: string) => {
    const checked = target.checked;
    const key = target.getAttribute("data-filter-key") as string;
    switch (filterType) {
      case Filters.StarRating:
        setRatingsState((oldState) => {
          const newState = { ...oldState };
          if (checked === false) {
            delete newState[key as keyof RatingsState];
            setRatingFilterCount((c) => c - 1);
          } else {
            newState[key as keyof RatingsState] = true;
            setRatingFilterCount((c) => c + 1);
          }
          return newState;
        });
        break;

      case Filters.Amenities:
        setAmenityState((oldState) => {
          const newState = { ...oldState };
          if (checked === false) {
            delete newState[key as keyof AmenityState];
            setAmenityFilterCount((c) => c - 1);
          } else {
            newState[key as keyof AmenityState] = true;
            setAmenityFilterCount((c) => c + 1);
          }
          return newState;
        });
        break;
      case Filters.Price:
        setPriceState((oldState) => {
          const newState = { ...oldState };
          if (checked === false) {
            delete newState[key as keyof PriceState];
            setPriceFilterCount((c) => c - 1);
          } else {
            const min = target.getAttribute("data-price-min") as string;
            const max = target.getAttribute("data-price-max") as string;
            newState[key as keyof PriceState] = {
              min: parseInt(min),
              max: parseInt(max),
            };
            setPriceFilterCount((c) => c + 1);
          }
          return newState;
        });
        break;
    }
  };

  const holidays = results.holidays.filter((holiday) =>
    checkIsValid(
      holiday,
      ratingFilterCount,
      ratingsState,
      amenityFilterCount,
      amenityState,
      priceFilterCount,
      priceState
    )
  );

  return (
    <section className="container">
      <SearchFiltersComponent handleChange={handleFilterChange} />
      <ResultContainer id="search-results">
        <section>
          <h2>{holidays.length} results found</h2>
        </section>
        {holidays.map((holiday) => {
          return (
            <SearchCard
              key={holiday.hotel.id}
              hotel={holiday.hotel}
              pricePerPerson={holiday.pricePerPerson}
              ratingFilterCount={ratingFilterCount}
              ratingsState={ratingsState}
            />
          );
        })}
      </ResultContainer>
    </section>
  );
}
