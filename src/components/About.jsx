import React from "react";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          한창 일할 나이에 개발공부 시작했다가 큰 코 다치는 중입니다.
          <br /> 어린친구들과 프로젝트를 하며 여러모로 많이 배우고 있습니다.
          리액트의 ㄹ도 모르는 상태에서 Next.js와 타입스크립트로 프로젝트를
          진행하며, 내가 지금 이걸 이해하는게 맞나? 싶지만 계속 공부하며
          기본기를 다져나가고자 합니다. 하나 둘 사모으는 기술서적을 천천히
          익혀나가고 있습니다. <br />
          맛집을 좋아합니다.
        </p>
        <a
          href="mailto:mshongsmile@gmail.com"
          className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray--300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          mshongsmile@gmail.com
        </a>
      </div>
      <img
        src="/assets/img/profile.jpeg"
        alt="Miso"
        className="w-full md:w-5/12 rounded-lg object-fit py-1"
      />
    </div>
  );
}

export default About;
