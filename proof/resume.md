# 颜鑫 Xin Yan

yx20001210@gmail.com 北京 [个人主页](https://thomas-yanxin.github.io) [GitHub](https://github.com/thomas-yanxin)

从产品需求出发，统筹模型 Post-Training、Agentic Harness 与工程评测，交付具身智能与 Omni-modal ContextOS。发起和参与的开源项目累计 **30,000+ GitHub Stars**。

## 工作经历

### 心言机器人 高级算法工程师 ｜ 2026.01 - 至今 北京

负责机器人算法架构，主导 xyVL 具身原生多模态基座模型项目及 SenseMem ContextOS 研发。

- **xyVL：** 构建统一具身 Rubrics System **xyJudge**，以规则与模型裁判执行结构化评估与标注；建设全流程自动化多模态数据治理系统 **xyData**，整合 **50+ 数据集、约 4500 万条原始样本**，经 Schema 统一、质量筛选与自动标注形成 **1800 万条精选样本**，按任务、难度与训练阶段设计 Data Mixture。在两者基础上搭建 SFT → On-Policy Distillation → GRPO 具身原生模型训练 Pipeline，围绕环境理解、导航与规划设计奖励，最终产出 **xyVL** 多模态基座模型。
- **[SenseMem](https://github.com/SenseMem/SenseMem)：** 发起 **Agentic Omni-modal ContextOS**，主导产品定义与 Memory Kernel 实现，为个性化助手、Agentic Harness 和具身交互提供长期记忆与任务上下文。

  统一文本、图像、音频与视频内容契约，按身份、时空、证据与版本关联原始观察和知识，支持可审计、可回滚的更新。

  Hybrid Retrieval 结合语义、关键词与人物时空约束；Context Compiler 按任务及上下文预算编排记忆、媒体与证据。

  截至 2026 年 11 月 12 日，在 MOSAIC、ATM-Bench、Mem-Gallery、LoCoMo-Refined 等记忆基准上取得 **SOTA**。

### 心言集团 高级算法工程师 ｜ 2024.03 - 2026.01 北京

统筹 **10 人**算法与工程团队，主导 Xinyuan 系列 **Mid-Training 与 Post-Training**、数据治理、偏好优化与评测部署；累计下载 **2 万+**。
- **[Xinyuan-LLM-14B](https://huggingface.co/Cylingo/Xinyuan-LLM-14B-0428)：** 基于 Qwen3-14B-Base，组织 100K+ 心理对话与 1M+ 医疗语料，完成领域适配与 Post-Training；围绕多轮连贯性、共情表达与知识依据开展行为评测，以失败样本和用户反馈驱动迭代。
- **[Xinyuan-VL-2B](https://huggingface.co/Cylingo/Xinyuan-VL-2B)：** 基于 Qwen2-VL-2B-Instruct，以 **500 万+ 多模态样本**开展 Vision-Language Post-Training，面向端侧视觉理解。2024 年 9 月在 OpenCompass & Hugging Face Open VLM Leaderboard 的 **<4B 参数组排名第一**。

### [X-D Lab](https://github.com/X-D-Lab) Co-Founder ｜ 2023.06 - 2024.03 上海

- **[MindChat](https://github.com/X-D-Lab/MindChat)：** 联合发起并负责心理对话模型 Post-Training，协同数据、评测与应用集成。基于百万级心理对话训练共情回应与苏格拉底式问询，开源 MindChat-LLM 系列及英文评测模型 MindChat-Evaluator，支持私有化部署；GitHub Stars 700+。
- **[Sunsimiao](https://github.com/X-D-Lab/Sunsimiao)：** 构建百万级医学指令集，以 LoRA、QLoRA 参数高效微调，开展医学问答与考试评测，开源模型与部署材料。

## 其他项目

- **[FateBridge](https://github.com/thomas-yanxin/FateBridge)：** 面向 Agentic Harness 发起并开发 **Domain Computation Engine**，提供术数与占星领域的 **92 个 CLI 工具**及 MCP 与 REST API。统一 Tool Catalog 与执行层，对历法与时区计算开展回归校验，关联规则来源，提供可追溯的领域上下文。
- **[亲百问](https://thomas-yanxin.github.io/#qianye)：** 主导公益家庭记忆产品与微信小程序研发，以 CloudBase、录音和 ASR 串联“讲述、核对、入册”；支持异步处理、草稿恢复与家庭权限，保留原始记录，由讲述者核对可选 AI 润色。

## 技术技能

- **产品与工程：** 需求分析、技术选型、架构设计、Web 与 App 全栈开发、Agentic Harness 集成；Python、Bash、Linux、Docker
- **模型与数据：** Mid-Training、Post-Training；SFT, DPO, OPD, GRPO；LoRA、QLoRA；PyTorch, Transformers, DeepSpeed, Megatron
- **Agentic 系统：** Context Engineering、Omni Memory、混合检索、RAG、LangChain、MCP；vLLM、SGLang、NVIDIA GPU、昇腾 NPU

## 教育与学术成果

**华东理工大学 信息科学与工程学院 自动化学士** ｜ 2019.09 - 2023.06

- **合著：**《LangChain 大模型应用开发：从入门到实践》，清华大学出版社，2026 年。
- **论文与知识产权：** 论文发表于 [IEEE TIFS、TCE、CISCE 等](https://scholar.google.com/citations?user=WYuXNL0AAAAJ&hl=zh-CN)；授权实用新型专利 1 项、软件著作权 3 项。

## 荣誉与社区

- **企业导师：** 北京大学信息科学技术学院 本科实验班“信班”，2025.02 - 2025.08
- **主要奖项：** MindChat 团队获 2025 合成数据大赛灵溪 AI for Mental Health 主题赛**一等奖**；2024 中国国际大学生创新大赛铜奖；2023“互联网+”全国铜奖、省级金奖；2022“互联网+”全国银奖、第 24 届中国机器人及人工智能大赛全国一等奖
- **社区经历：** Datawhale 成员、Qwen Ambassador、百度飞桨开发者技术专家；2021-2022 年任飞桨领航团华东地区负责人，覆盖 7 省 50+ 高校；华东理工大学飞桨团队创始负责人
