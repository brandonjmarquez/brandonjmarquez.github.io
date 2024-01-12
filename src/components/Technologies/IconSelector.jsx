
import { SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiPython, SiTailwindcss, SiTypescript, SiReact, SiNodedotjs, SiExpress, SiMysql, SiMongodb, SiStrapi } from "react-icons/si";

const IconSelector = ({ iconName }) => {
  if (iconName === "c-plus-plus")
    return <SiCplusplus className="text-4xl" />;
  else if (iconName === "html5")
    return <SiHtml5 className="text-4xl" />;
  else if (iconName === "css3")
    return <SiCss3 className="text-4xl" />;
  else if (iconName === "tailwindcss")
    return <SiTailwindcss className="text-4xl" />;
  else if (iconName === "javascript")
    return <SiJavascript className="text-4xl" />;
  else if (iconName === "typescript")
    return <SiTypescript className="text-4xl" />;
  else if (iconName === "react-js")
    return <SiReact className="text-4xl" />;
  else if (iconName === "node-js")
    return <SiNodedotjs className="text-4xl" />;
  else if (iconName === "express-js")
    return <SiExpress className="text-4xl" />;
  else if (iconName === "mysql")
    return <SiMysql className="text-4xl" />;
  else if (iconName === "mongodb")
    return <SiMongodb className="text-4xl" />;
  else if (iconName === "strapi")
    return <SiStrapi className="text-4xl" />;
  else if (iconName === "python")
    return <SiPython className="text-4xl" />;
  else
    return console.log("Icon not found");
};

export default IconSelector;