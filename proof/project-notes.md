# Xin Yan：项目脉络与技术判断

这份说明是简历的展开材料，用于保留项目动机、关键取舍与成果之间的联系。简历主稿见 [resume.md](resume.md)。

## 可以贯穿各个项目的主线

Xin Yan 的工作围绕人与 AI 的持续交互展开：从心理陪伴、医学知识和文档问答进入模型与应用研发，再走向机器人感知、长期记忆和任务上下文系统。技术选择始终要回答实际问题：用户需要怎样的反馈，模型需要什么知识与交互能力，部署条件允许多大规模，以及系统怎样随使用持续改进。

这条主线体现了三种相互连接的能力：识别产品问题并形成技术判断；把判断落实为数据、模型和系统设计；通过评估、交付和开放生态延伸项目价值。

## 心言机器人 / xyVL：从端侧约束组织能力建设

**起点与判断。** 机器人需要理解环境并参与具身交互，模型规模、设备开销和任务能力必须一起考虑。xyVL 的研发路线把数据质量、任务配比与后训练放在同一条流程里，使模型研发围绕端侧任务展开。

**实现与推进。** xyJudge 将启发式规则与模型裁判结合，对跨源样本进行质量、难度和复杂度等结构化标注；xyData 据此组织训练数据，并按任务分布、难度和训练阶段配置数据。SFT、On-Policy Distillation 和 GRPO 分别承接指令遵循、教师知识迁移与任务奖励优化。

**结果与应呈现的贡献。** 45M 原始样本形成 18M 精选训练样本，数据体系和后训练流程共同支撑 xyVL 系列。简历要突出算法路线、数据系统和训练组织的主导作用，以及它们为什么服务于机器人产品。

