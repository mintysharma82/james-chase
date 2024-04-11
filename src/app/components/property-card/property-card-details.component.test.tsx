import { render } from "@testing-library/react";
import SearchCardDetails from "./property-card-details.component";
import React from "react";

describe("Component > Property Card > Details", () => {
  it("renders with rating as expected", () => {
    const mockHolidayData = {
      content: {
        hotelFacilities: ["Restaurant", "Swimming Pool"],
        starRating: "5",
        atAGlance: [],
      },
    };
    const { container } = render(
      <SearchCardDetails
        boardBasis={"Room"}
        atAGlance={["My Feature"]}
        hotelFacilities={["Restaurant", "Swimming Pool"]}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
