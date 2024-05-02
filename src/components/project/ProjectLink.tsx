import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjectLinkProps = {
  LinkRef: string;
  HostRef?: string;
};

const ProjectLink = ({ LinkRef, HostRef }: ProjectLinkProps) => {
  return (
    <>
      <Link href={LinkRef}>
        <Image
          src={"https://img.icons8.com/ios/50/FFFFFF/github--v1.png"}
          alt="search"
          width={40}
          height={40}
          className="lg:w-4 lg:h-4 w-6 h-6"
        />
      </Link>

      {HostRef ? (
        <Link href={HostRef}>
          <Image
            src={"https://img.icons8.com/ios/50/FFFFFF/link--v1.png"}
            alt="search"
            width={40}
            height={40}
            className="lg:w-4 lg:h-4 w-6 h-6"
          />
        </Link>
      ) : (
        <Image
          src={"https://img.icons8.com/ios/50/FFFFFF/link--v1.png"}
          alt="search"
          width={40}
          height={40}
          className="lg:w-4 lg:h-4 w-6 h-6 opacity-40"
        />
      )}
    </>
  );
};

export default ProjectLink;
