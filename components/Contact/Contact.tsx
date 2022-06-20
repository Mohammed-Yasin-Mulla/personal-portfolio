import React from "react";
interface Props {
  children: React.ReactNode;
}
export default function Contact(props: Props) {
  const { children } = props;
  return (
    <div style={{ height: "50vh", color: "white", padding: "0 150px" }}>
      {children}
    </div>
  );
}
