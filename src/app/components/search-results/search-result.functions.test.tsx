import {
  checkRatingFilter,
  checkAmenityFilter,
  checkPriceFilter,
  checkIsValid,
} from "./search-result.functions";
import { Amenity, Rating } from "../../../types/filter";

describe("Component > Search Result > functions", () => {
  const mockHolidayData = {
    pricePerPerson: 6204.61,
    hotel: {
      content: {
        hotelFacilities: ["Restaurant", "Bar"],
        starRating: "5",
      },
    },
    virginPoints: 24818,
    tierPoints: 400,
    departureDate: "2024-05-17",
    selectedDate: "2024-05-17",
  };

  describe("checkRatingFilter", () => {
    it("should return true if the filter count is 0", () => {
      const displayFlag = checkRatingFilter(mockHolidayData, 0, {
        [Rating.Four]: true,
      });
      expect(displayFlag).toBe(true);
    });

    it("should return true if filter rating is present in the data", () => {
      const displayFlag = checkRatingFilter(mockHolidayData, 1, {
        [Rating.Five]: true,
      });
      expect(displayFlag).toBe(true);
    });

    it("should return false if filter rating is NOT present in the data", () => {
      const displayFlag = checkRatingFilter(mockHolidayData, 1, {
        [Rating.Four]: true,
      });
      expect(displayFlag).toBe(false);
    });
  });

  describe("checkAmenityFilter", () => {
    it("should return true if the filter count is 0", () => {
      const displayFlag = checkAmenityFilter(mockHolidayData, 0, {
        [Amenity.Bar]: true,
      });
      expect(displayFlag).toBe(true);
    });

    it("should return true if filter amenity is present in the data", () => {
      const displayFlag = checkAmenityFilter(mockHolidayData, 1, {
        [Amenity.Bar]: true,
      });
      expect(displayFlag).toBe(true);
    });

    it("should return false if filter amenity is NOT present in the data", () => {
      const displayFlag = checkAmenityFilter(mockHolidayData, 1, {
        [Amenity.RoomService]: true,
      });
      expect(displayFlag).toBe(false);
    });
  });

  describe("checkPriceFilter", () => {
    it("should return true if the filter count is 0", () => {
      const displayFlag = checkPriceFilter(mockHolidayData, 0, {
        any: {
          min: 1,
          max: 8000,
        },
      });
      expect(displayFlag).toBe(true);
    });

    it("should return true if filter pricing is present in the data", () => {
      const displayFlag = checkPriceFilter(mockHolidayData, 1, {
        any: {
          min: 1,
          max: 8000,
        },
      });
      expect(displayFlag).toBe(true);
    });

    it("should return false if filter pricing is NOT present in the data", () => {
      const displayFlag = checkPriceFilter(mockHolidayData, 1, {
        any: {
          min: 0,
          max: 300,
        },
      });
      expect(displayFlag).toBe(false);
    });
  });

  describe("checkIsValid", () => {
    it("should return true data passes test", () => {
      const displayFlag = checkIsValid(
        mockHolidayData,
        0,
        {
          [Rating.Four]: true,
        },
        0,
        {
          [Amenity.Bar]: true,
        },
        0,
        {
          any: {
            min: 1,
            max: 8000,
          },
        }
      );
      expect(displayFlag).toBe(true);
    });

    it("should return false if the data does not pass test", () => {
      const displayFlag = checkIsValid(
        mockHolidayData,
        1,
        {
          [Rating.Four]: true,
        },
        1,
        {
          [Amenity.RoomService]: true,
        },
        1,
        {
          any: {
            min: 1,
            max: 800,
          },
        }
      );
      expect(displayFlag).toBe(false);
    });
  });
});
