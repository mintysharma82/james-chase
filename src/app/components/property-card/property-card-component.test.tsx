import { render } from "@testing-library/react";
import SearchCard from "./property-card.component";
import React from "react";

describe("Component > Search Result > Search Card", () => {
  it("renders with rating as expected", () => {
    const mockHolidayData = {
      content: {
        hotelFacilities: ["Restaurant", "Swimming Pool"],
        starRating: "5",
        atAGlance: [],
      },
    };
    const { container } = render(
      <SearchCard hotel={mockHolidayData} pricePerPerson={500} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders without rating as expected", () => {
    const mockHolidayData = {
      content: {
        hotelFacilities: [],
        atAGlance: [],
      },
    };
    const { container } = render(
      <SearchCard hotel={mockHolidayData} pricePerPerson={20} />
    );
    expect(container).toMatchSnapshot();
  });
});
