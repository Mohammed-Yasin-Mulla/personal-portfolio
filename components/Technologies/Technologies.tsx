import React from "react";

interface Props {
  children: React.ReactNode;
  isMobile?: boolean;
}

export default function Technologies(props: Props) {
  const { children } = props;
  return (
    <div style={{ height: "50vh", color: "white", padding: "0 150px" }}>
      {children}
    </div>
  );
}
