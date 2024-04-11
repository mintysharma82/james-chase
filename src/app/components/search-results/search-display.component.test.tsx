import { fireEvent, render } from "@testing-library/react";
import SearchDisplay from "./search-display.component";
import React from "react";
import { screen } from "@testing-library/dom";
import { pricingDetails } from "../search-filters/search-filter.const";

describe("Component > Search Result > Search Display", () => {
  const mockResultData = {
    holidays: [
      {
        pricePerPerson: 6204.61,
        hotel: {
          id: "HT01",
          content: {
            hotelFacilities: ["Restaurant", "Bar"],
            starRating: "5",
            atAGlance: [],
          },
        },
        virginPoints: 24818,
        tierPoints: 400,
        departureDate: "2024-05-17",
        selectedDate: "2024-05-17",
      },
    ],
  };
  it("renders as expected", () => {
    const { container } = render(<SearchDisplay results={mockResultData} />);
    expect(container).toMatchSnapshot();
  });

  it("renders as expected if a filter is used", () => {
    const { container } = render(<SearchDisplay results={mockResultData} />);
    const element = screen.getByTestId(pricingDetails[0].classId);
    fireEvent.click(element);
    expect(container).toMatchSnapshot();
  });
});
