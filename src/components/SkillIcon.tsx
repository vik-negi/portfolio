import {
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiBootstrap,
  SiMui,
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPython,
  SiFlask,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiAndroidstudio,
  SiTensorflow,
  SiJupyter,
  SiGooglecolab,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiNetlify,
  SiPostman,
  SiFigma,
  SiApachekafka,
  SiSocketdotio,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { DiVisualstudio } from "react-icons/di";
import { Cloud, Layers, Radio, Split, Plug, Smartphone, Sparkles } from "lucide-react";
import type { IconType } from "react-icons";
import type { SkillIcon } from "@/data/portfolio";

const ICONS: Record<SkillIcon, IconType> = {
  react: SiReact,
  redux: SiRedux,
  nextjs: SiNextdotjs,
  html5: SiHtml5,
  css3: SiCss,
  javascript: SiJavascript,
  bootstrap: SiBootstrap,
  mui: SiMui,
  flutter: SiFlutter,
  nodejs: SiNodedotjs,
  express: SiExpress,
  graphql: SiGraphql,
  python: SiPython,
  flask: SiFlask,
  django: SiDjango,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  aws: Cloud,
  docker: SiDocker,
  java: FaJava,
  androidstudio: SiAndroidstudio,
  tensorflow: SiTensorflow,
  jupyter: SiJupyter,
  googlecolab: SiGooglecolab,
  scikitlearn: SiScikitlearn,
  git: SiGit,
  github: SiGithub,
  netlify: SiNetlify,
  vscode: DiVisualstudio,
  postman: SiPostman,
  figma: SiFigma,
  kafka: SiApachekafka,
  socketio: SiSocketdotio,
  caching: Layers,
  pubsub: Radio,
  sharding: Split,
  platformchannels: Plug,
  nativemobile: Smartphone,
  animations: Sparkles,
};

export function SkillIconGlyph({
  icon,
  className,
}: {
  icon: SkillIcon;
  className?: string;
}) {
  const Icon = ICONS[icon];
  return <Icon className={className} />;
}
