import React from "react";
import { FaLaravel, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import {
  TbBrandNextjs,
  TbBrandRadixUi,
  TbBrandReactNative,
} from "react-icons/tb";
import { SiPrisma, SiRedis, SiStrapi, SiTrpc } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export type TechnologyName =
  | "React.js"
  | "NEXT.JS"
  | "React Native"
  | "Node.js"
  | "tailwindcss"
  | "RadixUi"
  | "Prisma"
  | "tRPC"
  | "PostgreSQL"
  | "strapi"
  | "Laravel"
  | "MySQL"
  | "Redis"
  | "Vue.js";

interface Props {
  name: TechnologyName;
}

const getIcon = (name: TechnologyName) => {
  switch (name) {
    case "React.js":
      return <FaReact />;
    case "PostgreSQL":
      return <BiLogoPostgresql />;
    case "NEXT.JS":
      return <TbBrandNextjs />;
    case "React Native":
      return <TbBrandReactNative />;
    case "Node.js":
      return <FaNodeJs />;
    case "tailwindcss":
      return <BiLogoTailwindCss />;
    case "RadixUi":
      return <TbBrandRadixUi />;
    case "Prisma":
      return <SiPrisma />;
    case "tRPC":
      return <SiTrpc />;
    case "strapi":
      return <SiStrapi />;
    case "Laravel":
      return <FaLaravel />;
    case "MySQL":
      return <GrMysql />;
    case "Redis":
      return <SiRedis />;
    case "Vue.js":
      return <FaVuejs />;
  }
};

function Technology(props: Props) {
  const { name } = props;
  return (
    <div className="flex items-center gap-1 text-xl">
      {getIcon(name)}
      <div className="text-sm">{name}</div>
    </div>
  );
}

export default Technology;
