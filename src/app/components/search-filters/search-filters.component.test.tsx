import { fireEvent, render } from "@testing-library/react";
import SearchFilters from "./search-filters.component";
import React from "react";
import {
  amenityDetails,
  pricingDetails,
  ratingDetails,
} from "./search-filter.const";
import { screen } from "@testing-library/dom";

describe("Component > Search Filter", () => {
  const eventHandlerMock = jest.fn();

  it("renders as expected", () => {
    const { container } = render(
      <SearchFilters handleChange={eventHandlerMock} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should call mock if one of the ratings is checked", () => {
    render(<SearchFilters handleChange={eventHandlerMock} />);
    const element = screen.getByTestId(ratingDetails[0].classId);
    fireEvent.click(element);
    expect(eventHandlerMock).toHaveBeenCalledTimes(1);
  });

  it("should call mock if one of the amenities is checked", () => {
    render(<SearchFilters handleChange={eventHandlerMock} />);
    const element = screen.getByTestId(amenityDetails[0].classId);
    fireEvent.click(element);
    expect(eventHandlerMock).toHaveBeenCalledTimes(1);
  });

  it("should call mock if one of the pricing is checked", () => {
    render(<SearchFilters handleChange={eventHandlerMock} />);
    const element = screen.getByTestId(pricingDetails[0].classId);
    fireEvent.click(element);
    expect(eventHandlerMock).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    eventHandlerMock.mockClear();
  });
});
