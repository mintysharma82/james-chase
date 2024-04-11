"use client";
import {
  amenityDetails,
  pricingDetails,
  ratingDetails,
} from "./search-filter.const";
import { FilterContainer } from "./search-filters.styles";
import { Filters } from "@/types/filter";

export default function SearchFiltersComponent({
  handleChange,
}: {
  handleChange: (target: HTMLInputElement, filterType: Filters) => void;
}) {
  return (
    <FilterContainer>
      <h2>Filter By...</h2>
      <h3>STAR RATING</h3>
      <ul>
        {ratingDetails.map((rating) => {
          return (
            <li key={rating.classId}>
              <input
                id={rating.classId}
                type="checkbox"
                aria-label={rating.description}
                data-filter-key={rating.key}
                onClick={(e) =>
                  handleChange(e.currentTarget, Filters.StarRating)
                }
              />
              {rating.component}
            </li>
          );
        })}
      </ul>
      <h3>PRICE (PP)</h3>
      <ul>
        {pricingDetails.map((pricing) => {
          return (
            <li key={pricing.classId}>
              <input
                id={pricing.classId}
                type="checkbox"
                aria-label={pricing.description}
                data-filter-key={pricing.classId}
                data-price-min={pricing.price.min}
                data-price-max={pricing.price.max}
                onClick={(e) => handleChange(e.currentTarget, Filters.Price)}
              />
              <label htmlFor={pricing.classId}>
                {pricing.price.max < 100000 ? (
                  <>
                    &#163;{pricing.price.min} - &#163;{pricing.price.max}
                  </>
                ) : (
                  <>Above &#163;{pricing.price.min}</>
                )}
              </label>
            </li>
          );
        })}
      </ul>
      <h3>AMENITIES</h3>
      <ul>
        {amenityDetails.map((amenity) => {
          return (
            <li key={amenity.classId}>
              <input
                id={amenity.classId}
                type="checkbox"
                aria-label={amenity.key}
                data-filter-key={amenity.key}
                onClick={(e) =>
                  handleChange(e.currentTarget, Filters.Amenities)
                }
              />
              <label htmlFor={amenity.classId}>{amenity.key}</label>
            </li>
          );
        })}
      </ul>
    </FilterContainer>
  );
}
