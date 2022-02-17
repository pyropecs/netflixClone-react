import { useState, useContext, createContext } from "react";

import {
  Container,
  Title,
  Item,
  Inner,
  Header,
  Body,
} from "./styles/accordian";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggle, setToggle] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggle, setToggle } = useContext(ToggleContext);

  return (
    <Header
      onClick={() => setToggle((prevToggleShow) => !prevToggleShow)}
      {...restProps}
    >
      {children}
      {toggle ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordianBody({ children, ...restProps }) {
  const { toggle } = useContext(ToggleContext);
  return (
    <Body className={toggle ? "open" : "closed"} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};
