import { forwardRef, ForwardedRef, useEffect, useRef, ReactNode, LegacyRef } from "react";
import * as ReactDOM from "react-dom";
import { VuiPortal, VuiScreenBlock } from "./vui";
import { FocusOn } from "react-focus-on";

// @ts-ignore
import cssText from "./searchModal.scss";

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
              returnFocus={true}
              // Enable focus on contents when it's open,
              // but enable manual focus return to work when it's closed.
              autoFocus={isOpen}
            >
              <SearchModalContents ref={ref}>{children}</SearchModalContents>
            </FocusOn>
          </VuiScreenBlock>
        )}
      </div>
    </VuiPortal>
  );
});

interface SearchModalContentsProps {
  children: ReactNode;
  ref: LegacyRef<HTMLDivElement> | null;
}

const SearchModalContentsInternal = ({ ref, children }: SearchModalContentsProps) => {
  return (
    <div className="vrsSearchModalContainer">
      <div ref={ref} className="vrsSearchModal">
        {children}
      </div>
    </div>
  );
};

class SearchModalContentsWebComponent extends HTMLElement {
  sheet!: CSSStyleSheet;
  sr!: ShadowRoot;
  mountPoint!: HTMLDivElement;

  // Props
  isOpen!: boolean;
  onCloseDelayed!: () => void;
  ref!: LegacyRef<HTMLDivElement> | null;
  reactChildren?: ReactNode;

  static get observedAttributes() {
    return ["isopen", "onclosedelayedupdatetime", "reactchildrenupdatetime", "refupdatetime"];
  }

  public setOnCloseDelayed(onCloseDelayed: () => void) {
    this.onCloseDelayed = onCloseDelayed;

    // In order to trigger a re-render with the updated property,
    // we set an update timestamp as an attribute on this web component.
    this.setAttribute("onclosedelayedupdatetime", Date.now().toString());
  }

  public setReactChildren(reactChildren: ReactNode[]) {
    this.reactChildren = reactChildren;

    // In order to trigger a re-render with the updated property,
    // we set an update timestamp as an attribute on this web component.
    this.setAttribute("reactchildrenupdatetime", Date.now().toString());
  }

  public setRef(ref: LegacyRef<HTMLDivElement> | null) {
    this.ref = ref;

    // In order to trigger a re-render with the updated property,
    // we set an update timestamp as an attribute on this web component.
    this.setAttribute("refupdatetime", Date.now().toString());
  }

  constructor() {
    super();
    this.sr = this.attachShadow({ mode: "open" });

    // If the CSSStyleSheet constructor isn't supported, default to creating a style element.
    // We prefer the CSSStyleSheet approach as it's a recommended way to style web components, and growing in support:
    // https://webcomponents.guide/learn/components/styling/
    try {
      this.sheet = new CSSStyleSheet();
      this.sheet.replaceSync(cssText);
      this.sr.adoptedStyleSheets = [this.sheet];
    } catch {
      const styleElement = document.createElement("style");
      styleElement.innerText = cssText;
      this.sr.appendChild(styleElement);
    }

    this.mountPoint = document.createElement("div");
    this.sr.appendChild(this.mountPoint);
  }

  public connectedCallback() {
    const onCloseDelayed = this.onCloseDelayed;
    const isOpen = this.getAttribute("isOpen") === "true";
    const children = this.reactChildren;
    const ref = this.ref;

    ReactDOM.render(
      <>
        <SearchModalContentsInternal ref={ref}>{children}</SearchModalContentsInternal>
      </>,
      this.mountPoint
    );
  }

  attributeChangedCallback() {
    this.connectedCallback();
  }
}

window.customElements.get("react-search-modal-contents") ||
  window.customElements.define("react-search-modal-contents", SearchModalContentsWebComponent);

const SearchModalContents = (props: SearchModalContentsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;

    // @ts-ignore
    (ref.current as SearchModalContentsWebComponent).setReactChildren(props.children);

    // @ts-ignore
    (ref.current as SearchModalContentsWebComponent).setRef(props.ref);

    // @ts-ignore
    (ref.current as SearchModalContentsWebComponent).setOnCloseDelayed(props.onCloseDelayed);
  }, [props]);

  // @ts-ignore
  return <react-search-modal-contents ref={ref} isOpen={props.isOpen} />;
};
