---
permalink: /
title: "颜鑫 Xin Yan"
excerpt: "颜鑫（Xin Yan），心言集团高级算法工程师，负责心言机器人算法架构。关注多模态模型、Agent 记忆与产品开发，项目包括 xyVL、SenseMem、FateBridge 与 QianYe。"
lang: zh-CN
author_profile: true
redirect_from: 
  + /about/
  + /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

# About Me

我是**颜鑫（Xin Yan）**，现任**心言集团（测测）高级算法工程师**，负责**心言机器人算法架构**，此前主导 **Xinyuan 系列垂域大模型**研发。我毕业于**华东理工大学自动化专业**，主要从事多模态模型、Agent 与机器人相关工作。

我的工作覆盖数据治理、模型训练、评估与部署。我关心一个模型如何在具体场景中持续发挥作用：训练要回应使用中的问题，评估要能指导下一轮改进，技术选择也要经得起算力、延迟与维护成本的检验。

我尤其关注 **AI 与人的长期交互**：如何理解一句话背后的语境，记住共同经历，并在新的信息出现时修正判断。目前，我正在构建 **SenseMem、FateBridge 和 QianYe**，探索 Agent 记忆、传统术数与占星计算，以及家庭记忆的整理与讲述。

文学让我留意人的经验中难以归类的部分；开源、课程与写作，让我的工作有机会被更多人使用、讨论和改进。下面的项目与[公开访谈](#talks-media)，记录了这些思考如何进入实践。

<span class='anchor' id='-news'></span>

# News

* *2026.05*：合著出版《LangChain 大模型应用开发：从入门到实践》，清华大学出版社，周涛、薛栋、**颜鑫** 编著。
* *2026.01*：MindChat 团队获得 2025 合成数据大赛 · 灵溪 AI for Mental Health 主题赛**一等奖** - [报道](https://www.shobserver.com/wx/detail.do?id=1047568)。
* *2025.09*：受邀担任 2025 年云栖大会「做 AI，Z 世代不一样！」分论坛 **Speaker**。
* *2025.07*：获得 2024 年中国国际大学生创新大赛**铜奖**。
* *2025.07*：接受**阿里云通义实验室**与**魔搭 ModelScope 社区**联合采访，分享情感智能、模型评估与文学对技术实践的影响 - [播客](https://www.xiaoyuzhoufm.com/episode/6878c7f5a9dec92500c5c93e)。

<span class='anchor' id='experience'></span>
<span class='anchor' id='-company'></span>

# Professional Experience

**心言集团（测测） | 高级算法工程师**<br>
*2026.03 - 至今*

<div class="paper-box">
<div class="paper-box-image"><div><div class="badge">xyVL</div><a href="/images/xinyan-robot-xyvl-pipeline.png"><img src="/images/xinyan-robot-xyvl-pipeline.png" alt="心言机器人算法流程：多源数据汇聚与格式统一，经 xyJudge 标注筛选形成 xyData，再通过 SFT、On-Policy 蒸馏与 GRPO 训练 xyVL。点击查看原图。" width="100%" loading="lazy"></a></div></div>
<div class="paper-box-text" markdown="1">

**[心言机器人：xyVL 具身视觉语言系列模型](/images/xinyan-robot-xyvl-pipeline.png)**

我负责**心言机器人**算法架构，主导 **xyVL 具身视觉语言系列模型**研发，工作贯穿数据构建、自动标注与模型后训练。

**xyData：多源训练数据构建。** 汇聚 Hugging Face、GitHub 与 ModelScope 等平台的 **50+ 个开源数据集、约 4500 万条原始样本**，覆盖文本、图像、视频、机器人与自动驾驶。通过格式统一、筛选与分级，形成 **1800 万条精选样本**，并按任务、难度和模型适配性调整配比，为 SFT、蒸馏与强化学习分别构建数据集。

**xyJudge：规模化质量评估与标注。** 结合启发式规则与模型裁判，先检查样本长度、语言、重复与格式，再由 **Qwen3.6-35B-A3B** 对质量、难度、重复度、复杂度与连贯性等维度输出结构化标签。流程支持异步并发与中断恢复，用于千万级样本处理。

**后训练：SFT → On-Policy 蒸馏（OPD）→ GRPO。** 以 **Qwen3.5** 为基座开展多模态指令微调，由 **Qwen3.5-27B** 提供 On-Policy 蒸馏信号，再结合推理、安全、导航与规划的奖励设计进行 GRPO 训练，优化模型的环境理解与具身任务能力。

</div>
</div>

**心言集团（测测） | 高级算法工程师**<br>
*2024.03 - 2026.03*

我主导 **Xinyuan 系列垂域大模型**研发，覆盖多源多模态数据治理、增量预训练、SFT、RLHF 与多维评估；协调 **5–20 人**的算法与工程团队，推进训练、部署及部分模型开源。系列模型在 Hugging Face、ModelScope 等平台累计下载 **2 万+**。

围绕心理、教育与陪伴场景，我关注模型的对话连贯性、语气、知识依据，以及领域训练对通用能力的影响。评估既要发现问题，也要帮助定位数据与训练的改进方向；基座和模型尺寸的选择，则要兼顾推理延迟、生态支持与长期维护成本。

代表性工作：

* [Xinyuan-VL-2B](https://huggingface.co/Cylingo/Xinyuan-VL-2B)：基于 Qwen2-VL-2B-Instruct，使用 **500 万+ 多模态样本**训练，2024 年 9 月在 OpenCompass & Hugging Face Open VLM Leaderboard 的 **<4B 参数组排名第一**。
* [Xinyuan-LLM-14B-0428](https://huggingface.co/Cylingo/Xinyuan-LLM-14B-0428)：基于 Qwen3-14B-Base，面向心理支持与教育等领域训练，公开模型权重与部署说明。
* 在**魔搭 ModelScope 开发者共创会**分享《开源技术驱动下的泛心理服务与 AI 普惠实践之路》，并参与[通义实验室 × 魔搭社区专访](https://mp.weixin.qq.com/s/a16sWs_QPtvoeY4J5eexTg)，讨论模型选型、评估、个性化与端侧部署的取舍。

<span class='anchor' id='projects'></span>
<span class='anchor' id='-projects'></span>

# Selected Projects

<div class="project-entry" markdown="1">

**[SenseMem：Agentic Multimodal Memory](https://github.com/SenseMem/SenseMem)**

Agent 在持续交互中接触到文字、语音与画面，也积累了时间、地点和人物关系。如何把这些经历组织成可维护、可追溯的记忆，是我发起 SenseMem 的出发点。我主导记忆内核的设计与实现，让这些信息能够为后续判断与行动提供依据。

同一句“我没事”，文字和语气可能传达不同线索；一次情绪反应，也不足以说明长期性格。SenseMem 的设计强调区分原始观察、用户陈述与模型推断，保留来源、所属人物和有效时间，让记忆能够随着新证据修正。

系统保留有序的多模态观察，由可选模型提取事件、事实主张与状态，再由内核校验证据引用、维护有效期和版本，并记录可审计、可回滚的操作。召回结合语义、关键词与时空约束，在上下文预算内组织相关记忆、证据及冲突，回答时附上引用依据。

架构上，内核统一维护记忆语义、证据关系与持久化规则，嵌入、生成、语音、视觉与记忆推理按需接入。本地与远程模型可以替换，以适应不同场景的算力、延迟、成本与隐私要求。

</div>

<div class="project-entry" markdown="1">

**[FateBridge：面向 Agent 的传统术数与占星计算引擎](https://github.com/thomas-yanxin/FateBridge)**

FateBridge 源于一个具体需求：让 AI 助手能够围绕用户的问题调用传统术数与占星计算，并清楚说明输入条件和结果依据。我发起这个项目，将领域计算与对话解释衔接起来。

项目提供八字、紫微、星盘等 **92 个 MCP 工具**，同时支持 CLI 与 REST API 接入。计算在本地完成，返回结构化结果与时间口径，供 Agent 读取和组织解释。

我关注历法约定、节气边界、时区与真太阳时等计算条件，也保留不同流派的规则与分歧。计算结果、传统解释和现实建议分别说明，尚未确认的条件与验证范围也应清楚呈现。

</div>

<div class="project-entry" markdown="1">

**QianYe（亲百问）：家庭记忆与共同叙事**

老照片留下了画面，画面背后的经历却未必有人讲述。亲百问从照片与老物件切入，帮助家人打开话题，把零散的故事整理成可以共同翻阅的记忆手帐。我参与这个公益数字产品的设计与微信小程序开发。

产品围绕“讲述—核对—入册”展开，支持家人异步回答、补充不同视角，并按人物回看。我把长辈的使用体验放在设计重点：分段保存与草稿恢复方便继续讲述，大字、清晰的状态和较大的触控区域减少操作负担。

整理过程中保留原声、原图与原始转写，原文可直接入册；AI 润色由用户主动选择，并经本人核对。家庭空间与邀请范围明确内容的可见和参与权限，让讲述者与家人保有对故事的决定权。

</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Health LLM Platform</div><img src='/images/structure3.png' alt="健康大模型知识中台" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[健康大模型知识中台：MindChat 与 Sunsimiao](https://github.com/X-D-Lab)**

MindChat 起于我和老师关于家人孤独与陪伴的一次讨论。我希望借助模型，为愿意倾诉的人提供一个更容易接近的交流入口，也由此开始持续关注情感智能与长期交互。

我负责模型训练，与团队协作完成数据构建、测试和应用集成，围绕医疗语料与心理对话开展清洗、领域训练和指令微调，并探索检索、记忆与上下文机制。其中，我尤其关注对话的连续性：模型能否结合先前的交流和当下的表达作出回应，以及如何评估这种能力。

团队开源了 [MindChat](https://github.com/X-D-Lab/MindChat) 与 [Sunsimiao](https://github.com/X-D-Lab/Sunsimiao) 的模型、示例和部署材料。这段经历让我更重视模型的知识依据与能力边界，也影响了我后来对记忆系统的设计。

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ColugoMum</div><img src='/images/structure1.png' alt="ColugoMum 智能零售结算平台" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[袋鼯麻麻 ColugoMum：智能零售结算平台](https://github.com/thomas-yanxin/ColugoMum)**

新商品不断上架，相似包装又给识别带来困难。在 ColugoMum 中，我同时关注识别效果和商品库的更新成本，希望让系统更容易适应货架变化。

我负责项目管理、算法适配与端侧前端，基于 **PaddleClas / PP-ShiTu** 完成数据构建、轻量模型调优和云边端集成。项目采用图像检索路线，通过补充检索库接入新类别，减少重复训练的需求；同时处理相似包装、小样本与端侧延迟等工程问题。

项目获得 **2022 年第 24 届中国机器人及人工智能大赛全国一等奖**，亮相 **Baidu Wave Summit 2021+**，并形成[论文](https://ieeexplore.ieee.org/document/9851085)、开源代码与教学实践。相关方法与实验见[技术文章](https://developer.cloud.tencent.com/article/2146677)。

</div>
</div>

<div class="project-entry" markdown="1">

**[欧小鹏 OXiaoPeng：从社群需求出发的模型应用](https://github.com/thomas-yanxin/OXiaoPeng)**

欧小鹏从微信群里的几个需求开始：处理广告、欢迎新成员、回答常见问题。我先写了一个群助手，随后逐步接入 ERNIE、PanGu、Yuan、ChatYuan 与 ChatGPT，让群友在熟悉的环境里体验对话和文生图。连名字也是大家一起想的。

群友的直接反馈推动了迭代，上游接口的变化也曾让文生图服务中断。收集问题、应对依赖变化、恢复服务，这些具体经历让我理解了模型应用的长期维护责任。

项目早期服务多个 AI 开源社群，累计直接用户 **2000+**、间接覆盖 **2 万+**，获得 **2022 年启智社区优秀孵化项目奖**，并入围 **2023 年奇绩春季创业营（S23）面试**。[《2022，我与启智》](https://www.cnblogs.com/thomas-yanxin/p/17067454.html)记录了项目的成长与社区的参与。

</div>

<span class='anchor' id='publications-ip'></span>

# Publications & IP

* 周涛、薛栋、**颜鑫**. 《LangChain 大模型应用开发：从入门到实践》[M]. 清华大学出版社, 2026.
* D. Xue, J. Tu, M. Wang, **X. Yan**, F. Liu and J. Hu, "[Towards Privacy-Preserving Mental Health Support with Large Language Models](https://arxiv.org/abs/2601.01993)," *arXiv preprint* arXiv:2601.01993, 2026.
* F.-Q. Cui, J. Huang, S. Zhao, J.-M. Guo, Q. Cai, **X. Yan** and Z. Liu, "[ReMA: A Training-Free Plug-and-Play Mixing Augmentation for Video Behavior Recognition](https://arxiv.org/abs/2601.00311)," *arXiv preprint* arXiv:2601.00311, 2026.
* F.-Q. Cui, J. Huang, S. Zhao, X. Li, **X. Yan**, Z. Jia and X. Zhou, "[Robust Low-Rank Sparse Framework for Video-Based Affective Computing](https://arxiv.org/abs/2511.11406)," *arXiv preprint* arXiv:2511.11406, 2025（2026 年修订）.
* **X. Yan**, Q. Hu, X. Huang and C. Shen, "[Intelligent Retail Settlement Platform based on Image Retrieval](https://ieeexplore.ieee.org/document/9851085)," 2022 4th International Conference on Communications, Information System and Computer Engineering (CISCE), 2022, pp. 609-616, doi: 10.1109/CISCE55963.2022.9851085. [全文](/proof/Intelligent_Retail_Settlement_Platform_based_on_Image_Retrieval.pdf)
* 【[实用新型专利](/proof/%E4%B8%93%E5%88%A9-2022208288888%E6%99%BA%E8%83%BD%E9%9B%B6%E5%94%AE%E7%BB%93%E7%AE%97%E5%B9%B3%E5%8F%B0.pdf)】智能零售结算平台；发明人：**颜鑫**、沈晨、杜旭东；专利号：ZL 2022 2 0828888.8；授权公告号：CN 216979871 U。
* 【[软件著作权](/proof/%E8%BD%AF%E4%BB%B6%E8%91%97%E4%BD%9C%E6%9D%83-%E8%A2%8B%E9%BC%AF%E9%BA%BB%E9%BA%BB.jpg)】袋鼯麻麻：智能零售结算系统 V1.0；著作权人：**颜鑫**、胡庆春、沈晨、杜旭东、黄小悦、申佳川；登记号：2022SRE010935。
* 【[软件著作权](/proof/%E8%BD%AF%E4%BB%B6%E8%91%97%E4%BD%9C%E6%9D%83-%E6%85%A7%E7%9C%BC%E8%AF%86%E5%9E%83%E5%9C%BE.jpg)】慧眼识垃圾系统 V1.0；著作权人：**颜鑫**、沈晨、杜旭东；登记号：2021SR0986633。
* 【[软件著作权](/proof/%E8%BD%AF%E4%BB%B6%E8%91%97%E4%BD%9C%E6%9D%83-%E8%87%AA%E5%8A%A8%E9%97%AE%E7%AD%94.pdf)】基于领域知识库的智能问答系统 V1.0；著作权人：黄小悦、韩响尘、王鑫、**颜鑫**、林宏聪、任竞展、周天奕；登记号：2022SRE025369。

<span class='anchor' id='talks-media'></span>
<span class='anchor' id='-invited-talks'></span>
<span class='anchor' id='-dispersions'></span>

# Talks & Media

我的公开分享主要围绕模型选型、评估与应用开发展开。以下访谈与课程记录了不同阶段的实践，以及文学、情感智能与产品设计之间的联系。

## Invited Talks

* *2025.09*：2025 年云栖大会「做 AI，Z 世代不一样！」分论坛，Speaker。
* *2025.05*：阿里云魔搭 ModelScope 开发者共创会，《开源技术驱动下的泛心理服务与 AI 普惠实践之路》。
* *2023.06*：飞桨 PaddlePaddle 大模型应用开发课，《全流程构建智能文档查询助手》 - [视频](https://www.bilibili.com/video/BV18h4y1d77H/)
* *2023.05*：Datawhale AIGC 主题学习，《基于 LangChain 和 ChatGLM-6B 构建本地知识库自动问答应用》 - [视频](https://www.bilibili.com/video/BV11N411y7dT/)
* *2022.04*：飞桨产业实践范例库，商品识别产业应用实战 - [视频](https://www.bilibili.com/video/BV1Fu411y7co/)

## Media Coverage

* **通义实验室 × 魔搭社区｜写代码，也写情绪** - [文章](https://mp.weixin.qq.com/s/a16sWs_QPtvoeY4J5eexTg) / [短视频](https://www.bilibili.com/video/BV1GVgNzLEHs/) / [完整播客 · 47:52](https://www.xiaoyuzhoufm.com/episode/6878c7f5a9dec92500c5c93e)<br>
  谈情感智能的研究动机、文学对理解人的影响，以及评估如何指导模型改进。
* **Founder Park｜Qwen 3 与垂域模型实践** - [原文](https://mp.weixin.qq.com/s/pb8eoQhvAF9O5N3CSO7rIg) / [采访实录转载](https://news.sina.com.cn/sx/2025-04-30/detail-ineuxrwv4808216.shtml)<br>
  从语音转写丢失的情感线索谈起，讨论后训练中领域与通用能力的平衡，以及成本、生态和产品流程对技术选择的影响。
* **科学网 / 中国科学报｜人皆孤独？他们用通义千问开发了一款心理大模型** - [原文](https://news.sciencenet.cn/htmlnews/2023/12/513458.shtm)<br>
  回顾 MindChat 从家人陪伴的讨论走向模型实践的过程，以及早期对模型持续迭代、生态与场景适配的考虑。

<details class="archive-details" markdown="1">
<summary>更多报道与公开内容</summary>

* 【阿里通义千问】通义千问 + 心理领域 = ? - [链接](https://mp.weixin.qq.com/s/ZcRES0s7zD_yDeWTTr6Gyg)
* 【机器之心 SOTA 模型】MindChat 心理大模型等项目多个新模型版本开源 - [链接](https://mp.weixin.qq.com/s/PppVdSHObBG7IRA-vgVLlA)
* 【机器之心 SOTA 模型】不妨一试的开源项目：基座模型、领域精调、推理加速及 Agent 开发开源方案季度盘点 - [链接](https://mp.weixin.qq.com/s/ApOMU6qRfYopCW0NkUCQCQ)
* 【OpenMMLab】EMO 了？来和 MindChat 聊聊，可在线体验的 AI 心理大模型 - [链接](https://mp.weixin.qq.com/s/wOQP2A0nm0OGaiwzdJ9wPg)
* 【魔搭 ModelScope 社区】基于 Qwen-7B 的垂域大模型 MindChat 心理大模型上线魔搭 - [链接](https://mp.weixin.qq.com/s/frJwp-kLuF_aT_vt8V6hJQ)
* 【GitHubStore】MindChat 心理大模型 - [链接](https://mp.weixin.qq.com/s/OIHSBq6c-4QAxvDUqmgpFA)
* 【OpenI 启智】2022 年度启智社区优秀项目及开发者评选结果正式揭晓 - [链接](https://mp.weixin.qq.com/s/PpbwEdP0-8wG9dsvRvRDaA)
* 【OpenI 启智】高校开源专场顺利举办 - [链接](https://mp.weixin.qq.com/s/phDFWZ8YOYEJMoYNrsOrag)
* 【飞桨 PaddlePaddle】飞桨助力合肥工业大学普适心理计算团队斩获“互联网+”大赛全国银奖 - [链接](https://mp.weixin.qq.com/s/SgK9qSmYQ9ihIfvb1sHEwA)
* 【组队学习】我们做了一个智能零售结算平台 - [链接](https://mp.weixin.qq.com/s/Ons9jLOekpbTPfcjW87Q3Q)
* 【OpenI 启智】连续 4 周上榜的这位开发者 - [链接](https://mp.weixin.qq.com/s/vgsMagmEVbcsXBVqil9_5A)
* 【Datawhale】我们做了一个智能零售结算平台 - [链接](https://mp.weixin.qq.com/s/V8eBkYZvb-mNJtyez7n_Rg)
* 【OpenI 启智】OpenI 开源项目推荐 ColugoMum - [链接](https://mp.weixin.qq.com/s/mgNcoWAICBAqkPCqqBN8Iw)
* 【飞桨 PaddlePaddle】欢迎 17 名 AI 开发者加入飞桨开发者技术专家计划 - [链接](https://mp.weixin.qq.com/s/PAeREjahNTSJmwn1QtI3Zg)
* 【太原理工大学互联网 PLUS 提升平台】百度飞桨校园 Fest 圆满结束 - [链接](https://mp.weixin.qq.com/s/-VoCDzr1MjeGm4UQuRxORw)
* 【安徽工程大学计算机学院团委】首届 AI 科创节圆满结束 - [链接](https://mp.weixin.qq.com/s/oCVRHA5Hg41PqTQ-yJQgkg)
* 【飞桨 PaddlePaddle】基于飞桨开发垃圾分类小程序，实现“慧眼识垃圾” - [链接](https://mp.weixin.qq.com/s/6xt4ReF-n4qyJ859yvCbcg)
* 【机器学习 AI 算法工程】垃圾分类：慧眼识垃圾系统 - [链接](https://mp.weixin.qq.com/s/rsJSLKaNxtJ06HnwbWbL-w)
* *2021.07*：飞桨领航团 AI 达人创造营（课程系列合集） - [视频](https://www.bilibili.com/video/BV1qq4y1X7uZ/)
* *2021.05*：飞桨开发者说，《慧眼识垃圾》 - [视频](https://www.bilibili.com/video/BV13p4y1t76K/)

</details>

<span class='anchor' id='community-activities'></span>
<span class='anchor' id='-activities'></span>

# Community & Activities

我在开源社区结识合作者，也从使用者的反馈中改进项目。我喜欢把方法讲清楚，让别人能够动手实践，并通过课程、活动和项目维护延续交流。

**[飞桨领航团](https://www.paddlepaddle.org.cn/ppdenavigategroup) | 华东区主管**<br>
*2021.09 - 2022.07*

* 统筹飞桨领航团**华东七省**运营，负责高校拓展、团长选拔、活动策划与项目推进。任期内新增覆盖 **50+ 所高校**，包括浙江大学、东南大学、上海科技大学、南京航空航天大学、苏州大学、华东理工大学与合肥工业大学等。

**[华东理工大学飞桨领航团](https://www.paddlepaddle.org.cn/ppdenavigategroup) | 团长**<br>
*2021.04 - 2022.01*

* 从零组建校级飞桨领航团，组织主题讲座、知识竞赛、实操挑战赛与项目体验，累计举办 **5+ 场活动**、覆盖 **100+ 人次**、孵化 **10+ 个项目**。
* 推进“教育部产学合作协同育人项目（百度公司 & 华东理工大学）”课程建设，将社区实践整理为面向校内 AI 人才培养的课程资源。

<details class="archive-details" markdown="1">
<summary>更多社区与社会实践</summary>

* 2022 OpenI 启智社区首批资深体验官
* 2022 OpenI 启智社区 & 合肥工业大学情感计算与先进智能机器安徽省重点实验室产学研共建学生负责人 - [证明](/proof/OpenI&MAC_LAB.jpg)
* 2022 百度飞桨智慧零售商品识别产业案例共建者 - [视频](https://www.bilibili.com/video/BV1Fu411y7co/)
* 2022 华东理工大学通海茶叙第 130 期讲座嘉宾 - [证明](https://mp.weixin.qq.com/s/yyOjg0qnRo8TggylMhyqgA)
* 2022 Datawhale 组队学习第 34 期航海士 - [证明](https://mp.weixin.qq.com/s/8NAmTy5n7TXxVH85WAR-gA)
* 2022 百度飞桨领航团 AI 达人创造营第二期讲师 - [证明](https://mp.weixin.qq.com/s/JfHYZZE701Qt7vJJa1K11w)
* 2021 百度飞桨领航团 AI 达人创造营第一期讲师 - [证明](https://mp.weixin.qq.com/s/MD-ni4z5EITpdrAZd2FGyg)
* 2021 百度上海飞桨领航团 & 五角场创新创业学院 meetup 活动 - [证明](https://mp.weixin.qq.com/s/NMJVAttPUHiZEaIIz1zQoA)

</details>

<span class='anchor' id='awards-honors'></span>

# Awards & Honors

## Featured Awards

* 2025 合成数据大赛 · 灵溪 AI for Mental Health 主题赛**一等奖（MindChat 团队）** - [报道](https://www.shobserver.com/wx/detail.do?id=1047568)
* 2024 中国国际大学生创新大赛「人因智能关键技术——非接触集成式驾驶员状态智能检测边缘计算技术」**铜奖**
* 2023 第 9 届中国国际“互联网+”大学生创新创业大赛「灵心智能」**铜奖**
* 2022 第 8 届中国国际“互联网+”大学生创新创业大赛「晓声科技」**银奖** - [证明](https://mp.weixin.qq.com/s/EujzF8ubT_1PkoMs3u-qTw)
* 2022 第 24 届中国机器人及人工智能大赛全国**一等奖** - [证明](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/2022%E5%B9%B4%E7%AC%AC24%E5%B1%8A%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8F%8A%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%A4%A7%E8%B5%9B%E5%85%A8%E5%9B%BD%E4%B8%80%E7%AD%89%E5%A5%96.pdf)

## Selected Honors

* 百度飞桨开发者技术专家 - [证明](https://www.paddlepaddle.org.cn/ppdemd?n=/ppdemd/%E9%A2%9C%E9%91%AB)
* 开放原子开源基金会**活力开源贡献者（技术、生态贡献）**
* 百度飞桨 AIStudio 2022 年度影响力人物 **TOP10** - [证明](https://mp.weixin.qq.com/s/jKTEAP1euh4yBoatod9E0Q)
* OpenI 启智社区首批核心体验官
* Datawhale 成员 - [证明](https://mp.weixin.qq.com/s/_I-aNX1lAPV2_eYoS0w_Bg)
* Qwen Ambassador

<details class="archive-details" markdown="1">
<summary>更多竞赛与荣誉</summary>

* 2024 安徽省大学生创新创业大赛「AI 赋能下的军民融合应用创新」产业赛道**金奖**
* 2023 第 9 届安徽省“互联网+”大学生创新创业大赛「灵心智能」**金奖**
* 2022 “建行杯”第 8 届安徽省“互联网+”大学生创新创业大赛「晓声科技」**金奖** - [证明](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/%E3%80%90%E6%99%93%E5%A3%B0%E7%A7%91%E6%8A%80%E3%80%91%E5%AE%89%E5%BE%BD%E7%9C%81%E9%87%91%E5%A5%96.pdf)
* 2022 “建行杯”第 8 届江苏省“互联网+”大学生创新创业大赛「镜选未来」**银奖** - [证明](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/%E7%AC%AC%E5%85%AB%E5%B1%8A%E6%B1%9F%E8%8B%8F%E7%9C%81%E2%80%9C%E4%BA%92%E8%81%94%E7%BD%91%2B%E2%80%9D%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%88%9B%E6%96%B0%E5%88%9B%E4%B8%9A%E5%A4%A7%E8%B5%9B_%E8%B7%AF%E6%BC%94%E9%A1%B9%E7%9B%AE%E8%AF%84%E5%AE%A1%E7%BB%93%E6%9E%9C%E5%8F%91%E5%B8%83%E7%89%88%E6%9C%AC%20.pdf)
* 2022 “建行杯”第 8 届上海市“互联网+”大学生创新创业大赛「Medbio」**银奖** - [证明](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/Medbio-%E6%B4%BB%E6%80%A7%E5%B0%8F%E5%88%86%E5%AD%90%E5%8C%96%E5%90%88%E7%89%A9%E7%A7%91%E7%A0%94%E6%9C%8D%E5%8A%A1%E5%B9%B3%E5%8F%B0.pdf)
* 2022 第 7 届“创客中国”百度赛道创客组「镜选未来」**优胜奖（Top10）** - [证明](https://mp.weixin.qq.com/s/kAp6jfZpvG2eolcWSANHSQ)
* 2022 第 13 届“挑战杯”大学生创业计划竞赛上海市「袋鼯麻麻」**铜奖** - [证明](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/2022%E5%B9%B4%E6%8C%91%E6%88%98%E6%9D%AF%E5%B8%82%E7%BA%A7%E5%A4%8D%E8%B5%9B%E7%BB%93%E6%9E%9C-%E5%8D%8E%E4%B8%9C%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6.pdf)
* 2022 第 10 届华东理工大学“奋进杯”大学生创业计划竞赛「袋鼯麻麻」**金奖** - [证明](https://mp.weixin.qq.com/s/WgE9zxD4Nv4H-f_2sXr5pw)
* 2022 第 8 届南京财经大学“互联网+”大学生创业计划大赛「数聚凤巢」**一等奖**
* 2022 第 8 届华东理工大学“互联网+”大学生创业计划大赛「袋鼯麻麻」**一等奖**
* 2022 第 1 届合肥工业大学“智能杯”创新创业大赛「晓声科技」**二等奖** - [证明](/proof/首届合肥工业大学”智能杯“创新创业大赛大创组二等奖.jpg)
* 2022 第 15 届中国大学生计算机设计大赛（程序设计组）全国**三等奖** - [证明](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/2022%E5%B9%B4%EF%BC%88%E7%AC%AC15%E5%B1%8A%EF%BC%89%E4%B8%AD%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%AE%BE%E8%AE%A1%E5%A4%A7%E8%B5%9B%E4%B8%89%E7%AD%89%E5%A5%96.pdf)
* 2022 第 15 届中国大学生计算机设计大赛（物联网组）全国**三等奖** - [证明](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/2022%E5%B9%B4%E7%AC%AC15%E5%B1%8A%E4%B8%AD%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%AE%BE%E8%AE%A1%E5%A4%A7%E8%B5%9B%EF%BC%88%E7%89%A9%E8%81%94%E7%BD%91%E7%BB%84%EF%BC%89%E5%85%A8%E5%9B%BD%E4%B8%89%E7%AD%89%E5%A5%96.jpg)
* 2022 第 24 届中国机器人及人工智能大赛（上海赛区）人工智能创新赛**一等奖** - [证明](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/%E7%9B%96%E7%AB%A0%E5%85%AC%E7%A4%BA-%E4%B8%8A%E6%B5%B7%E8%B5%9B%E5%8C%BA%E6%8B%9F%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%E5%85%AC%E7%A4%BA%E7%9A%84%E9%80%9A%E7%9F%A5.pdf)
* 2022 第 5 届中国高校计算机大赛（人工智能创意赛）区域赛（华东赛区）**二等奖**
* 2022 第 14 届上海市计算机应用能力设计大赛（程序设计组）**二等奖**
* 2022 第 14 届上海市计算机应用能力设计大赛（物联网组）**二等奖**
* 2022 OpenI 启智社区**社区先锋奖**、**优秀孵化项目奖** - [证明](https://mp.weixin.qq.com/s/rEXoEY1UbEgwolYE-OJPjw)
* 2022 OpenI 启智社区“优秀开源项目征集”**第一名** - [证明](/proof/%E8%A2%8B%E9%BC%AF%E9%BA%BB%E9%BA%BB.png)
* 2022 OpenI 启智社区“优秀开源项目征集”**第二名** - [证明](/proof/%E6%AC%A7%E5%B0%8F%E9%B9%8F.png)
* 2022 讯飞开放生态 AI 先锋应用评比**年度最佳应用 TOP10** - [证明](https://mp.weixin.qq.com/s/P6VaXjlXWLT0JGvBFRDIvQ)
* 2022 第 2 届“点宽杯”全国高校金融科技黑客松大赛**优胜队伍** - [证明](https://mp.weixin.qq.com/s/0nwc8CRLXZZaJnAg6JJjVA)
* 2021 第 23 届中国机器人及人工智能大赛（上海赛区）人工智能创新赛**二等奖**
* 2021 PPSIG **优秀开源项目奖** - [证明](/proof/PPSIG%E5%A5%96%E6%9D%AF.jpg)
* 2021 飞桨黑客马拉松**优秀开源项目奖** - [证明](/proof/%E9%A3%9E%E6%A1%A8%E9%BB%91%E5%AE%A2%E6%9D%BE.jpg)
* 2021 WAVE SUMMIT 2021+ **优秀开源项目** - [证明](/proof/WS%E4%BC%98%E7%A7%80%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE.jpg)
* 2022 国家级大学生创新创业项目**第一主持人**，**优秀结题** - [证明](https://cxcy.ecust.edu.cn/2023/1206/c14247a163409/page.htm)
* 英特尔创新大使、华为云云享专家、中国人工智能学会会员、中国自动化学会预备会员、中国宇航学会会员。
* 2022 Jina 社区活跃贡献者、阿里云开发者社区乘风者计划专家博主、OpenI 启智社区积极贡献者、OpenI 启智社区活跃开发者。
* 百度飞桨 WAVE SUMMIT 2021 / 2021+ 优秀开源开发者。

</details>

<span class='anchor' id='-educations'></span>

# Education

**华东理工大学 | 信息科学与工程学院 | 自动化专业**<br>
*2019.09 - 2023.06*

<span class='anchor' id='now-next'></span>

# Contact

欢迎交流多模态模型、Agent、记忆系统，以及这里的项目。技术问题、使用反馈或合作想法，都可以写信至 [yx20001210@gmail.com](mailto:yx20001210@gmail.com)。更多代码与近期工作见 [GitHub](https://github.com/thomas-yanxin)。
