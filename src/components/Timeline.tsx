import React from "react";
import TimelineItem from "./TimelineItem";
import { TechnologyName } from "@/components/Technology";

const timelineItems = [
  {
    startMonth: "Aug 2022",
    endMonth: "Dec 2023",
    companyName: "Full-Stack Interactive LLP",
    designation: "Senior Software Engineer",
    technologies: [
      "React.js",
      "NEXT.JS",
      "React Native",
      "Node.js",
      "tailwindcss",
      "RadixUi",
      "Prisma",
      "tRPC",
      "strapi",
      "PostgreSQL",
    ] as TechnologyName[],
    responsibilities: [
      {
        title:
          "Boston based product company in Governance, Risk, and Compliance (GRC) domain",
        description:
          "Developed a suite of applications for a Boston based company serving in GRC domain. Their products allow businesses to automate GRC processes using AI and machine learning. The products are built using <span class='font-semibold'>React.js</span> for frontend and <span class='font-semibold'>Node.js</span> with <span class='font-semibold'>PostgreSQL</span> database for backend. The UI components are built using <span class='font-semibold'>RadixUI</span> for accessibility. Database schema is managed using <span class='font-semibold'>Prisma</span> ORM.",
      },
      {
        title: "Ampere Computing",
        website: "https://amperecomputing.com",
        description:
          "Ampere Computing is a semiconductor company that develops ARM-based microprocessors for servers. I helped them develop their main website and various information portals that help them showcase their products and offerings. These products are built using <span class='font-semibold'>Next.JS</span> frontend and a <span class='font-semibold'>Strapi</span> and <span class='font-semibold'>PostgreSQL</span> based backend.",
      },
      {
        title: "Commutec",
        website: "https://commutec.in",
        description:
          "Developed a fleet management system for Commutec. They provide end to end fleet management services and SAAS based employee transportation management platform. They have been selected as Top 10 mobility company by SHELL in 2020 and chosen as top 50 Mobility companies by NASSCOM in 2019. The system is built using <span class='font-semibold'>React.js</span> for frontend and <span class='font-semibold'>Node.js + tRPC</span> with <span class='font-semibold'>MySQL</span> database for backend. The UI/UX components are built using <span class='font-semibold'>RadixUI + tailwindcss</span>. Database schema is managed using <span class='font-semibold'>Prisma</span> ORM.",
      },
    ],
  },
  {
    startMonth: "Oct 2021",
    endMonth: "Aug 2022",
    companyName: "Glance, Inmobi Group",
    designation: "Tech Lead",
    technologies: [
      "React.js",
      "NEXT.JS",
      "React Native",
      "Node.js",
      "PostgreSQL",
    ] as TechnologyName[],
    responsibilities: [
      {
        title: "Glance",
        website: "https://glance.com",
        description:
          "Glance is a lock screen content platform that is a part of Inmobi Group. I worked on Glance’s mobile optimized apps to serve highly performant short video content to the masses. The apps were built using <b>React Native</b> and a custom <b>Android</b> SDK. I also worked on Admin and Staff panels that enabled content upload and delivery of videos and images on Glance’s social media platform.",
      },
      {
        title: "Roposo",
        website: "https://roposo.com",
        description:
          "I was responsible for SEO and page speed optimisation of Inmobi's e-commerce platform called Roposo. The e-commerce platform was built using <b>Next.js</b> and had lakhs of daily active users.",
      },
    ],
  },
  {
    startMonth: "Jan 2020",
    endMonth: "Oct 2021",
    companyName: "Altruist Global Holdings Pvt. Ltd.",
    designation: "Lead Software Engineer",
    technologies: [
      "React.js",
      "Node.js",
      "Laravel",
      "MySQL",
      "Redis",
    ] as TechnologyName[],
    responsibilities: [
      {
        title: "Algo trading platforms",
        description:
          "I worked with AGHPL to to develop a suite of cloud applications mostly based on <b>Laravel PHP</b> and <b>React.js</b> in the finance and stock market domain. Developed <b>event-bus</b> patterns to handle async communication between multiple <b>microservices</b>. Build <b>queueing</b> and <b>caching</b> systems using <b>Redis</b> to serve high traffic endpoints. Built data analysis systems for back-testing of historical data.",
      },
    ],
  },
  {
    startMonth: "Sep 2016",
    endMonth: "Jan 2020",
    companyName: "Shop101",
    designation: "Senior Software Engineer",
    technologies: [
      "React.js",
      "Node.js",
      "NEXT.JS",
      "Vue.js",
      "React Native",
    ] as TechnologyName[],
    responsibilities: [
      {
        title: "Shop101",
        website: "https://shop101.com",
        description:
          "Shop101 is a social commerce platform that allows users to create their own online store and sell products. I worked on the core platform that powers the mobile and web apps. The user checkout journey was built using <b>React.js</b> and <b>Node.js</b>. The seller and admin panels were developed using <b>Vue.js</b>. Shop101 later got <b>acquired by Glance</b>, Inmobi Group.",
      },
    ],
  },
  {
    startMonth: "June 2014",
    endMonth: "Sep 2016",
    companyName: "SpeakingLamp Technologies Pvt Ltd",
    designation: "Founder",
    technologies: [
      "React.js",
      "Vue.js",
      "Laravel",
      "MySQL",
      "Redis",
    ] as TechnologyName[],
    responsibilities: [
      {
        title: "Multiple SaaS products",
        description:
          "SpeakingLamp was a web development agency that I started with my friends. We developed web and mobile applications for clients across the globe. We mainly used <b>React.js</b> and <b>Vue.js</b> for frontend and <b>Laravel</b> for backend.",
      },
    ],
  },
  {
    startMonth: "May 2013",
    endMonth: "June 2014",
    companyName: "Inscripts (I) Pvt. Ltd.",
    designation: "Associate Software Engineer",
    technologies: ["Laravel", "MySQL", "Redis"] as TechnologyName[],
    responsibilities: [
      {
        title: "CometChat",
        website: "https://cometchat.com",
        description:
          "Inscripts is a software development company that develops chat and collaboration software. I worked on their flagship product called CometChat. It is a chat SDK that allows developers to add chat functionality to their apps. I worked on the core product and developed multiple plugins to integrate CometChat with various third party apps.",
      },
      {
        title: "Multiple SaaS products",
        description:
          "I worked on multiple SaaS products developed by Inscripts. These products were mainly built using <b>Laravel</b>, <b>MySQL</b> and <b>WebSockets</b>.",
      },
    ],
  },
];

function Timeline() {
  return (
    <div className="pt-20">
      <div className="px-5 text-3xl font-light text-primary-foreground">
        Work
      </div>
      {timelineItems.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
      <div className="w-8 h-8 rounded-full border-primary-foreground border-8 bg-primary transform -translate-x-3" />
    </div>
  );
}

export default Timeline;
