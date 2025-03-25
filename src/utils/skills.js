import { 
  FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3, FaSass, FaFigma, FaBootstrap, FaGitAlt, 
  FaPython, FaJava   
} from "react-icons/fa";

import { 
  SiNextdotjs, SiGraphql, SiMongodb, SiMysql, SiRedux 
} from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";
export const skills = [
  {
    category: "using now",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3, color: "#1572B6" },
      { name: "Sass", icon: FaSass, color: "#CC6699" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    ]
  },
  {
    category: "learning",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
      { name: "TypeScript", icon: SiNextdotjs, color: "#3178C6" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ]
  },
  {
    category: "others",
    skills: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "C++", icon: PiFileCpp, color: "#00599C" }
    ]
  }
];
