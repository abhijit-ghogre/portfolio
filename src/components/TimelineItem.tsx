import React from "react";
import Technology, { TechnologyName } from "@/components/Technology";
import dayjs from "dayjs";

interface Props {
  startMonth: string;
  endMonth: string;
  companyName: string;
  designation: string;
  technologies: TechnologyName[];
  responsibilities: {
    title: string;
    website?: string;
    description: string;
  }[];
}

const getDurationInYears = (startMonth: string, endMonth: string) => {
  const startDate = dayjs(startMonth, "MMM YYYY");
  const endDate = dayjs(endMonth, "MMM YYYY");
  return Number((endDate.diff(startDate, "month") / 12).toFixed(1));
};

const isPresent = (endMonth: string) => {
  if (dayjs(endMonth, "MMM YYYY").isSame(dayjs(), "month")) {
    return "Present";
  }
  return endMonth;
};

function TimelineItem(props: Props) {
  const {
    startMonth,
    endMonth,
    companyName,
    designation,
    technologies,
    responsibilities,
  } = props;

  return (
    <div className="border-l-8 border-secondary-foreground pb-16">
      <div className="border-t-8 border-primary-foreground pl-5 md:pl-10 relative pt-14">
        <div className="w-8 h-8 rounded-full border-primary-foreground border-8 absolute -left-1 -top-1 transform -translate-x-1/2 -translate-y-1/2 bg-primary" />
        <div className="bg-primary-foreground text-primary p-4 rounded absolute right-0 -top-1 transform -translate-y-1/2 text-center font-medium">
          <div>
            {startMonth} - {isPresent(endMonth)}
          </div>
          <div className="text-sm">
            {getDurationInYears(startMonth, endMonth)} years
          </div>
        </div>
        <div className="font-semibold text-lg text-primary-foreground leading-none">
          {companyName}
        </div>
        <div className="leading-none mt-1">{designation}</div>
        <div className="flex gap-3 mt-3 flex-wrap">
          {technologies.map((name) => {
            return <Technology key={name} name={name} />;
          })}
        </div>
        <div className="mt-5 gap-3 flex flex-col">
          {responsibilities.map((responsibility) => {
            return (
              <div key={responsibility.title}>
                <div className="text-primary-foreground font-semibold">
                  • {responsibility.title}{" "}
                  {responsibility.website && (
                    <>
                      [
                      <a
                        href={responsibility.website}
                        target="_blank"
                        className="text-link underline"
                      >
                        {responsibility.website}
                      </a>
                      ]
                    </>
                  )}
                </div>
                <p
                  className="pl-3"
                  dangerouslySetInnerHTML={{
                    __html: responsibility.description,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
