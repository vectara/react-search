import { ReactNode, useEffect, useState } from "react";
import { Props } from "types";

/**
 * An implementation of the ReactSearch component for NextJs.
 * For NextJs, the ReactSearch child component is imported and rendered via useEffect.
 * Doing it this way guarantees that the component is only rendered on the client, avoiding server-side errors.
 */
export const ReactSearchNext = (props: Props): ReactNode => {
  const [search, setSearch] = useState<ReactNode>(null);

  useEffect(() => {
    const importAndRenderSearch = async () => {
      const { ReactSearch } = await import("./");

      setSearch(<ReactSearch {...props} />);
    };

    importAndRenderSearch();
  }, []);

  return search;
};
