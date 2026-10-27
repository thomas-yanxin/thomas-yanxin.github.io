---
permalink: /en/
title: "Xin Yan · Multimodal AI & Agent Systems"
excerpt: "Xin Yan, Senior Algorithm Engineer at Cylingo Group. Working on multimodal AI, agent memory, domain tools and products including MindBridge, FateBridge and QianYe."
lang: en
author_profile: true
---

<span class='anchor' id='about-en'></span>

# About

I am **Xin Yan (颜鑫)**, a **Senior Algorithm Engineer at Cylingo Group (测测)**, where I lead development of the **Xinyuan** series of domain-specific models. I graduated from **East China University of Science and Technology**, majoring in Automation. My work runs from data curation, training and evaluation through deployment and feedback from applications.

I am particularly interested in **how AI interacts with people over time**. A speaker's tone, an experience the system has forgotten, or a circumstance that has changed can all shape the next exchange. This has drawn me toward memory, tools and product design: deciding what to retain, which judgments need computational evidence, and how a system should respond to what it does not know.

My current projects, **MindBridge, FateBridge and QianYe**, explore these questions through memory, domain computation and family storytelling. Literature is an important part of how I understand human experience. Open source, teaching and writing give me ways to put ideas and software into other people's hands, where they can be used, questioned and improved. The projects and [public interviews](#talks-media-en) below trace that work.

<span class='anchor' id='news-en'></span>

# News

