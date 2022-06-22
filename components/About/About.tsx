import React from "react";

interface Props {
  isMobile?: boolean;
}

export default function About(props: Props) {
  const { isMobile } = props;
  return <div>About{isMobile}</div>;
}