材料：[算法流程图](../images/xinyan-robot-xyvl-pipeline.png)、[本人 2025 年访谈](https://news.sina.com.cn/sx/2025-04-30/detail-ineuxrwv4808216.shtml)。

## Xinyuan-LLM：把交互质量变成研发标准

**起点与判断。** 心理支持与教育对话需要共情表达、多轮连续性和领域知识。模型的中文与通用能力、部署生态和推理成本，也会直接影响产品方案。因此，领域训练需要与基座选型、评估和应用部署共同推进。

**实现与推进。** 以 Qwen3-14B-Base 为基础，组织 100K+ 心理对话与 1M+ 医疗语料治理、领域适配和指令微调，并将真实交互需求落实为评价维度。

**结果与应呈现的贡献。** Xinyuan-LLM-14B 形成公开的领域模型及推理部署入口。个人贡献应覆盖业务需求如何进入训练、选型与评估，而不局限于执行一次微调。

材料：[官方模型卡](https://huggingface.co/Cylingo/Xinyuan-LLM-14B-0428)、[本人 2025 年访谈](https://news.sina.com.cn/sx/2025-04-30/detail-ineuxrwv4808216.shtml)。

## Xinyuan-VL：让模型规模与部署生态服务产品

**起点与判断。** 家庭陪伴机器人需要端侧视觉理解。模型的视觉能力、参数规模及其训练和推理生态，都会影响技术选型与后续适配。

**实现与推进。** 基于 Qwen2-VL-2B-Instruct 进行多模态指令微调，沿用其模型与推理接口，让训练产物能够接入现有工具链。

**结果与应呈现的贡献。** 2024 年 9 月位列 OpenCompass Open VLM Leaderboard 的 <4B 参数组第一。结果与小参数模型路线、部署适配和家庭陪伴产品需求共同构成一个完整案例。

材料：[官方模型卡](https://huggingface.co/Cylingo/Xinyuan-VL-2B)、[当前个人主页](../_pages/about.md)。

## MindChat：由陪伴需求走向模型与交付选择

**起点与判断。** 项目起于 Xin Yan 与老师对家人陪伴问题的讨论，随后落到心理支持与对话体验。私有化需求、算力条件和模型生态进一步影响基座、模型尺寸和交付形式。

**实现与推进。** Xin Yan 参与项目发起并负责模型训练，将共情表达与苏格拉底式问询作为领域训练重点。团队基于百万级多轮语料，围绕 Qwen、InternLM 等基座发布不同尺寸模型，并形成英文心理评测模型。

**结果与应呈现的贡献。** 0.5B / 1.8B / 4B / 7B / 14B 系列及 MindChat-Evaluator-EN-1_8B 覆盖不同用途和算力选择，在三个平台交付；项目累计 715+ stars。这个案例体现了从现实需求提出问题，再将需求落实为模型训练和部署方案的过程。

材料：[本人 2023 年讲述](https://news.sciencenet.cn/htmlnews/2023/12/513458.shtm)、[项目 README 与团队分工](https://github.com/X-D-Lab/MindChat)。

## Sunsimiao：以领域覆盖和专业评估组织医疗模型研发

**起点与判断。** 中文医学知识问答需要不同来源的知识与交互数据。文献、教材、问诊与知识问答在内容和表达形式上不同，需要形成可用于训练和评估的领域材料。

**实现与推进。** 构建百万级领域语料，采用 LoRA / QLoRA 进行医疗指令微调；以医学知识问答和考试任务检查模型专业能力，并形成推理与部署方案。

**结果与应呈现的贡献。** 项目形成公开模型与使用材料，累计 471+ stars。简历应将数据组织、参数高效训练、专业评估和交付联系起来，呈现完整的领域研发过程。

材料：[项目数据、模型与评估说明](https://github.com/X-D-Lab/Sunsimiao)。

## LangChain-ChatGLM-Webui：将模型能力封装为用户可操作的应用

**起点与判断。** 用户需要用自己的文档问问题，产品必须把资料处理、检索、生成与交互连接起来。不同模型和 Embedding 的适配，也要通过清晰的应用入口交付。

**实现与推进。** 基于 LangChain、中文文本切分、Embedding 与 FAISS 构建文档到向量索引的流程，通过 RetrievalQA 组织检索和生成，并封装文件上传、模型选择、参数配置与多轮问答的 WebUI。ChatLLM 适配不同模型的对话模板和推理接口。

**结果与应呈现的贡献。** 项目提供本地部署与社区在线体验，累计 3.3K stars。这个案例同时体现应用设计、模型适配、数据处理和交付能力。

材料：[项目 README](https://github.com/X-D-Lab/LangChain-ChatGLM-Webui)、[应用实现](https://github.com/X-D-Lab/LangChain-ChatGLM-Webui/blob/master/app.py)、[模型适配](https://github.com/X-D-Lab/LangChain-ChatGLM-Webui/blob/master/chatllm.py)。

## SenseMem：将长期交互经验做成可组合的系统能力

**起点与判断。** 持续交互会积累共同经历，也会带来偏好、人物关系和环境状态的变化。记忆系统既要保留原始多模态线索，也要维护知识更新，并在当前任务发生时提供有用上下文。SenseMem 将这几个问题作为同一个产品与架构问题处理。

**实现与推进。** Founder 的工作包括产品定义、Memory Kernel 和 Context Compiler 的系统设计。原始观察与派生知识分层，证据、身份、时空与版本关系共同约束记忆更新；记忆整合和修正维护长期状态，Hybrid Retrieval 与 Context Compiler 选择并组织任务所需的记忆、支撑证据及原始媒体。模型能力通过可组合后端接入，SDK、REST、MCP 和 CLI 共享同一内核。

**结果与应呈现的贡献。** 在 MOSAIC、ATM-Bench、Mem-Gallery、LoCoMo-Refined 记忆基准上取得 SOTA。这个项目应呈现 Founder 对需求、系统语义、模型能力、工程架构与评估的整体组织能力。

材料：[产品原则](https://github.com/SenseMem/SenseMem/blob/master/docs/design-principles.md)、[架构](https://github.com/SenseMem/SenseMem/blob/master/docs/architecture.md)、[上下文编排](https://github.com/SenseMem/SenseMem/blob/master/docs/context-compilation.md)。
