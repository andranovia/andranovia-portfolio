import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjectLinkProps = {
  LinkRef: string;
};

const ProjectLink = ({ LinkRef }: ProjectLinkProps) => {
  return (
    <>
      <Link href={LinkRef}>
        <Image
          src={"https://img.icons8.com/ios/50/FFFFFF/github--v1.png"}
          alt="search"
          width={40}
          height={40}
          className="w-4 h-4"
        />
      </Link>
      <Link href={LinkRef}>
        <Image
          src={"https://img.icons8.com/ios/50/FFFFFF/link--v1.png"}
          alt="search"
          width={40}
          height={40}
          className="w-4 h-4"
        />
      </Link>
    </>
  );
};

export default ProjectLink;