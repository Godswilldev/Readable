import { useState, useEffect } from "react";
import styled from "styled-components";

export default function TransitionLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");

  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <Transition>
      <div
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            console.log("fading out");
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
        className={`content ${transitionStage}`}
      >
        {displayChildren}
      </div>
    </Transition>
  );
}

const Transition = styled.div`
  .content {
    opacity: 0;
    transition: 0.5s ease-in-out;
  }
  .fadeIn {
    opacity: 1;
  }
`;
