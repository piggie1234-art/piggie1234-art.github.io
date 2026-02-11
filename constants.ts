import { Profile, Project } from './types';

export const PROFILE: Profile = {
  name: "朱浩文",
  title: "2026届 机械硕士",
  school: "上海理工大学",
  major: "机械工程",
  focus: "水下图像增强",
  email: "18267164175@163.com",
  wechat: "18267164175",
  github: "piggie1234-art",
  location: "浙江杭州"
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Q233艇水下插拔系统开发",
    description: "使用 Python 结合 PyQt 开发的水下 SUV 充电插拔状态检测系统，实现实时状态监控与反馈。",
    tags: ["Python", "PyTorch", "PyQt", "CAN", "UDP"],
    link: "https://github.com/piggie1234-art/SmartDocking-CAN-Controller.git"
  },
  {
    id: "2",
    title: "双目视觉目标检测与位姿估计",
    description: "结合深度学习目标检测、分割与定位技术，实现高精度的目标三维位姿估计。",
    tags: ["Python", "PyTorch", "Matlab", "Computer Vision"],
    link: "https://github.com/piggie1234-art/ViSion.git"
  },
  {
    id: "3",
    title: "水下图像增强深度学习算法",
    description: "针对水下图像蓝绿偏色及人工照明场景，研发去色偏和去人工光源干扰的增强算法。",
    tags: ["PyTorch", "Deep Learning", "Image Processing", "ECharts"],
    link: "https://github.com/piggie1234-art/DeRetinex.git"
  }
];

export const NAV_LINKS = [
  { name: '关于我', href: '#about' },
  { name: '项目展示', href: '#projects' },
  { name: '联系方式', href: '#contact' },
];