import classNames from "classnames";
import { VuiButtonSecondary } from "../button/ButtonSecondary";

type Props = {
  children: string;
  isSelected?: boolean;
  onClick?: () => void;
};

export const VuiSummaryCitation = ({ children, isSelected, onClick, ...rest }: Props) => {
  const classes = classNames("vuiSummaryCitation", {
    "vuiSummaryCitation-isSelected": isSelected
  });

  return (
    <VuiButtonSecondary
      color="primary"
      size="xs"
      className={classes}
      onClick={onClick}
      isSelected={isSelected}
      {...rest}
    >
      {children}
    </VuiButtonSecondary>
  );
};
