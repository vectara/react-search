import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchInput } from "./SearchInput";

const MOCK_PLACEHOLDER = "mock-placeholder";
const MOCK_VALUE = "mock-value";
const onChangeMock = jest.fn();
const onKeyDownMock = jest.fn();

describe("SearchInput", () => {
  it("should render an input element with the expected attributes", () => {
    render(
      <SearchInput
        value={MOCK_VALUE}
        onChange={onChangeMock}
        onKeyDown={onKeyDownMock}
        placeholder={MOCK_PLACEHOLDER}
      />
    );

    const input = screen.getByDisplayValue(MOCK_VALUE);
    fireEvent.change(input, {
      target: { value: "new value" },
    });
    fireEvent.keyDown(input);

    expect(input).toHaveAttribute("placeholder", MOCK_PLACEHOLDER);
    expect(input).toHaveAttribute("value", MOCK_VALUE);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onKeyDownMock).toHaveBeenCalledTimes(1);
  });
});
