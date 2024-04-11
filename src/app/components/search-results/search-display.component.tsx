"use client";
import { BookingResponse } from "@/types/booking";
import SearchFiltersComponent from "../search-filters/search-filters.component";
import { useCallback, useState } from "react";
import { Filters } from "@/types/filter";
import SearchCard from "../property-card/property-card.component";
import { ResultContainer } from "./search-results.styles";
import { AmenityState, RatingsState, PriceState } from "./search-result.types";
import { checkIsValid } from "./search-result.functions";

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

  const handleFilterChange = useCallback(
    (target: HTMLInputElement, filterType: string) => {
      const checked = target.checked;
      const key = target.getAttribute("data-filter-key") as string;
      switch (filterType) {
        case Filters.StarRating:
          setRatingsState((oldState: RatingsState) => {
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
          setAmenityState((oldState: AmenityState) => {
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
          setPriceState((oldState: PriceState) => {
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
    },
    [
      setRatingsState,
      setRatingFilterCount,
      setAmenityState,
      setAmenityFilterCount,
      setPriceState,
      setPriceFilterCount,
    ]
  );

  let count = 0;
  let holidayList = results.holidays.map((holiday) => {
    //I can also use filter here, but if I do so... I will have to map through the components later anyways
    let valid = true;
    if (
      amenityFilterCount > 0 ||
      priceFilterCount > 0 ||
      ratingFilterCount > 0
    ) {
      valid = checkIsValid(
        holiday,
        ratingFilterCount,
        ratingsState,
        amenityFilterCount,
        amenityState,
        priceFilterCount,
        priceState
      );
    }

    if (valid) {
      count++;
      return (
        <SearchCard
          key={holiday.hotel.id}
          hotel={holiday.hotel}
          pricePerPerson={holiday.pricePerPerson}
        />
      );
    }
    return null;
  });

  //enable this line for mocked pagination
  //holidayList = holidayList.slice(0, 10);

  return (
    <section className="container">
      <SearchFiltersComponent handleChange={handleFilterChange} />
      <ResultContainer id="search-results">
        <section>
          <h2>{count} results found</h2>
        </section>
        {holidayList}
      </ResultContainer>
    </section>
  );
}
