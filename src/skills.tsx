import "./skills.scss";
import * as React from "react";
import Section from "./section";
const levels = [1, 2, 3, 4, 5];

export interface Skill {
  icons: string[];
  name: string;
  years: number;
  level: number;
  note?: string;
}

interface Props {
  skills: Skill[];
}

export const Skills = (props: Props) => (
  <Section id="skills">
    <div className="technical">
      <h1>Technical Skills</h1>
      <p>
        I truly enjoy learning new tools and techniques to efficiently deliver
        more stable and effective solutions. I study every day.
      </p>
      <table>
        <tr>
          <th></th>
          <th>Yrs</th>
          <th>Expertise</th>
          <th className="note"></th>
        </tr>
        {props.skills.map(s => (
          <tr>
            <td className="name">
              <div>
                <p>{s.name}</p>
                <div>
                  {s.icons.map(i => (
                    <img src={"./img/" + i} />
                  ))}
                </div>
              </div>
            </td>
            <td className="years">{ageism(s.years)}</td>
            <td className="level">
              <ul>
                {levels.map(l => (
                  <li className={s.level >= l ? "on" : undefined} />
                ))}
              </ul>
            </td>
            <td className="note">{s.note}</td>
          </tr>
        ))}
      </table>
    </div>
    <div className="leadership">
      <h1>Leadership Skills</h1>
      <p>
        Most of my career has been in leadership positions, from team lead to
        supervisor, software development manager and enterprise-level architect.
      </p>
      <img className="cpm" src="./img/cpm.jpg" />
      <p>
        As the development manager over a team of DBAs and a team of
        programmers, I was sponsored by the organization for the three-year{" "}
        <a href="https://en.wikipedia.org/wiki/Certified_Public_Manager">
          Certified Public Manager
        </a>{" "}
        program, which I completed in December, 2009.
      </p>
      <p>
        I also hold certificates from Boise State University's Center for
        Professional Development in Project Management and Applied Leadership.
      </p>
      <p>
        As a leader in organizations that generate or utilize federal and
        personal health data, I've been responsible to ensure critical policy
        compliance and respond to audit findings.
      </p>
      <p>
        My favorite part of leadership is passing along what I've learned,
        seeing others grow.
      </p>
    </div>
  </Section>
);

const ageism = (yrs: number): string => (yrs > 10 ? "10+" : yrs.toString());

export default Skills;
