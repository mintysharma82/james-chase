import { ReactElement } from "react";

export interface Details {
  classId: string;
  description: string;
}

export enum Filters {
  StarRating = "STAR RATING",
  Price = "PRICE",
  Amenities = "AMENITIES",
}

//Rating

export enum Rating {
  FivePlus = "5+",
  Five = "5",
  FourPlus = "4+",
  Four = "4",
  ThreePlus = "3+",
  Three = "3",
  Villa = "Villas",
}

export interface RatingDetail extends Details {
  key: Rating;
  component: ReactElement;
}

export type RatingDetails = RatingDetail[];

export type RatingsKeyMap = {
  [key in Rating]: number;
};

//Pricing

export enum PricingClass {
  R0970 = "R0-970",
  R9711190 = "R971-1190",
  R11911600 = "R11911600",
  R1601 = "R1601",
}

export type PriceRange = {
  min: number;
  max: number;
};

export interface PricingDetail extends Details {
  price: PriceRange;
}

export type PricingDetails = PricingDetail[];

//Amenities

export enum Amenity {
  Bar = "Bar",
  FreeParking = "Free Parking",
  InternetAccess = "Internet Access",
  Restaurant = "Restaurant",
  RoomService = "Room Service",
  SwimmingPool = "Swimming Pool",
}

export interface AmenityDetail {
  classId: string;
  key: Amenity;
}

export type AmenityDetails = AmenityDetail[];

export type AmenityKeyMap = {
  [key in Amenity]: number;
};
