import "./skills.scss";
import * as React from "react";
import Section from "./section";

export interface Skill {
   icons:string[];
   name:string;
   years:number;
   level:number;
   note?:string;
}

interface Props {
   skills:Skill[];
}

export const Skills = (props:Props) => <Section className="skills">
   <table>
      <tr>
         <th colSpan={2}>Language or Platform</th>
         <th>Years</th>
         <th>Skill Level</th>
         <th>Notes</th>
      </tr>
   { props.skills.map(s =>
      <tr>
         <td>icons</td>
         <td className="name">{s.name}</td>
         <td className="years">{s.years}</td>
         <td className="level">{s.level}</td>
         <td className="note">{s.note}</td>
      </tr>
   )}
   </table>
</Section>;

export default Skills;