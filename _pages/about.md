---
permalink: /
title: "颜鑫 Xin Yan · 多模态智能与 Agent 系统"
excerpt: "颜鑫（Xin Yan），心言集团高级算法工程师。实践涵盖多模态模型、Agent 记忆、领域工具与产品开发，包括 MindBridge、FateBridge 和 QianYe。"
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

我是**颜鑫（Xin Yan）**，目前在**心言集团（测测）**担任**高级算法工程师**，负责 **Xinyuan 系列垂域大模型**研发，毕业于**华东理工大学自动化专业**。我的工作从数据治理、模型训练与评估，一直延伸到部署和应用中的反馈。

我尤其关心 **AI 与人的长期交互**。一段话里的语气、一次被遗漏的经历、一个已经变化的状态，都会影响下一次交流。这也让我把注意力从模型能力延伸到记忆、工具与产品设计：哪些信息值得保留，哪些判断需要计算依据，以及系统如何面对自己的未知。

目前的 **MindBridge、FateBridge 和 QianYe**，分别从记忆、领域计算与家庭讲述探索这些问题。文学是我理解人的经验的重要来源；开源、课程与写作，则让我有机会把技术和想法交给他人使用、讨论和修正。下方的项目与[公开访谈](#talks-media)记录了这些探索。

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
*2024.03 - 至今*

我主导 **Xinyuan 系列垂域大模型**研发，覆盖多源数据治理、增量预训练、SFT、RLHF 与多维评估，并协调 **5–20 人**的算法与工程团队完成训练、部署和开源交付。系列模型在 HuggingFace、ModelScope 累计下载 **2万+**。

在心理、教育与陪伴场景中，我关心模型能否理解问题、延续上下文，并把回应保持在能力范围内。语气、知识依据、领域能力与通用能力需要分别观察，失败样本和使用反馈也应回到数据与训练流程中。基座和模型尺寸的选择，还要考虑推理延迟、生态维护，以及团队能够长期承担的成本。这些问题决定了评估怎样设计，也决定了下一轮训练值得改什么。

部分可公开的工作：

* [Xinyuan-VL-2B](https://huggingface.co/Cylingo/Xinyuan-VL-2B)：基于 Qwen2-VL-2B-Instruct，使用 **500万+ 多模态样本**进行训练。在模型卡公布的多项视觉理解基准上取得相对基座的提升，训练与评测结果见模型卡。
* [Xinyuan-LLM-14B-0428](https://huggingface.co/Cylingo/Xinyuan-LLM-14B-0428)：基于 Qwen3-14B-Base，面向心理支持与教育等场景开展领域训练，并提供模型权重与部署说明。
* 在**魔搭 ModelScope 开发者共创会**分享《开源技术驱动下的泛心理服务与 AI 普惠实践之路》，并参与[通义实验室 × 魔搭社区专访](https://mp.weixin.qq.com/s/a16sWs_QPtvoeY4J5eexTg)，讨论模型选型、评估、个性化与端侧部署的取舍。

<span class='anchor' id='projects'></span>
<span class='anchor' id='-projects'></span>

# Selected Projects

这些项目从不同的问题出发。有的面向模型与系统，有的直接面向使用者；贯穿其中的，是我对持续交互、真实反馈和长期维护的关注。

<div class="project-entry" markdown="1">

**[MindBridge：Agentic Multimodal Memory](https://github.com/EventHorizon-Lab/MindBridge)**

长期陪伴需要一种连续性：上次谈到的事、共同见过的画面、已经改变的处境，都应当影响下一次交流。我以情感陪伴机器人为切入点做 MindBridge，希望 Agent 积累的记忆能够保留“谁在何时、何地经历了什么”，并回到当时的声音、图像与事件证据。

难点在于，新的经历会要求系统修正原有判断。同一句“我没事”的文字与语气可能提供不同线索，一次情绪反应也不足以成为长期性格判断。相似的经历需要分清属于谁，旧的状态需要标明何时有效。

我主导记忆内核的设计与实现，先保留有序的原始多模态观察，再由可选模型提出事件、事实与状态，由内核校验来源并维护证据和版本。召回结合语义、关键词与时空约束，回答返回实际引用的证据。

我把修正旧判断、撤回失去依据的推断，以及在证据不足时拒答，都看作记忆质量的一部分。本地优先、模型可替换的嵌入式架构，则让原始记录与可重建的索引各有职责，也让记忆质量、交互延迟和运行成本能够在具体应用中分别检验。

</div>

<div class="project-entry" markdown="1">

**[FateBridge：面向 Agent 的传统术数与占星计算引擎](https://github.com/thomas-yanxin/FateBridge)**

我希望用户能够从自己的问题出发，与 Agent 讨论自我认识、关系或空间布局，而不必先掌握排盘方法和工具字段。FateBridge 为这样的传统文化咨询提供领域计算；我在意的是，一段自然的回答能否说明采用了什么方法、依据哪些输入，以及哪些条件仍然未知。

历法、节气边界、时区与真太阳时都可能改变盘面，不同流派又有各自的规则。把它们放进同一套接口时，必须保留这些差异。

我发起并开发本地计算引擎，将八字、紫微、西方占星、占卜与风水组织到统一工具目录，通过 MCP、REST API 和 CLI 接入应用；Onda 技能则指导 Agent 按问题选法、核对缺项和组织解读。

在这个项目里，我让领域代码承担计算，模型承担对话，并以结构化结果和执行回执保留时间口径、版本与精度线索。计算事实、传统解释和现实建议各有成立的条件，应该能够分别核对。可复现的计算与对未知、分歧的如实呈现，是我希望这套工具提供的基础。

</div>

<div class="project-entry" markdown="1">

**QianYe（亲百问）：家庭记忆与共同叙事**

一张老照片留下了画面，照片里的人当时经历了什么，却常常没有被讲下来。想了解长辈，也未必知道该从哪里问起。我参与亲百问的产品设计与微信小程序开发，希望以一个公益数字产品，为家人提供容易开口、愿意继续讲述的入口，让零散的经历逐渐成为一本可以共同翻阅的记忆手帐。

我从照片和老物件出发，设计讲述、核对与入册的完整流程；家人可以异步回答问题、为同一段经历补充不同视角，再按人物回看。长辈的操作负担和记录过程的中断，是这套流程需要认真处理的细节。因此，分段保存、草稿恢复、大字、明确的状态和较大触控区域，都属于产品本身的工作。

我看重故事里属于讲述者的口吻，也看重那些暂时拿不准的细节。原声、原图和原始转写因此需要保留；原文可以直接入册，AI 润色由用户主动选择并核对。家人能补充什么、能看到什么，也要由家庭空间与邀请范围明确限定。我希望整理能帮助人表达，同时把内容的决定权留给讲述者和家人。

</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Health LLM Platform</div><img src='/images/structure3.png' alt="健康大模型知识中台" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[健康大模型知识中台：MindChat 与 Sunsimiao](https://github.com/X-D-Lab)**

MindChat 起于我和老师一次关于家人孤独与陪伴不足的讨论。我希望借助模型，为愿意倾诉的人提供更容易接近的交流入口。这个起点也让我持续关心，心理与健康相关的应用应当怎样回应一个具体的人，怎样面对专业知识与自身能力的边界。

我负责模型训练，与团队协作完成数据构建、测试和应用集成，围绕医疗语料与心理对话开展清洗、领域训练和指令微调，并探索检索、记忆与上下文机制。工作逐渐把我的注意力引向对话的连续性：先前说过什么、当下怎样表达，都会影响回应是否贴合处境。这些表现需要进入评估，并通过使用反馈继续修正。

团队开源了 [MindChat](https://github.com/X-D-Lab/MindChat) 与 [Sunsimiao](https://github.com/X-D-Lab/Sunsimiao) 的模型、示例和部署材料。模型大小与部署方式的选择，还涉及算力、隐私需求与维护条件；这些约束也塑造了我后来做记忆系统和产品时的判断。

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ColugoMum</div><img src='/images/structure1.png' alt="ColugoMum 智能零售结算平台" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[袋鼯麻麻 ColugoMum：智能零售结算平台](https://github.com/thomas-yanxin/ColugoMum)**

商品识别有个很实际的难题：货架不断上新，包装又可能十分相似，系统需要持续跟上这些变化。我关心识别效果，也关心新增商品之后，维护者需要付出多少工作。

我负责项目管理、算法适配与端侧前端，基于 **PaddleClas / PP-ShiTu** 完成数据构建、轻量模型调优和云边端集成。采用图像检索路线后，新类别可以通过补充检索库接入，减少重复训练的需求。相似包装、小样本与端侧延迟仍需要分别处理，识别结果和更新成本要放在同一套工程条件下考虑。

项目获得 **2022 年第 24 届中国机器人及人工智能大赛全国一等奖**，亮相 **Baidu Wave Summit 2021+**，并形成[论文](https://ieeexplore.ieee.org/document/9851085)、开源代码与教学实践。相关方法与实验见[技术文章](https://developer.cloud.tencent.com/article/2146677)。对这类系统，我也会关注交付之后，别人能否继续使用和维护它。

</div>
</div>

<div class="project-entry" markdown="1">

**[欧小鹏 OXiaoPeng：从社群需求出发的模型应用](https://github.com/thomas-yanxin/OXiaoPeng)**

欧小鹏从社群里很小的需求长出来：广告需要处理，新成员需要欢迎，常见问题被反复询问。我先写了一个能在微信群里工作的助手，后来逐步接入 ERNIE、PanGu、Yuan、ChatYuan 与 ChatGPT 等模型，让群友在熟悉的环境里体验对话和文生图。它的名字也是大家一起想的。

用户会直接告诉我哪里不好用，上游接口变化也曾让文生图服务中断。这些经历让我具体地理解了反馈渠道、外部依赖与产品持续性的关系。模型接入之后，怎样让人愿意用、出了问题怎样回应，都是开发工作的一部分。

项目早期累计服务直接用户 **2000+**、间接覆盖 **2万+**，服务多个 AI 开源社群，获得 **2022 年启智社区优秀孵化项目奖**，并入围 **2023 年奇绩春季创业营（S23）面试**。我在[《2022，我与启智》](https://www.cnblogs.com/thomas-yanxin/p/17067454.html)里记录了它的成长，也记录了社区怎样参与其中。

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

模型选型、评估与产品之间的关系，是我在公开分享中反复讨论的主题。下面保留了当时的讲述，也能看到这些问题怎样随着实践向前推进。

## Invited Talks

* *2025.09*：2025 年云栖大会「做 AI，Z 世代不一样！」分论坛，Speaker。
* *2025.05*：阿里云魔搭 ModelScope 开发者共创会，《开源技术驱动下的泛心理服务与 AI 普惠实践之路》。
* *2023.06*：飞桨 PaddlePaddle 大模型应用开发课，《全流程构建智能文档查询助手》 - [视频](https://www.bilibili.com/video/BV18h4y1d77H/)
* *2023.05*：Datawhale AIGC 主题学习，《基于 LangChain 和 ChatGLM-6B 构建本地知识库自动问答应用》 - [视频](https://www.bilibili.com/video/BV11N411y7dT/)
* *2022.04*：飞桨产业实践范例库，商品识别产业应用实战 - [视频](https://www.bilibili.com/video/BV1Fu411y7co/)

## Media Coverage

* **通义实验室 × 魔搭社区｜写代码，也写情绪** - [文章](https://mp.weixin.qq.com/s/a16sWs_QPtvoeY4J5eexTg) / [短视频](https://www.bilibili.com/video/BV1GVgNzLEHs/) / [完整播客 · 47:52](https://www.xiaoyuzhoufm.com/episode/6878c7f5a9dec92500c5c93e)<br>
  我谈到为什么关心情感智能，文学怎样影响我理解人的经验，以及评估如何帮助决定模型该往哪里改。可从 **20:21** 了解文学相关探索，从 **29:28** 了解情感智能与评估，从 **36:26** 了解基座模型选择。
* **Founder Park｜Qwen 3 与垂域模型实践** - [原文](https://mp.weixin.qq.com/s/pb8eoQhvAF9O5N3CSO7rIg) / [采访实录转载](https://news.sina.com.cn/sx/2025-04-30/detail-ineuxrwv4808216.shtml)<br>
  从语音转文字会丢失哪些情感线索谈起，进一步讨论后训练如何兼顾领域与通用能力，以及成本、生态和产品流程怎样影响技术选择。
* **科学网 / 中国科学报｜人皆孤独？他们用通义千问开发了一款心理大模型** - [原文](https://news.sciencenet.cn/htmlnews/2023/12/513458.shtm)<br>
  这篇早期自述记录了 MindChat 从关于家人陪伴的讨论走向模型实践的过程，也写下了我当时怎样考虑模型的持续性、生态与场景适配。

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

开源社区是我学习技术、认识合作者的重要地方。我喜欢把一个项目讲到别人能够动手实践，也珍惜使用者带来的问题和不同意见。做课程、组织活动和维护项目，让我有机会参与这个相互帮助、共同改进的过程。

**[飞桨领航团](https://www.paddlepaddle.org.cn/ppdenavigategroup) | 华东区主管**<br>
*2021.09 - 2022.07*

* 统筹飞桨领航团**华东七省**运营，主导高校拓展、团长选拔、活动策划与项目落地，任期内新增覆盖高校 **50+** 所，涵盖浙江大学、东南大学、上海科技大学、南京航空航天大学、苏州大学、华东理工大学、合肥工业大学等 **985 / 211 / 双一流**院校。

**[华东理工大学飞桨领航团](https://www.paddlepaddle.org.cn/ppdenavigategroup) | 团长**<br>
*2021.04 - 2022.01*

* 从零搭建校级飞桨领航团，围绕飞桨推广与 AI 实战组织主题讲座、知识竞赛、实操挑战赛与项目体验，累计举办 **5+** 场活动、覆盖 **100+** 人次、孵化 **10+** 个精品项目。
* 推动“教育部产学合作协同育人项目（百度公司 & 华东理工大学）”课程建设落地，把社区活动沉淀为面向校内 AI 人才培养的课程与实践资源。

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

如果这些工作与你关心的问题有关，欢迎来信交流：[yx20001210@gmail.com](mailto:yx20001210@gmail.com)。可以从一个技术问题、一段使用反馈，或一个正在摸索的产品想法聊起。更多代码与近期工作见 [GitHub](https://github.com/thomas-yanxin)。
