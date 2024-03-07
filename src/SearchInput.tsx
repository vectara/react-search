import { ChangeEventHandler, FormEventHandler, KeyboardEventHandler } from "react";

type Props = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  autoFocus?: boolean;
  onSubmit?: FormEventHandler;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
};

export const SearchInput = ({ value, onChange, placeholder, autoFocus, onSubmit, ...rest }: Props) => {
  return (
    <input
      data-testid="searchInput"
      className="vrsSearchInput"
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
