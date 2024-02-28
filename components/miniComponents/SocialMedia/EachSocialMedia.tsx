import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

interface EachSocialMediaProps {
  url: string;
  media: "facebook" | "instagram" | "linkedin";
}

export default function EachSocialMedia({ url, media }: EachSocialMediaProps) {
  const iconMap: { [key in EachSocialMediaProps["media"]]: JSX.Element } = {
    instagram: <FaInstagram />,
    facebook: <FaFacebook />,
    linkedin: <FaLinkedin />,
  };

  const IconComponent = iconMap[media];

  return <Link href={url}>{IconComponent}</Link>;
}
