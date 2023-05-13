import React from "react";
import SectionTitle from "./SectionTitle";
import WorkItems from "./WorkItem";
import works from "../data/works";

function Works() {
  return (
    <div className="py-12">
      <SectionTitle id="works">프로젝트</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {works.map(work => (
          <WorkItems 
            key={work.title} 
            imgUrl={work.imgUrl} 
            title={work.title}
            tech={work.tech}
            workUrl={work.workUrl}
          >
          </WorkItems>
        ))}
      </div>
    </div>
  );
}

export default Works;
