import React, { FC, useCallback, useState, ReactNode } from "react";
import clsx from "clsx";
import "./FlipCard.css";

export type FlipCardProps = {
  frontContent?: ReactNode;
  backContent?: ReactNode;
};

const FlipCard: FC<FlipCardProps> = (props) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const { backContent, frontContent } = props;

  const handleOnFlip = useCallback(() => {
    setIsFlipped(!isFlipped);
  }, [isFlipped]);
  return (
    <div className="container">
      <div
        className={clsx("card", { flipped: isFlipped })}
        role="button"
        onClick={handleOnFlip}
      >
        <div className="front">{frontContent}</div>
        <div className="back">{backContent}</div>
      </div>
    </div>
  );
};

export default FlipCard;
