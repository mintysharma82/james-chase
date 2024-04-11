import { Hotel } from "@/types/booking";
import {
  ratingDetails,
  ratingKeyMap,
} from "../search-filters/search-filter.const";
import { RatingsKeyMap } from "@/types/filter";

export const getDisplayDetails = (hotel: Hotel) => {
  const ratingKey = hotel.content.starRating;
  const ratingComponent =
    ratingKey !== undefined
      ? ratingDetails[ratingKeyMap[ratingKey as keyof RatingsKeyMap]].component
      : null;
  return {
    ratingComponent,
  };
};
