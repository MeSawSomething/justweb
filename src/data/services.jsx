import { MdWeb } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

export default [
  {
    title: "웹 개발",
    description:
      "5개월간 2개의 팀프로젝트 - 첫프로젝트는 클론코딩, 두번째로는 기업연계 멘토링 프로젝트- 를 수행했습니다.",
    icon: <MdWeb className="w-full h-full" />,
  },
  {
    title: "협업을 위한 커뮤니케이션",
    description:
      "주어진 시간내에 완료해야하는 프로젝트. 어떤 환경에서도 해결과제를 위해 팀과 소통하는 법을 배웠습니다.",
    icon: <FaRegHandshake className="w-full h-full" />,
  },
  {
    title: "툴, 협업 방식에 대한 고민",
    description:
      "협업을 위한 깃 컨벤션, 어떤 패키지 매니저를 고를까? 왜 Next.js를 써야할까? 고민하는 법을 배웠습니다.",
    icon: <VscCode className="w-full h-full" />,
  },
];
