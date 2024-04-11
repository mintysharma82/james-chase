import { Amenity, PriceRange, PricingClass, Rating } from "@/types/filter";

export type RatingsState = {
  [key in Rating]?: boolean;
};

export type AmenityState = {
  [key in Amenity]?: boolean;
};

export type PriceState = {
  [key in PricingClass]?: PriceRange;
};
