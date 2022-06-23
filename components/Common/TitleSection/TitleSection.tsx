import React from "react";

interface Props {
  isMobile?: boolean;
}

export default function TitleSection(props: Props) {
  const { isMobile = false } = props;
  console.log("💡 ~ TitleSection ~ isMobile", isMobile);
  return <div>TitleSection</div>;
}
