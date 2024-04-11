import { ReactComponentElement, ReactElement } from "react";
import {
  Amenity,
  AmenityDetails,
  AmenityKeyMap,
  PricingDetails,
  Rating,
  RatingDetails,
  RatingsKeyMap,
} from "@/types/filter";

export const ratingDetails: RatingDetails = [
  {
    key: Rating.FivePlus,
    classId: "5-plus",
    component: <span className="rating-5plus rating-star"></span>,
    description: "include 5 star plus",
  },
  {
    key: Rating.Five,
    classId: "5-star",
    component: <span className="rating-5star rating-star"></span>,
    description: "include 5 star",
  },
  {
    key: Rating.FourPlus,
    classId: "4-plus",
    component: <span className="rating-4plus rating-star"></span>,
    description: "include 4 star plus",
  },
  {
    key: Rating.Four,
    classId: "4-star",
    component: <span className="rating-4star rating-star"></span>,
    description: "include 4 star",
  },
  {
    key: Rating.ThreePlus,
    classId: "3-plus",
    component: <span className="rating-3plus rating-star"></span>,
    description: "include 3 star plus",
  },
  {
    key: Rating.Three,
    classId: "3-star",
    component: <span className="rating-3star rating-star"></span>,
    description: "include 3 star",
  },
  {
    key: Rating.Villa,
    classId: "villa",
    component: <span className="rating-villa rating-star"></span>,
    description: "include villas",
  },
];

export const ratingKeyMap: RatingsKeyMap = {
  [Rating.FivePlus]: 0,
  [Rating.Five]: 1,
  [Rating.FourPlus]: 2,
  [Rating.Four]: 3,
  [Rating.ThreePlus]: 4,
  [Rating.Three]: 5,
  [Rating.Villa]: 6,
};

export const pricingDetails: PricingDetails = [
  {
    price: { min: 0, max: 970 },
    classId: "R0-970",
    description: "from 0 to 970",
  },
  {
    price: { min: 971, max: 1190 },
    classId: "R971-1190",
    description: "from 971 to 1190",
  },
  {
    price: { min: 1191, max: 1600 },
    classId: "R1191-1600",
    description: "from 1191 to 1600",
  },
  {
    price: { min: 1601, max: 1000000000 },
    classId: "R1601",
    description: "1601 onwards",
  },
];

export const amenityDetails: AmenityDetails = [
  {
    key: Amenity.Bar,
    classId: "filter-bar",
  },
  {
    key: Amenity.FreeParking,
    classId: "free-parking",
  },
  {
    key: Amenity.InternetAccess,
    classId: "internet-access",
  },
  {
    key: Amenity.Restaurant,
    classId: "restaurant",
  },
  {
    key: Amenity.RoomService,
    classId: "room-service",
  },
  {
    key: Amenity.SwimmingPool,
    classId: "swimming-pool",
  },
];

export const amenityKeyMap: AmenityKeyMap = {
  [Amenity.Bar]: 0,
  [Amenity.FreeParking]: 1,
  [Amenity.InternetAccess]: 2,
  [Amenity.Restaurant]: 3,
  [Amenity.RoomService]: 4,
  [Amenity.SwimmingPool]: 5,
};
