"use client";

import React from "react";
import ExternalLink from "@/components/ExternalLink";
import { FaGithub, FaLinkedin, FaQuora, FaStackOverflow } from "react-icons/fa";
import * as Tooltip from "@radix-ui/react-tooltip";

interface Props {
  className?: string;
}

function SocialActions(props: Props) {
  const { className = "" } = props;
  return (
    <div className={className}>
      <Tooltip.Provider delayDuration={0}>
        <ExternalLink
          icon={<FaGithub />}
          href="https://github.com/abhijit-ghogre"
          tooltip="Github"
        />
        <ExternalLink
          icon={<FaLinkedin />}
          href="https://www.linkedin.com/in/abhijitghogre"
          color="#0C66C2"
          tooltip="LinkedIn"
        />
        <ExternalLink
          icon={<FaStackOverflow />}
          href="https://stackoverflow.com/users/2455401/abhijit"
          color="#E77008"
          tooltip="StackOverflow"
        />
        <ExternalLink
          icon={<FaQuora />}
          href="https://www.quora.com/profile/Abhijit-Ghogre"
          color="#B92B26"
          tooltip="Quora"
        />
      </Tooltip.Provider>
    </div>
  );
}

export default SocialActions;
