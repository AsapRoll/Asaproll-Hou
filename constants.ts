import { ScheduleItem, Partner, Theme } from './types';

export const PARTNERS: Partner[] = [
  { name: "ROYAL LIFE", subtext: "皇家生活" },
  { name: "幸福荟", subtext: "健康 | 快乐 | 财富 | 幸福" },
  { name: "爱莎医疗", subtext: "ARSSA MEDICAL" },
  { name: "咏泰医疗", subtext: "YONGTAI MEDICAL" }
];

export const THEMES: Theme[] = [
  {
    id: "gratitude",
    title: "感恩之宴",
    subtitle: "敬呈初心",
    description: "回首过往，皆是序章",
    details: [
      "时光荏苒，初心如磐。皇家生活集团一路走来，离不开每一位合作伙伴与家人的鼎力支持。",
      "在本次家宴中，我们将共同回顾过往的奋斗历程，重温那些温暖而坚定的瞬间。这不仅是一场答谢晚宴，更是一次心灵的归途。",
      "我们准备了专属的感恩礼遇，向每一位同路人致以最崇高的敬意。愿在未来的日子里，我们依旧并肩同行，共创辉煌。"
    ]
  },
  {
    id: "strategy",
    title: "战略之宴",
    subtitle: "轻体代谢抗衰中心升级",
    description: "科技赋能，焕新生命",
    details: [
      "2026年，爱莎医疗与咏泰医疗将迎来战略级的强强联手，正式发布【轻体代谢抗衰中心】全新升级计划。",
      "我们将引入国际前沿的细胞级抗衰技术与代谢管理系统，打造全生命周期的健康管理闭环。从基因检测到定制化干预，重新定义高端医疗服务标准。",
      "现场将深度解析医疗行业的未来趋势，揭秘如何通过科技手段实现逆龄生长，让健康与美丽触手可及。"
    ]
  },
  {
    id: "cooperation",
    title: "合作之宴",
    subtitle: "百店联盟线上共建模式",
    description: "聚力共赢，百城百店",
    details: [
      "在数字经济时代，单打独斗已成过去。我们全新推出的“百店联盟”线上共建模式，旨在打破传统行业的地域与流量边界。",
      "通过数字化中台赋能，我们将为合作伙伴提供全方位的品牌、流量与技术支持。实现资源共享、渠道互通，构建一个共生共荣的幸福荟心生态。",
      "加入我们，不仅是选择了一个项目，更是选择了一条通往财富与幸福的高速快车道。让我们携手共建，共享万亿级健康市场的红利。"
    ]
  }
];

export const SCHEDULE: ScheduleItem[] = [
  { time: "13:30 - 14:00", title: "新年签到", description: "打卡拍照" },
  { time: "14:00 - 15:00", title: "医疗行业战略", description: "轻体代谢抗衰战略发布" },
  { time: "15:00 - 15:30", title: "2026战略规划", description: "皇家生活集团战略规划" },
  { time: "15:30 - 16:15", title: "幸福合伙人", description: "生态圈合作分析" },
  { time: "16:15 - 17:00", title: "幸福荟心生态", description: "赋能渠道品牌研讨" },
  { time: "17:00 - 17:30", title: "百店联盟", description: "线上共建拓客新模式" },
  { time: "17:30 - 19:00", title: "温情家宴", description: "共赏晚宴" }
];

export const LOCATION = {
  date: "2026.01.23",
  time: "PM.13:30-19:00",
  address: "重庆两江新区幸福广场百林公园D馆幸福荟",
  highlights: ["2026战略框架研讨", "感恩回馈", "精美下午茶", "温情家宴"]
};