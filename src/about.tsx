import "./about.scss";
import * as React from "react";
import Section from "./section";

export interface Item {
  title: string;
  __html: string;
}

interface Props {
  list: Item[];
  columns: number;
}

export const About = (props: Props) => {
  if (props.list.length == 0) {
    return null;
  }
  if (props.columns < 1) {
    props.columns = 1;
  }

  const columns: JSX.Element[] = [];
  const perColumn = Math.round(props.list.length / props.columns);

  for (let i = 0; i < props.columns; i++) {
    const start = i * perColumn;
    columns.push(dict(props.list.slice(start, start + perColumn)));
  }
  return <Section className="about">{columns}</Section>;
};

const dict = (items: Item[]) => (
  <dl>
    {items.map(i => [
      <dt>{i.title}</dt>,
      <dd dangerouslySetInnerHTML={i}></dd>
    ])}
  </dl>
);

export default About;