* *2026.05*: Co-authored *LangChain Large Model Application Development: From Beginner to Practice*, published by Tsinghua University Press.
* *2026.01*: First Prize in the 2025 Synthetic Data Competition · Lingxi AI for Mental Health track, with the MindChat team — [report](https://www.shobserver.com/wx/detail.do?id=1047568).
* *2025.09*: Speaker at the 2025 Apsara Conference session "Doing AI, the Gen-Z Way".
* *2025.07*: Bronze Award in the 2024 China International College Students' Innovation Competition.
* *2025.07*: Joint interview by Alibaba Cloud Tongyi Lab and ModelScope — [podcast](https://www.xiaoyuzhoufm.com/episode/6878c7f5a9dec92500c5c93e).

<span class='anchor' id='experience-en'></span>

# Experience

**Cylingo Group (测测) | Senior Algorithm Engineer**<br>
*March 2024 - Present*

I lead development of the **Xinyuan series**, covering multi-source data curation, continual pre-training, SFT, RLHF and multi-dimensional evaluation. I coordinate algorithm and engineering teams of **5–20 people** through training, deployment and open-source releases. The series has accumulated **20,000+ downloads** across HuggingFace and ModelScope.

In psychological support, education and companionship, I care about whether a model understands the question, follows the conversation and stays within its capabilities. Tone, knowledge grounding, domain performance and general abilities need separate attention; failures and feedback should inform the next round of data and training. Choosing a base model and size also means considering latency, ecosystem maintenance and costs the team can sustain. These considerations shape both evaluation and what is worth changing in the next training run.

Some of the work I can share publicly:

* [Xinyuan-VL-2B](https://huggingface.co/Cylingo/Xinyuan-VL-2B): Trained on **5M+ multimodal samples**, based on Qwen2-VL-2B-Instruct. The model card reports gains over the base model on multiple visual-understanding benchmarks and provides the training and evaluation details.
* [Xinyuan-LLM-14B-0428](https://huggingface.co/Cylingo/Xinyuan-LLM-14B-0428): Domain training on Qwen3-14B-Base for psychological support and education, with model weights and deployment instructions.
* Presented "Open Source Technology Driving Pan-Psychological Services and AI Inclusion" at the **ModelScope Developer Co-Creation Event** and joined a [Tongyi Lab × ModelScope interview](https://mp.weixin.qq.com/s/a16sWs_QPtvoeY4J5eexTg) on model selection, evaluation, personalization and on-device deployment.

<span class='anchor' id='projects-en'></span>

# Selected Projects

These projects begin with different problems. Some concern models and systems; others work directly with the people using them. Across them, I keep returning to sustained interaction, feedback from use and the work of maintaining a system over time.

<div class="project-entry" markdown="1">

**[MindBridge: Agentic Multimodal Memory](https://github.com/EventHorizon-Lab/MindBridge)**

Companionship over time depends on continuity: a previous conversation, something seen together, or a change in circumstances should inform the next exchange. I use emotional companion robots as the starting context for MindBridge, exploring how an agent can retain who experienced what, when and where, and return to the original audio, images and event evidence.

New experiences can require a system to revise earlier judgments. The words "I am fine" and a speaker's tone may offer different cues; one emotional response is insufficient grounds for a lasting personality judgment. Similar experiences need to remain associated with the right person, and states need a period of validity.

I lead the kernel's design and implementation: ordered source observations are stored first, an optional model proposes events, facts and states, and the kernel validates provenance while maintaining evidence and versions. Recall combines semantic and lexical retrieval with time and location constraints; answers return the evidence actually cited.

I regard correcting old judgments, retracting unsupported inferences and abstaining when evidence is insufficient as parts of memory quality. A local-first embedded architecture with replaceable models gives authoritative records and rebuildable indexes distinct responsibilities. It also lets memory quality, interaction latency and operating cost be evaluated separately in a concrete application.

</div>

<div class="project-entry" markdown="1">

**[FateBridge: A Traditional Metaphysics and Astrology Engine for Agents](https://github.com/thomas-yanxin/FateBridge)**

I want people to begin with their own questions about self-understanding, relationships or spatial layouts, without first learning charting methods or tool parameters. FateBridge supplies domain computation for consultations drawing on these cultural traditions. My concern is whether a natural-language answer can explain which method and inputs it used, and which conditions remain unknown.

Calendar conventions, solar-term boundaries, time zones and true solar time can all affect a chart; different schools also have distinct rules. A shared interface needs to preserve those differences.

I initiated and developed a local engine that organizes BaZi, Zi Wei Dou Shu, Western astrology, divination and Feng Shui in one tool catalog, accessible through MCP, REST API and CLI. Onda skills guide agents in selecting methods, checking missing inputs and organizing interpretations around the question.

Domain code performs the calculations, while models handle conversation. Structured results and execution receipts retain time conventions, version and precision information. Computed facts, traditional interpretations and practical suggestions each depend on different conditions and should be examined separately. Reproducible calculations, together with a clear account of uncertainty and disagreement, are the foundation I want these tools to provide.

</div>

<div class="project-entry" markdown="1">

**QianYe (亲百问): Family Memory and Shared Storytelling**

An old photograph preserves a scene, but the experiences of the people in it may never have been recorded. Even when we want to know more about older relatives, finding a place to begin can be difficult. Through QianYe, a public-interest digital product, I work on product design and WeChat mini program development to make it easier for families to begin and continue telling their stories, gradually assembling a journal they can revisit together.

I start with photographs and familiar objects, designing a flow from storytelling through review to a journal page. Relatives can answer asynchronously, contribute perspectives on the same experience and browse stories by person. The effort required of older adults, and interruptions during recording, need careful attention. Segmented saving, draft recovery, larger text, clear states and generous touch targets are all part of that product work.

I value a speaker's own voice, including details they are unsure about. Original audio, images and transcripts therefore remain available; transcripts can be used directly, while AI editing is an explicit choice subject to user review. Family spaces and invitation scope define what relatives may contribute and access. I want editing to help people express themselves while leaving decisions about the content with the storyteller and family.

</div>

**[Health LLM Knowledge Platform: MindChat & Sunsimiao](https://github.com/X-D-Lab)**

MindChat began with a conversation between my teacher and me about loneliness and the limits of companionship within families. I hoped models could offer a more accessible place for people who wanted to talk. That starting point has kept me interested in how psychological and health-related applications respond to a particular person, and how they work within the limits of their knowledge and capabilities.

I was responsible for model training, collaborating on data construction, testing and application integration. The work covered cleaning medical and psychological dialogue data, domain training and instruction tuning, as well as exploring retrieval, memory and context mechanisms. It drew my attention toward continuity in conversation: what was said earlier and how it is expressed now both affect whether a response fits the situation. Those qualities need evaluation and continued revision through feedback.

The team released [MindChat](https://github.com/X-D-Lab/MindChat) and [Sunsimiao](https://github.com/X-D-Lab/Sunsimiao), including models, examples and deployment materials. Choosing model sizes and deployment methods also meant accounting for compute, privacy requirements and maintenance. These constraints continue to inform how I approach memory systems and products.


**[ColugoMum: Smart Retail Settlement Platform](https://github.com/thomas-yanxin/ColugoMum)**

Retail recognition poses a practical challenge: products keep changing, packaging can be very similar, and the system needs to keep up. Alongside recognition quality, I cared about how much work the next product addition would create for its maintainers.

I handled project management, algorithm adaptation and the on-device frontend. Using **PaddleClas / PP-ShiTu**, I worked on data construction, lightweight model tuning and cloud–edge–frontend integration. Image retrieval allows new categories to be added through the gallery, reducing the need for repeated training. Similar packaging, limited samples and on-device latency still need separate attention; recognition quality and update costs have to be considered under the same engineering conditions.

The project received the **National First Prize at the 2022 China Robot and Artificial Intelligence Competition**, appeared at **Baidu Wave Summit 2021+**, and led to a [paper](https://ieeexplore.ieee.org/document/9851085), open-source code and teaching materials. Methods and experiments are described in the [technical article](https://developer.cloud.tencent.com/article/2146677). For systems like this, I also consider how others will continue using and maintaining them after delivery.


<div class="project-entry" markdown="1">

**[OXiaoPeng: A Model Application Built from Community Needs](https://github.com/thomas-yanxin/OXiaoPeng)**

OXiaoPeng grew from small needs in community groups: managing advertisements, welcoming members and answering recurring questions. I first built an assistant for WeChat groups, then connected models including ERNIE, PanGu, Yuan, ChatYuan and ChatGPT so people could try conversation and text-to-image generation in a familiar setting. The community helped choose its name.

Users told me directly what was awkward to use, and an upstream service change once interrupted image generation. These experiences made the relationship between feedback, external dependencies and product continuity concrete for me. Helping people use a model, and responding when something breaks, are parts of development too.

Early deployments served **2,000+ direct users**, with an **indirect reach of 20,000+ people**, across several AI open-source communities. The project received an **OpenI project incubation award in 2022** and was shortlisted for an **interview for the 2023 MiraclePlus Spring Camp (S23)**. I wrote about its development and the community's role in ["2022, My Year with OpenI"](https://www.cnblogs.com/thomas-yanxin/p/17067454.html).

</div>

<span class='anchor' id='publications-ip-en'></span>

# Publications & IP

* Tao Zhou, Dong Xue, **Xin Yan**. *LangChain Large Model Application Development: From Beginner to Practice*. Tsinghua University Press, 2026.
* D. Xue, J. Tu, M. Wang, **X. Yan**, F. Liu and J. Hu, "[Towards Privacy-Preserving Mental Health Support with Large Language Models](https://arxiv.org/abs/2601.01993)," *arXiv preprint* arXiv:2601.01993, 2026.
* F.-Q. Cui, J. Huang, S. Zhao, J.-M. Guo, Q. Cai, **X. Yan** and Z. Liu, "[ReMA: A Training-Free Plug-and-Play Mixing Augmentation for Video Behavior Recognition](https://arxiv.org/abs/2601.00311)," *arXiv preprint* arXiv:2601.00311, 2026.
* F.-Q. Cui, J. Huang, S. Zhao, X. Li, **X. Yan**, Z. Jia and X. Zhou, "[Robust Low-Rank Sparse Framework for Video-Based Affective Computing](https://arxiv.org/abs/2511.11406)," *arXiv preprint* arXiv:2511.11406, 2025; revised 2026.
* **X. Yan**, Q. Hu, X. Huang and C. Shen, "[Intelligent Retail Settlement Platform based on Image Retrieval](https://ieeexplore.ieee.org/document/9851085)," CISCE, 2022, pp. 609–616. doi: 10.1109/CISCE55963.2022.9851085 — [PDF](/proof/Intelligent_Retail_Settlement_Platform_based_on_Image_Retrieval.pdf).
* Utility Model Patent: **Smart Retail Settlement Platform**, ZL 2022 2 0828888.8; CN 216979871 U — [certificate](/proof/专利-2022208288888智能零售结算平台.pdf).
* Software Copyrights: **ColugoMum**, 2022SRE010935 — [certificate](/proof/软件著作权-袋鼯麻麻.jpg); **Intelligent Waste Sorting System**, 2021SR0986633 — [certificate](/proof/软件著作权-慧眼识垃圾.jpg); **Domain-Knowledge-Based Q&A System**, 2022SRE025369 — [certificate](/proof/软件著作权-自动问答.pdf).

<span class='anchor' id='talks-media-en'></span>

# Talks & Media

Model selection, evaluation and product decisions recur in my public talks and interviews. These records capture my thinking at different stages and how the questions have developed with the work.

## Invited Talks

* *2025.09*: Speaker, Apsara Conference, "Doing AI, the Gen-Z Way".
* *2025.05*: ModelScope Developer Co-Creation Event, "Open Source Technology Driving Pan-Psychological Services and AI Inclusion".
* *2023.06*: PaddlePaddle LLM Application Development Course, "Building an Intelligent Document Query Assistant" — [video](https://www.bilibili.com/video/BV18h4y1d77H/).
* *2023.05*: Datawhale AIGC Learning Program, "Building a Local Knowledge Base QA Application with LangChain and ChatGLM-6B" — [video](https://www.bilibili.com/video/BV11N411y7dT/).
* *2022.04*: PaddlePaddle Industry Practice Library, "Product Recognition in Practice" — [video](https://www.bilibili.com/video/BV1Fu411y7co/).

## Media Coverage

* **Alibaba Cloud Tongyi Lab × ModelScope: "Writing Code, Writing Emotions"** (2025) — [article](https://mp.weixin.qq.com/s/a16sWs_QPtvoeY4J5eexTg), [short video](https://www.bilibili.com/video/BV1GVgNzLEHs/), [full podcast · 47:52](https://www.xiaoyuzhoufm.com/episode/6878c7f5a9dec92500c5c93e).<br>
  I discuss why I care about affective intelligence, how literature influences my understanding of people, and how evaluation helps decide what to change in a model. Listening guide: **20:21** literature-related exploration, **29:28** affective intelligence and evaluation, **36:26** base-model selection.
* **Founder Park: Model Selection and Product Development** (2025) — [original article](https://mp.weixin.qq.com/s/pb8eoQhvAF9O5N3CSO7rIg), [interview transcript reprint](https://news.sina.com.cn/sx/2025-04-30/detail-ineuxrwv4808216.shtml).<br>
  Starting with emotional cues lost in speech transcription, the conversation turns to balancing domain and general abilities during post-training, and how cost, ecosystems and product workflows shape technical choices.
* **ScienceNet / China Science Daily: The Origins of MindChat** (2023) — [article](https://news.sciencenet.cn/htmlnews/2023/12/513458.shtm).<br>
  An early account of how a discussion about family companionship led to MindChat, and how I considered model sustainability, ecosystems and fit with the intended use.

<details class="archive-details" markdown="1">
<summary>More coverage and earlier public work</summary>

* Tongyi Qwen, "Qwen + Mental Health = ?" — [record](https://mp.weixin.qq.com/s/ZcRES0s7zD_yDeWTTr6Gyg).
* Synced SOTA Models, new releases of MindChat and related models — [record](https://mp.weixin.qq.com/s/PppVdSHObBG7IRA-vgVLlA).
* Synced SOTA Models, quarterly review of open-source foundation models, domain tuning, inference acceleration and agents — [record](https://mp.weixin.qq.com/s/ApOMU6qRfYopCW0NkUCQCQ).
* OpenMMLab, "Feeling Low? Try the MindChat Psychological Model" — [record](https://mp.weixin.qq.com/s/wOQP2A0nm0OGaiwzdJ9wPg).
* ModelScope, release of MindChat based on Qwen-7B — [record](https://mp.weixin.qq.com/s/frJwp-kLuF_aT_vt8V6hJQ).
* GitHubStore, introduction to MindChat — [record](https://mp.weixin.qq.com/s/OIHSBq6c-4QAxvDUqmgpFA).
* OpenI, results of the 2022 outstanding project and developer selection — [record](https://mp.weixin.qq.com/s/PpbwEdP0-8wG9dsvRvRDaA).
* OpenI, university open-source event — [record](https://mp.weixin.qq.com/s/phDFWZ8YOYEJMoYNrsOrag).
* PaddlePaddle, supporting Hefei University of Technology's affective computing team in the national "Internet+" Silver Award — [record](https://mp.weixin.qq.com/s/SgK9qSmYQ9ihIfvb1sHEwA).
* Group Learning, "We Built a Smart Retail Settlement Platform" — [record](https://mp.weixin.qq.com/s/Ons9jLOekpbTPfcjW87Q3Q).
* OpenI, profile of a developer featured for four consecutive weeks — [record](https://mp.weixin.qq.com/s/vgsMagmEVbcsXBVqil9_5A).
* Datawhale, "We Built a Smart Retail Settlement Platform" — [record](https://mp.weixin.qq.com/s/V8eBkYZvb-mNJtyez7n_Rg).
* OpenI, recommended open-source project: ColugoMum — [record](https://mp.weixin.qq.com/s/mgNcoWAICBAqkPCqqBN8Iw).
* PaddlePaddle, welcoming 17 developers to the PPDE program — [record](https://mp.weixin.qq.com/s/PAeREjahNTSJmwn1QtI3Zg).
* Taiyuan University of Technology Internet PLUS Platform, PaddlePaddle Campus Fest — [record](https://mp.weixin.qq.com/s/-VoCDzr1MjeGm4UQuRxORw).
* Anhui Polytechnic University, first AI Innovation Festival — [record](https://mp.weixin.qq.com/s/oCVRHA5Hg41PqTQ-yJQgkg).
* PaddlePaddle, developing the Intelligent Waste Sorting mini program — [record](https://mp.weixin.qq.com/s/6xt4ReF-n4qyJ859yvCbcg).
* Machine Learning and AI Algorithms, Intelligent Waste Sorting system — [record](https://mp.weixin.qq.com/s/rsJSLKaNxtJ06HnwbWbL-w).
* *2021.07*: PaddlePaddle AI Creator Camp (course-series collection) — [record](https://www.bilibili.com/video/BV1qq4y1X7uZ/).
* *2021.05*: PaddlePaddle Developer Talks, "Intelligent Waste Sorting" — [record](https://www.bilibili.com/video/BV13p4y1t76K/).

</details>

<span class='anchor' id='community-activities-en'></span>

# Community & Activities

Open-source communities are where I have learned and met many collaborators. I enjoy explaining a project well enough for someone else to try it, and value the questions and disagreements that users bring. Teaching, organizing activities and maintaining projects let me take part in that shared work.

**[PaddlePaddle Navigator Group](https://www.paddlepaddle.org.cn/ppdenavigategroup) | East China Regional Lead**<br>
*September 2021 - July 2022*

* Coordinated operations across **seven provinces** in East China, including university outreach, local lead recruitment, events and project activities. Expanded coverage to **50+ universities**, including Zhejiang University, Southeast University, ShanghaiTech and ECUST.

**[ECUST PaddlePaddle Navigator Group](https://www.paddlepaddle.org.cn/ppdenavigategroup) | Lead**<br>
*April 2021 - January 2022*

* Built the university group from scratch, organizing **5+ activities**, reaching **100+ participant visits** and supporting **10+ projects** through lectures, competitions and practical sessions.
* Helped turn community practice into course resources through the Baidu–ECUST industry-education collaboration project.

<details class="archive-details" markdown="1">
<summary>More community and education activities</summary>

* 2022: Member of OpenI's first cohort of senior community experience officers.
* 2022: Student coordinator for collaboration between OpenI and Hefei University of Technology's affective computing laboratory — [record](/proof/OpenI&MAC_LAB.jpg).
* 2022: Co-developed PaddlePaddle's retail recognition industry case — [record](https://www.bilibili.com/video/BV1Fu411y7co/).
* 2022: Guest speaker at ECUST's Tonghai Tea Talk, No. 130 — [record](https://mp.weixin.qq.com/s/yyOjg0qnRo8TggylMhyqgA).
* 2022: Learning facilitator for Datawhale's 34th group-learning program — [record](https://mp.weixin.qq.com/s/8NAmTy5n7TXxVH85WAR-gA).
* 2022: Instructor, second PaddlePaddle AI Creator Camp — [record](https://mp.weixin.qq.com/s/JfHYZZE701Qt7vJJa1K11w).
* 2021: Instructor, first PaddlePaddle AI Creator Camp — [record](https://mp.weixin.qq.com/s/MD-ni4z5EITpdrAZd2FGyg).
* 2021: Shanghai PaddlePaddle Navigator Group × Wujiaochang Innovation and Entrepreneurship Academy meetup — [record](https://mp.weixin.qq.com/s/NMJVAttPUHiZEaIIz1zQoA).

</details>

<span class='anchor' id='awards-honors-en'></span>

# Awards & Honors

## Featured Awards

* **First Prize**, 2025 Synthetic Data Competition · Lingxi AI for Mental Health, with the MindChat team — [report](https://www.shobserver.com/wx/detail.do?id=1047568).
* **Bronze Award**, 2024 China International College Students' Innovation Competition, driver-state monitoring and edge computing project.
* **Bronze Award**, 2023 China International "Internet+" Innovation Competition, Lingxin Intelligence.
* **Silver Award**, 2022 China International "Internet+" Innovation Competition, Xiaosheng Technology — [record](https://mp.weixin.qq.com/s/EujzF8ubT_1PkoMs3u-qTw).
* **National First Prize**, 2022 China Robot and Artificial Intelligence Competition — [certificate](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/2022%E5%B9%B4%E7%AC%AC24%E5%B1%8A%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8F%8A%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%A4%A7%E8%B5%9B%E5%85%A8%E5%9B%BD%E4%B8%80%E7%AD%89%E5%A5%96.pdf).

## Selected Honors

* Baidu PaddlePaddle Developer Expert (PPDE) — [record](https://www.paddlepaddle.org.cn/ppdemd?n=/ppdemd/%E9%A2%9C%E9%91%AB).
* OpenAtom Foundation Active Open Source Contributor.
* Baidu AIStudio **2022 Top 10 Influential Figures** — [record](https://mp.weixin.qq.com/s/jKTEAP1euh4yBoatod9E0Q).
* OpenI Community Core Early Experience Officer.
* Datawhale member — [record](https://mp.weixin.qq.com/s/_I-aNX1lAPV2_eYoS0w_Bg).
* Qwen Ambassador.

<details class="archive-details" markdown="1">
<summary>More awards and recognition</summary>

* 2024: **Gold Award**, Anhui College Students' Innovation and Entrepreneurship Competition, industry track, AI-enabled civil-military applications.
* 2023: **Gold Award**, 9th Anhui "Internet+" Competition, Lingxin Intelligence.
* 2022: **Gold Award**, 8th Anhui "Internet+" Competition, Xiaosheng Technology — [record](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/%E3%80%90%E6%99%93%E5%A3%B0%E7%A7%91%E6%8A%80%E3%80%91%E5%AE%89%E5%BE%BD%E7%9C%81%E9%87%91%E5%A5%96.pdf).
* 2022: **Silver Award**, 8th Jiangsu "Internet+" Competition, Jingxuan Future — [record](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/%E7%AC%AC%E5%85%AB%E5%B1%8A%E6%B1%9F%E8%8B%8F%E7%9C%81%E2%80%9C%E4%BA%92%E8%81%94%E7%BD%91%2B%E2%80%9D%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%88%9B%E6%96%B0%E5%88%9B%E4%B8%9A%E5%A4%A7%E8%B5%9B_%E8%B7%AF%E6%BC%94%E9%A1%B9%E7%9B%AE%E8%AF%84%E5%AE%A1%E7%BB%93%E6%9E%9C%E5%8F%91%E5%B8%83%E7%89%88%E6%9C%AC%20.pdf).
* 2022: **Silver Award**, 8th Shanghai "Internet+" Competition, Medbio — [record](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/Medbio-%E6%B4%BB%E6%80%A7%E5%B0%8F%E5%88%86%E5%AD%90%E5%8C%96%E5%90%88%E7%89%A9%E7%A7%91%E7%A0%94%E6%9C%8D%E5%8A%A1%E5%B9%B3%E5%8F%B0.pdf).
* 2022: **Top 10**, 7th Maker China Competition, Baidu track, Jingxuan Future — [record](https://mp.weixin.qq.com/s/kAp6jfZpvG2eolcWSANHSQ).
* 2022: **Bronze Award**, 13th Shanghai Challenge Cup, ColugoMum — [record](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/2022%E5%B9%B4%E6%8C%91%E6%88%98%E6%9D%AF%E5%B8%82%E7%BA%A7%E5%A4%8D%E8%B5%9B%E7%BB%93%E6%9E%9C-%E5%8D%8E%E4%B8%9C%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6.pdf).
* 2022: **Gold Award**, 10th ECUST Fenjin Cup, ColugoMum — [record](https://mp.weixin.qq.com/s/WgE9zxD4Nv4H-f_2sXr5pw).
* 2022: **First Prize**, 8th Nanjing University of Finance and Economics "Internet+" Competition, Shuju Fengchao.
* 2022: **First Prize**, 8th ECUST "Internet+" Competition, ColugoMum.
* 2022: **Second Prize**, first Hefei University of Technology Intelligent Cup, Xiaosheng Technology — [record](/proof/首届合肥工业大学”智能杯“创新创业大赛大创组二等奖.jpg).
* 2022: **National Third Prize**, 15th China College Students' Computer Design Competition, software development — [record](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/2022%E5%B9%B4%EF%BC%88%E7%AC%AC15%E5%B1%8A%EF%BC%89%E4%B8%AD%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%AE%BE%E8%AE%A1%E5%A4%A7%E8%B5%9B%E4%B8%89%E7%AD%89%E5%A5%96.pdf).
* 2022: **National Third Prize**, 15th China College Students' Computer Design Competition, Internet of Things — [record](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/2022%E5%B9%B4%E7%AC%AC15%E5%B1%8A%E4%B8%AD%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%AE%BE%E8%AE%A1%E5%A4%A7%E8%B5%9B%EF%BC%88%E7%89%A9%E8%81%94%E7%BD%91%E7%BB%84%EF%BC%89%E5%85%A8%E5%9B%BD%E4%B8%89%E7%AD%89%E5%A5%96.jpg).
* 2022: **First Prize**, 24th China Robot and Artificial Intelligence Competition, Shanghai regional AI innovation event — [record](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/%E7%9B%96%E7%AB%A0%E5%85%AC%E7%A4%BA-%E4%B8%8A%E6%B5%B7%E8%B5%9B%E5%8C%BA%E6%8B%9F%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%E5%85%AC%E7%A4%BA%E7%9A%84%E9%80%9A%E7%9F%A5.pdf).
* 2022: **Second Prize**, 5th China Collegiate Computing Competition, AI creativity, East China regional event.
* 2022: **Second Prize**, 14th Shanghai Computer Application Design Competition, software development.
* 2022: **Second Prize**, 14th Shanghai Computer Application Design Competition, Internet of Things.
* 2022: OpenI **Community Pioneer Award** and **Outstanding Project Incubation Award** — [record](https://mp.weixin.qq.com/s/rEXoEY1UbEgwolYE-OJPjw).
* 2022: **First Place**, OpenI outstanding open-source project selection, ColugoMum — [record](/proof/%E8%A2%8B%E9%BC%AF%E9%BA%BB%E9%BA%BB.png).
* 2022: **Second Place**, OpenI outstanding open-source project selection, OXiaoPeng — [record](/proof/%E6%AC%A7%E5%B0%8F%E9%B9%8F.png).
* 2022: **Annual Top 10 Applications**, iFlytek Open Ecosystem AI Pioneer Application Awards — [record](https://mp.weixin.qq.com/s/P6VaXjlXWLT0JGvBFRDIvQ).
* 2022: **Winning Team**, second Diankuan Cup National University Fintech Hackathon — [record](https://mp.weixin.qq.com/s/0nwc8CRLXZZaJnAg6JJjVA).
* 2021: **Second Prize**, 23rd China Robot and Artificial Intelligence Competition, Shanghai regional AI innovation event.
* 2021: PPSIG **Outstanding Open Source Project Award** — [record](/proof/PPSIG%E5%A5%96%E6%9D%AF.jpg).
* 2021: PaddlePaddle Hackathon **Outstanding Open Source Project Award** — [record](/proof/%E9%A3%9E%E6%A1%A8%E9%BB%91%E5%AE%A2%E6%9D%BE.jpg).
* 2021: Wave Summit 2021+ **Outstanding Open Source Project** — [record](/proof/WS%E4%BC%98%E7%A7%80%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE.jpg).
* 2022: Principal student investigator, National College Students' Innovation and Entrepreneurship Training Program, **Excellent** assessment — [record](https://cxcy.ecust.edu.cn/2023/1206/c14247a163409/page.htm).
* Intel Innovation Ambassador; Huawei Cloud Expert; member of CAAI and the Chinese Society of Astronautics; provisional member of the Chinese Association of Automation.
* 2022: Active contributor in the Jina community; expert blogger in Alibaba Cloud's developer community; active OpenI contributor and developer.
* PaddlePaddle Wave Summit 2021 / 2021+ Outstanding Open Source Developer.

</details>

<span class='anchor' id='education-en'></span>

# Education

**East China University of Science and Technology | School of Information Science and Engineering | Automation**<br>
*September 2019 - June 2023*

<span class='anchor' id='now-next-en'></span>
<span class='anchor' id='contact-en'></span>

# Contact

If something here connects with a question you are working on, I would be glad to hear from you at [yx20001210@gmail.com](mailto:yx20001210@gmail.com). A technical problem, feedback from use, or a product idea still taking shape is a good place to start. More code and recent work are on [GitHub](https://github.com/thomas-yanxin).

[← 中文](/)
