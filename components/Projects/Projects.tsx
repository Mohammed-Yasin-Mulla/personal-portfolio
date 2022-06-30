import { ProjectDetails } from "./ProjectDetails";
import React from "react";

import styled from "styled-components";
import TitleSection from "../Common/TitleSection";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
  margin-bottom: 5rem;
`;

export default function Projects() {
  return (
    <Wrapper>
      <TitleSection number="03" title="Projects" />
      <ProjectDetails title="Hello There" description="HELLO" index={1} />
      <ProjectDetails title="Hello There" description="HELLO" index={2} />
      <ProjectDetails title="Hello There" description="HELLO" index={3} />
    </Wrapper>
  );
}
