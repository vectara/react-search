import { forwardRef, ForwardedRef, useEffect, useRef, ReactNode } from "react";
import { VuiPortal, VuiScreenBlock } from "./vui";
import { FocusOn } from "react-focus-on";

type Props = {
  onClose: () => void;
  isOpen?: boolean;
  children?: ReactNode[];
};

export const SearchModal = forwardRef(({ onClose, isOpen, children }: Props, ref: ForwardedRef<HTMLDivElement>) => {
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
      <div className="vrsStyleWrapper">
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
              <div className="vrsSearchModalContainer">
                <div ref={ref} className="vrsSearchModal">
                  {children}
                </div>
              </div>
            </FocusOn>
          </VuiScreenBlock>
        )}
      </div>
    </VuiPortal>
  );
});
