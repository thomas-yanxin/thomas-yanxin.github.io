# 颜鑫 · Xin Yan

yx20001210@gmail.com · 北京 · [个人主页](https://thomas-yanxin.github.io) · [GitHub](https://github.com/thomas-yanxin)

从事机器人多模态大模型、情感大模型和 Agent 记忆系统研发，负责产品设计、训练数据、模型训练、Harness 集成和评估。GitHub 开源项目累计 **30,000+ stars**。

## 工作经历

### 心言机器人 · 高级算法工程师 ｜ 2026.01 - 至今 · 北京

负责机器人算法架构、xyVL 训练与 SenseMem 开发。

- **xyVL 系列具身基座模型：** 主导端侧机器人视觉与空间理解模型的训练。自研 xyJudge，结合规则过滤与模型裁判，从 45M 跨源样本中自动筛选 18M 组成 xyData，按任务、质量、难度和复杂度配置数据。采用 SFT → On-Policy Distillation → GRPO，依次进行指令微调、知识蒸馏与奖励优化。
- **[SenseMem](https://github.com/SenseMem/SenseMem)：** 发起全模态记忆系统，负责产品设计与开发。记录文本、图像、音频和视频中的经历与用户偏好，为 Personal Agent、Agentic Harness 和具身交互提供长期记忆。

  Memory Kernel 分开存储原始观察和派生知识，按人物身份、时间、空间及来源证据关联记录。人物关系、偏好或环境状态变化时，更新相关记忆并保留修正历史。

  Hybrid Retrieval 检索相关记忆；Context Compiler 按当前任务和上下文预算选择记忆、来源证据与原始媒体，生成结构化上下文。

  截至 2026 年 11 月 12 日，在 MOSAIC、ATM-Bench、Mem-Gallery、LoCoMo-Refined 等记忆基准上取得 **SOTA**。

### 心言集团（测测） · 高级算法工程师 ｜ 2024.03 - 2026.01 · 北京

负责 Xinyuan 系列模型的数据、训练、评估、应用集成与部署。
- **[Xinyuan-LLM-14B](https://huggingface.co/Cylingo/Xinyuan-LLM-14B-0428)：** 主导心理支持与家庭教育对话模型训练，基于 Qwen3-14B-Base 完成领域适配和指令微调。整理 100K+ 心理对话与 1M+ 医疗语料，以共情回应、多轮对话衔接和知识依据作为数据与评估标准。模型已开源。
- **[Xinyuan-VL-2B](https://huggingface.co/Cylingo/Xinyuan-VL-2B)：** 基于 Qwen2-VL-2B-Instruct 完成多模态指令微调，用于家庭陪伴机器人的端侧场景理解与视觉问答。2024 年 9 月位列 OpenCompass Open VLM Leaderboard 的 <4B 参数组 **世界第一**。

### [X-D Lab](https://github.com/X-D-Lab) · Co-founder ｜ 2023.06 - 2024.03 · 上海

- **[MindChat](https://github.com/X-D-Lab/MindChat)：** 联合发起项目并负责模型训练。使用百万级多轮心理对话数据训练共情回应与苏格拉底式问询，发布不同规模的 MindChat-LLM 系列及英文心理评测模型 MindChat-Evaluator，支持私有化部署。GitHub stars 700+。
- **[Sunsimiao](https://github.com/X-D-Lab/Sunsimiao)：** 负责医疗模型的数据和训练。将医学文献、教材、问诊与知识问答整理为百万级中文指令数据，用于知识和对话任务。使用 LoRA / QLoRA 进行参数高效微调，以医学问答和考试任务评估模型，开源发布。

## 技术技能

- **产品与开发：** 需求分析与技术选型、Agent Harness 集成、错误分析与迭代；Python、Bash、Linux、Docker
- **模型训练：** 数据筛选与配比、Model-as-Judge、SFT / DPO / RLHF / GRPO、LoRA / QLoRA；PyTorch、Transformers、DeepSpeed、Megatron
- **Agent 应用：** 多模态记忆、上下文管理、混合检索、RAG、LangChain；LLM、VLM、Omni、空间与具身理解、Video Understanding、vLLM、SGLang、NVIDIA GPU / 昇腾 NPU
- **模型与平台：** Qwen、InternLM、GLM、LLaMA；HuggingFace、ModelScope

## 教育与学术成果

**华东理工大学 · 信息科学与工程学院 · 自动化学士** ｜ 2019.09 - 2023.06

- **合著：**《LangChain 大模型应用开发：从入门到实践》，清华大学出版社，2026 年。
- **论文与知识产权：** 心理大模型、视频理解与图像检索方向**论文 6 篇**；授权实用新型专利 1 项、软件著作权 3 项。

## 荣誉与社区

- **主要奖项：** 2026 灵犀 AI for Mental Health 合成数据赛**一等奖**；2024 中国国际大学生创新大赛铜奖；2023“互联网+”全国铜奖 / 省级金奖；2022“互联网+”全国银奖、第 24 届中国机器人及人工智能大赛全国一等奖
- **社区经历：** Datawhale 成员、Qwen Ambassador、百度飞桨开发者技术专家（PPDE）；飞桨领航团华东地区负责人（2021-2022，覆盖 7 省 50+ 高校）、华东理工大学飞桨团队创始负责人
