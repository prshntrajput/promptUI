import ProjectView from "@/modules/projects/components/Project-View";
import React from "react";

const Page = async ({ params }) => {
  const { projectId } = await params;

  return (
    <ProjectView projectId={projectId} />
  );
};

export default Page;