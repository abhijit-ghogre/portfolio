import React from "react";

const items = [
  {
    year: "2013",
    title: "Bachelor of Engineering - Computer Engineering",
    institution:
      "Pillai’s Institute of Information Technology, University of Mumbai",
  },
  {
    year: "2009",
    title: "Higher Secondary Education",
    institution: "Mahatma Junior College, Maharashtra State Board",
  },
  {
    year: "2007",
    title: "Primary and Secondary Education",
    institution:
      "Mahatma School of Academics and Sports, Maharashtra State Board",
  },
];

function Education() {
  return (
    <div className="px-8 relative -top-8">
      <div className="text-3xl font-light text-primary-foreground pb-4">
        Education
      </div>
      {items.map((eduction) => {
        return (
          <div
            className="flex space-x-2 divide-x flex-wrap my-4"
            key={eduction.year}
          >
            <div className="font-medium px-2 text-primary-foreground">
              • {eduction.year}
            </div>
            <div className="font-semibold px-2 text-secondary-foreground">
              {eduction.title}
            </div>
            <div className="px-2 text-primary-foreground">
              {eduction.institution}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
