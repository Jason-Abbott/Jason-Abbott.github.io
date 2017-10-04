import "./skills.scss";
import * as React from "react";
import Section from "./section";
const levels = [1, 2, 3, 4, 5];

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
         <th>Expertise</th>
         <th>Notes</th>
      </tr>
   { props.skills.map(s =>
      <tr>
         <td className="icon">{s.icons.map(i => <img src={"./img/" + i}/>)}</td>
         <td className="name">{s.name}</td>
         <td className="years">{s.years}</td>
         <td className="level">
            <ul>{ levels.map(l => <li className={s.level >= l ? "on" : null}/> )}</ul>
         </td>
         <td className="note">{s.note}</td>
      </tr>
   )}
   </table>
</Section>;

export default Skills;