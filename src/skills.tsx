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
   <div className="technical">
      <h1>Technical Skills</h1>
      <p>Some paragraph</p>
      <table>
         <tr>
            <th>Language or Platform</th>
            <th>Yrs</th>
            <th>Expertise</th>
            <th className="note"></th>
         </tr>
      { props.skills.map(s =>
         <tr>
            <td className="name">
               <div>
                  <p>{s.name}</p>
                  <div>{s.icons.map(i => <img src={"./img/" + i}/>)}</div>
               </div>
            </td>
            <td className="years">{s.years}</td>
            <td className="level">
               <ul>{ levels.map(l => <li className={s.level >= l ? "on" : null}/> )}</ul>
            </td>
            <td className="note">{s.note}</td>
         </tr>
      )}
      </table>
   </div>
   <div className="leadership">
      <h1>Leadership Skills</h1>
      <p>Leadership</p>
      <ul>
         <li><img src="./img/cpm.jpg"/>
            <a href="https://en.wikipedia.org/wiki/Certified_Public_Manager">Certified Public Manager</a></li>
      </ul>
   </div>
</Section>;

export default Skills;