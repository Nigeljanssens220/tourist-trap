import React, { FC } from "react";
import Typography, { TypographyVariant, TypographyWeight } from "../Typography";

interface SectionProps {
  textWeight?: TypographyWeight;
  textVariant?: TypographyVariant;
  className?: string;
}

const Section: FC<SectionProps> = ({
  children,
  textWeight,
  textVariant,
  className,
}) => {
  return (
    <Typography weight={textWeight} variant={textVariant} className={className}>
      {children}
    </Typography>
  );
};

export default Section;
