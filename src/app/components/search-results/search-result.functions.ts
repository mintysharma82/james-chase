import { Holiday } from "@/types/booking";
import { AmenityState, PriceState, RatingsState } from "./search-result.types";

//each of the check only executes if the filter related with them is set

export const checkRatingFilter = (
  holiday: Holiday,
  ratingFilterCount: number,
  ratingsState: RatingsState
) => {
  return ratingFilterCount > 0 &&
    ratingsState[holiday.hotel.content.starRating as keyof RatingsState] !==
      true
    ? false
    : true;
};

export const checkAmenityFilter = (
  holiday: Holiday,
  amenityFilterCount: number,
  amenityState: AmenityState
) => {
  let amenityShow = true;
  if (amenityFilterCount > 0) {
    amenityShow = false;

    //if we convert to string we do not need to loop through each facility in hotel
    const amenityStr = holiday.hotel.content.hotelFacilities.toString();

    //only loop through the set filters
    for (const amenity of Object.keys(amenityState)) {
      if (amenityStr.indexOf(amenity) !== -1) {
        amenityShow = true;
        break;
      }
    }
  }

  return amenityShow;
};

export const checkPriceFilter = (
  holiday: Holiday,
  priceFilterCount: number,
  priceState: PriceState
) => {
  let priceShow = true;

  if (priceFilterCount > 0) {
    priceShow = false;
    //again looping through set filter only
    for (const price of Object.values(priceState)) {
      if (
        holiday.pricePerPerson >= price.min &&
        holiday.pricePerPerson <= price.max
      ) {
        priceShow = true;
        break;
      }
    }
  }

  return priceShow;
};

export const checkIsValid = (
  holiday: Holiday,
  ratingFilterCount: number,
  ratingsState: RatingsState,
  amenityFilterCount: number,
  amenityState: AmenityState,
  priceFilterCount: number,
  priceState: PriceState
) => {
  if (
    ratingFilterCount <= 0 &&
    amenityFilterCount <= 0 &&
    priceFilterCount <= 0
  ) {
    return true;
  }
  if (checkRatingFilter(holiday, ratingFilterCount, ratingsState) === false) {
    return false;
  }

  if (checkAmenityFilter(holiday, amenityFilterCount, amenityState) === false) {
    return false;
  }

  return checkPriceFilter(holiday, priceFilterCount, priceState);
};
