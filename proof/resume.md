# 颜鑫 Xin Yan

yx20001210@gmail.com 北京 [个人主页](https://thomas-yanxin.github.io) [GitHub](https://github.com/thomas-yanxin)

将产品需求转化为训练与评测目标，主导具身多模态模型研发，搭建 Agentic Harness，用评测结果和用户反馈迭代模型与系统。

曾带领 **10 人算法与工程团队**交付多个多模态大模型并推动开源。发起和参与的开源项目累计获 **30,000+ GitHub Stars**。

## 工作经历

### 心言机器人 高级算法工程师 ｜ 2026.01 - 至今 北京

- **xyVL：** 主导具身模型训练路线，构建 **xyJudge**，用规则校验 Schema 和语言、检测重复样本，由模型裁判标注质量和难度。通过 **xyData** 将 50+ 数据集的约 4500 万条原始样本治理为 **1800 万条精选训练样本**，按任务、难度与训练阶段设计 Data Mixture。搭建 SFT → On-Policy Distillation → GRPO 训练流程，为环境理解、导航与规划设计奖励，产出 **xyVL** 具身原生多模态基座模型。
- **[SenseMem](https://github.com/SenseMem/SenseMem)：** 发起 **Agentic Omni-modal ContextOS**，主导产品定义与 **Memory Kernel** 架构及实现，为 Personal Agent、Agentic Harness 和具身交互提供长期记忆与任务上下文。

  统一文本、图像、音频与视频契约，分层管理原始观察与派生知识。以身份、时空、证据与版本约束更新，支持审计和回滚。Hybrid Retrieval 结合语义、关键词与人物时空约束。Context Compiler 按任务与预算编排记忆、媒体与证据，标示冲突和缺口。

  截至 2026.11.12，在权威 Memory Benchmarks 上取得 **SOTA**，覆盖 MOSAIC、ATM-Bench、Mem-Gallery、LoCoMo-Refined。

### 心言集团 高级算法工程师 ｜ 2024.03 - 2026.01 北京

统筹 **10 人团队**交付 Xinyuan 系列，主导数据治理、**Mid-Training 与 Post-Training**、偏好对齐与评测部署。累计下载 **2 万+**。
- **[Xinyuan-LLM-14B](https://huggingface.co/Cylingo/Xinyuan-LLM-14B-0428)：** 面向心理支持对话，将多轮连贯性、共情表达与知识依据纳入行为评测。基于 Qwen3-14B-Base，组织 100K+ 心理对话和 1M+ 医疗语料开展领域适配与 Post-Training，依据失败样本和用户反馈迭代。
- **[Xinyuan-VL-2B](https://huggingface.co/Cylingo/Xinyuan-VL-2B)：** 2024 年 9 月在 OpenCompass & Hugging Face Open VLM Leaderboard 的 **<4B 参数组排名第一**。面向端侧视觉理解，选用 Qwen2-VL-2B-Instruct，以 **500 万+ 多模态样本**开展 Vision-Language Post-Training。

### [X-D Lab](https://github.com/X-D-Lab) 联合创始人 ｜ 2023.06 - 2024.03 上海

- **[MindChat](https://github.com/X-D-Lab/MindChat)：** 联合发起并负责心理对话模型 Post-Training，以百万级多轮语料训练共情回应与苏格拉底式问询，协同数据、评测与应用集成。开源可私有部署的 MindChat-LLM 系列与英文评测模型 MindChat-Evaluator，获 700+ GitHub Stars。
- **[Sunsimiao](https://github.com/X-D-Lab/Sunsimiao)：** 构建百万级医学指令集，以 LoRA、QLoRA 微调，以医学问答与考试评估模型，开源模型与部署材料。

## 其他项目

- **[FateBridge](https://github.com/thomas-yanxin/FateBridge)：** 发起并开发面向 Agentic Harness 的**情感计算引擎**，通过共享 Tool Catalog 与执行层交付术数与占星领域的 **92 个 CLI 工具**及 MCP 与 REST API。对历法边界和时区计算开展回归校验，将计算结果关联至规则来源。
- **[亲百问](https://thomas-yanxin.github.io/#qianye)：** 主导公益家庭记忆产品定义与微信小程序研发，以 CloudBase、录音和 ASR 支撑“讲述、核对、入册”。通过异步转写和草稿恢复支持中断后继续，保留原始记录，由讲述者核对可选的 AI 润色版本，按家庭权限分享。

## 技术技能

- **产品与工程：** 需求分析、技术选型、架构设计、Web 与 App 全栈开发、Agentic Harness 集成；Python、Bash、Linux、Docker
- **模型与数据：** Mid-Training、Post-Training；SFT, DPO, OPD, GRPO；LoRA、QLoRA；PyTorch, Transformers, DeepSpeed, Megatron
- **Agentic 系统：** Context Engineering、Omni Memory、混合检索、RAG、LangChain、MCP；vLLM、SGLang、NVIDIA GPU

## 教育与学术成果

- **华东理工大学 信息科学与工程学院 自动化学士** ｜ 2019.09 - 2023.06
- **合著：**《LangChain 大模型应用开发：从入门到实践》，清华大学出版社，2026 年。
- **论文与知识产权：** 论文发表于 [IEEE TIFS、TCE、CISCE 等](https://scholar.google.com/citations?user=WYuXNL0AAAAJ&hl=zh-CN)；授权实用新型专利 1 项、软件著作权 3 项。

## 荣誉与社区

- **企业导师：** 北京大学信息科学技术学院 本科实验班“信班”，2025.02 - 2025.08
- **主要奖项：** MindChat 团队获 2025 合成数据大赛灵溪 AI for Mental Health 主题赛**一等奖**；2024 中国国际大学生创新大赛铜奖；2023“互联网+”全国铜奖、省级金奖；2022“互联网+”全国银奖、第 24 届中国机器人及人工智能大赛全国一等奖
- **社区经历：** Datawhale 成员、Qwen Ambassador、百度飞桨开发者技术专家；2021-2022 年任飞桨领航团华东地区负责人，覆盖 7 省 50+ 高校；华东理工大学飞桨团队创始负责人
