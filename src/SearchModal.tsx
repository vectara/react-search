import React, {
  forwardRef,
  ForwardedRef,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { SearchInput } from "./SearchInput";
import {
  VuiFlexContainer,
  VuiFlexItem,
  VuiLinkInternal,
  VuiPortal,
  VuiScreenBlock,
  VuiSpacer,
  VuiText,
  VuiTextColor,
} from "./vui";
import { FocusOn } from "react-focus-on";
import { AllowedStyleOverrides } from "types";

type Props = {
  isLoading: boolean;
  searchValue?: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (evt: ReactKeyboardEvent) => void;
  onClose: () => void;
  resultsList: React.ReactNode;
  isOpen?: boolean;
  // Optional style overrides.
  // Limited to allowed elements and styles.
  styles?: {
    input?: AllowedStyleOverrides;
  };
};

export const SearchModal = forwardRef(
  (
    {
      isLoading,
      searchValue,
      onChange,
      onKeyDown,
      onClose,
      isOpen,
      resultsList,
      styles = {},
    }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const returnFocusElRef = useRef<HTMLElement | null>(null);

    // Return focus on unmount.
    useEffect(() => {
      if (isOpen) {
        returnFocusElRef.current = document.activeElement as HTMLElement;
      } else {
        returnFocusElRef.current?.focus();
        returnFocusElRef.current = null;
      }
    }, [isOpen]);

    // Allow contents to respond to blur events before unmounting.
    const onCloseDelayed = () => {
      window.setTimeout(() => {
        onClose();
      }, 0);
    };

    return (
      <VuiPortal>
        <div className="styleWrapper">
          {isOpen && (
            <VuiScreenBlock>
              <FocusOn
                onEscapeKey={onCloseDelayed}
                onClickOutside={onCloseDelayed}
                // Enable manual focus return to work.
                returnFocus={false}
                // Enable focus on contents when it's open,
                // but enable manual focus return to work when it's closed.
                autoFocus={isOpen}
              >
                <div className="searchModalContainer">
                  <div ref={ref} className="searchModal">
                    <SearchInput
                      isLoading={isLoading}
                      value={searchValue}
                      onChange={onChange}
                      onKeyDown={onKeyDown}
                      placeholder="Search docs"
                      styles={styles?.input}
                    />

                    {resultsList && (
                      <div className="searchModalResults">{resultsList}</div>
                    )}

                    <div className="searchModalFooter">
                      <VuiSpacer size="xs" />

                      <VuiFlexContainer
                        alignItems="center"
                        justifyContent="spaceBetween"
                      >
                        <VuiFlexItem>
                          <VuiText size="s" align="right">
                            <p>
                              <strong>
                                <VuiTextColor color="subdued">
                                  Built with
                                </VuiTextColor>{" "}
                                <VuiLinkInternal
                                  href="https://vectara.com"
                                  target="_blank"
                                >
                                  Vectara
                                </VuiLinkInternal>
                              </strong>
                            </p>
                          </VuiText>
                        </VuiFlexItem>

                        <VuiFlexItem>
                          <VuiText>
                            <p>
                              <VuiTextColor color="subdued">
                                Ctrl+K
                              </VuiTextColor>
                            </p>
                          </VuiText>
                        </VuiFlexItem>
                      </VuiFlexContainer>

                      <VuiSpacer size="xs" />
                    </div>
                  </div>
                </div>
              </FocusOn>
            </VuiScreenBlock>
          )}
        </div>
      </VuiPortal>
    );
  }
);
