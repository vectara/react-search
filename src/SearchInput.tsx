import React, {
  ChangeEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
} from "react";
import { BiSearch } from "react-icons/bi";
import { VuiSpinner } from "./vui";

type Props = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  autoFocus?: boolean;
  onSubmit?: FormEventHandler;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  isLoading?: boolean;
};

export const SearchInput = ({
  value,
  onChange,
  placeholder,
  autoFocus,
  onSubmit,
  isLoading,
  ...rest
}: Props) => {
  return (
    <input
      className="searchInput__input"
      type="text"
      autoComplete="off"
      autoCapitalize="off"
      spellCheck="false"
      autoFocus={autoFocus}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};
