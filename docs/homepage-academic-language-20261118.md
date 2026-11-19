# Homepage 技术叙述修订记录

日期：2026-11-18。范围：中英文 About、Professional Experience 与 Selected Projects 的技术描述。页面是个人研究与工程介绍，保留第一人称、创业者定位、产品定义与研发统筹职责。

## 修订前审稿与处理

| 位置 | 原有问题 | 修订方式与依据 |
| --- | --- | --- |
| About | 研究方向、项目与个人职责分别罗列，缺少贯穿主线 | 用持续人机交互中的模型与 Agent 系统统摄数据、训练、记忆、上下文和产品工作。保留产品出发点及具体任职。 |
| xyVL | 数据、自动评分与训练方法是并列清单，未解释共同目标 | 按用户给定定位，将 xyVL、xyData、xyJudge 写成协同研发体系，说明学习分布、评价规约和后训练之间的关系。 |
| xyData | 数据治理容易被读成收集和清洗 | 解释从异构样本接入、Schema 统一、质量与难度筛选，到面向不同训练阶段的 Data Mixture。保留现有数据规模。 |
| xyJudge | Model-as-a-Judge 容易掩盖评价标准本身 | 区分 Rubrics 规约与执行规约的规则、模型组件。具体实现仍是原有检查项、模型、结构化标签及并发恢复机制。 |
| SenseMem | 中英文系统定位不同，机制名称多于问题说明 | 统一 Agentic Omni-modal ContextOS，按原始观察、记忆更新、证据召回、任务上下文组织叙述。英文 cognitive forgetting 改为与中文一致的 reversible forgetting。 |
| Xinyuan / MindChat | 训练阶段与交互需求之间的关系较弱 | 以领域适配与交互对齐连接数据、训练、评价、部署；保留早期研究的历史范围。 |
| FateBridge | 接口与实现名称密集，领域问题不突出 | 以显式输入输出契约、时间与规则口径、计算一致性和来源可追溯性组织叙述。 |
| QianYe | 产品流程清楚，但人与 AI 的协作关系未充分展开 | 说明 AI 辅助叙事、人工核对、原始材料保留和讲述者自主权。 |
| ColugoMum / OXiaoPeng | 工程事项罗列，设计理由不明确 | 分别强调动态商品目录下的检索库更新，以及模型接入与生成式服务的社区运营。 |

## 核心术语与叙述边界

- **Embodied Native**：本页采用用户给定的“具身原生”定位，具体含义落在从具身环境理解、推理、导航与规划需求出发，协同组织数据、评价和训练目标。保留 Qwen3.5 基座与后训练路线，不扩写为从零预训练、动作 token、VLA 策略或实机控制成果。
- **Multimodal data curation**：强调训练数据的组织和学习分布构建；其他系统的 GPU、分布式架构或去重算法不移植为 xyData 的实现声明。
- **Rubrics System**：评价规约规定要评什么、依据什么判据；Model-as-a-Judge 是执行评价的一种组件。首页只描述已提供的数据标签与检查机制，不新增轨迹评分、在线环境评价或自动反馈回流。
- **Post-Training / OPD**：保留 SFT → OPD → GRPO。OPD 解释为在学生自身生成序列上使用教师监督，不指定未经提供的 KL 方向、损失实现或教师服务架构。
- **Mid-Training**：现有材料没有明确独立阶段。本轮保留 Xinyuan 的增量/持续预训练表述，没有为使用术语新增训练阶段。
- **Agentic Harness**：模型外的工具、上下文、状态与执行编排环境。SenseMem 提供记忆与上下文层，FateBridge 提供可调用的领域计算层，不将两者各自扩写为完整 Harness。
- **Omni / full-duplex**：模态覆盖与交互时序是不同维度。SenseMem 的全模态覆盖文本、图像、音频、视频；全双工仍保留在已有 YRobot 公开材料对应的描述中。

## 一手资料与采用方式

资料用于界定术语、改善叙述结构。个人项目的实现与成果依据仍是用户说明和已有页面材料。

| 资料 | 本次采用的概念 |
| --- | --- |
| [MS-SWIFT：知识蒸馏](https://swift.readthedocs.io/zh-cn/latest/Instruction/Distillation.html) | 区分训练阶段、采样分布与教师监督，解释 OPD。 |
| [TRL：Distillation Trainer](https://huggingface.co/docs/trl/en/distillation_trainer) | 学生生成序列与教师反馈之间的关系。未声称项目采用此 Trainer。 |
| [NeMo Curator：Overview](https://docs.nvidia.com/nemo/curator/about) | 将多模态数据治理理解为可组合的处理与筛选流程。 |
| [DataComp-LM](https://arxiv.org/html/2406.11794) | 数据筛选与混合共同影响训练分布及下游评价。 |
| [OpenRubrics](https://arxiv.org/html/2510.07743) | 明确评价规约与执行评价的 judge 之间的区别。 |
| [π0: A Vision-Language-Action Flow Model for General Robot Control](https://arxiv.org/html/2410.24164v1) | 从任务、数据与训练配方共同设计理解具身模型；区分环境理解与动作控制。 |
| [Anthropic：Building strong safety evaluations](https://www.anthropic.com/research/building-strong-safety-evaluations) | 先明确评价目标与行为判据，再讨论评价执行。 |
| [Anthropic：Effective context engineering for AI agents](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents) | 按当前任务与有限预算组织推理所需的上下文。 |
| [Anthropic：Effective harnesses for long-running agents](https://www.anthropic.com/research/effective-harnesses-for-long-running-agents) | Harness 中模型、工具、状态和任务延续之间的关系。 |
| [Anthropic：The components of agent memory](https://www.anthropic.com/research/components-of-agent-memory) | 从交互记录到可更新知识，再到任务上下文的分层表达。未引入其 dreaming 机制。 |
| [Kimi K2.5 官方技术博客](https://www.kimi.ai/blog/kimi-k2-5) | Native 应对应能力形成与训练方式，不由媒体接入直接推出。 |
| [MiniCPM-o 4.5 技术报告](https://arxiv.org/html/2604.27393v1) | 区分全模态覆盖与持续输入、输出并行的全双工交互。 |

## 保留项与验证

- 中英文分别修订 25、26 个正文段落与两个项目标题，段落块数量保持不变。
- 所有数字 token、链接、图片来源和既有锚点与本轮修改前的快照一致。
- 原有 SOTA 结果及 Xinyuan-VL 的时间、榜单、参数组范围保留；SenseMem 结尾改为具体基准覆盖范围，收束泛化性评价。
- 新闻、出版物、论文引用、历史讲座题名、竞赛和荣誉记录保持原文。
- 本轮为叙述与术语审校，没有复现训练、基准成绩或项目实现。

- Jekyll 构建、生成 HTML 的章节锚点检查与 diff 检查通过；中英文桌面及 390px 手机布局未发现横向溢出。
