---
permalink: /en/
title: "Xin Yan · Multimodal AI & Agent Systems"
excerpt: "Xin Yan, Senior Algorithm Engineer at Cylingo Group. Working on on-device embodied models, multimodal data, agent memory and products including xyVL, MindBridge, FateBridge and QianYe."
lang: en
author_profile: true
---

<span class='anchor' id='about-en'></span>

# About

I am **Xin Yan (颜鑫)**, a **Senior Algorithm Engineer at Cylingo Group (测测)**, responsible for **algorithm architecture for the group's robotics initiative**. I previously led development of the **Xinyuan series of domain-specific models**. I graduated from **East China University of Science and Technology**, majoring in Automation. My work focuses on multimodal models, agents and robotics.

I work on models and the systems around them. Data curation, training, evaluation and feedback from use need to inform one another. Compute, latency, cost and maintenance determine how far a design can go. I want those constraints to shape the technical choices from the start.

I am particularly interested in **how AI interacts with people over time**. A speaker's tone, a shared experience or a change in circumstances can affect the next conversation. What should a system remember? What supports its judgments, and when should it revise them? These questions have drawn my work toward memory, harnesses and product design.

I am building **MindBridge, FateBridge and QianYe**, working on agentic memory, domain computation and family storytelling. Literature keeps me attentive to experiences that resist simple categories. Open source, teaching and writing let other people use, question and improve the work. The projects and [public interviews](#talks-media-en) below show how I have pursued these questions.

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
*March 2026 - Present*

<div class="paper-box">
<div class="paper-box-image"><div><div class="badge">xyVL-0.8B</div><a href="/images/xinyan-robot-xyvl-pipeline.png"><img src="/images/xinyan-robot-xyvl-pipeline.png" alt="Robotics algorithm pipeline: multi-source data is normalized, annotated and filtered by xyJudge into xyData, then used for SFT, on-policy distillation and GRPO training of xyVL-0.8B. Click to view the full-size image." width="100%" loading="lazy"></a></div></div>
<div class="paper-box-text" markdown="1">

**[Cylingo Robotics: xyVL-0.8B Embodied Vision-Language Model](/images/xinyan-robot-xyvl-pipeline.png)**

I am responsible for algorithm architecture for the group's **心言机器人** robotics initiative and lead development of **xyVL-0.8B** for on-device deployment. A small model has limited capacity. Data coverage, sample difficulty and training objectives need to work together. This work runs from data curation through model post-training.

**xyData makes heterogeneous data usable for training.** I aggregated **50+ open-source datasets with approximately 45 million raw samples** from HuggingFace, GitHub and ModelScope, covering text, images, video, robotics and autonomous driving. A unified schema, filtering and grading produce **18 million curated samples**. Task type, difficulty and model suitability guide mixture weights, with separate datasets for SFT, distillation and reinforcement learning.

**xyJudge turns selection criteria into annotation at scale.** Heuristics check length, language, duplication and schema validity. **Qwen3.6-35B-A3B** serves as the model judge, producing structured labels for quality, difficulty, repetition, complexity and coherence. Asynchronous concurrency and resumable processing support annotation across tens of millions of samples.

**Post-training follows SFT → On-Policy Distillation (OPD) → GRPO.** Starting from **Qwen3.5-0.8B-Base**, I apply multimodal instruction tuning, on-policy distillation with **Qwen3.5-27B** as the teacher, then GRPO with rewards addressing reasoning, safety, navigation and planning. The training targets environmental understanding and embodied-task capabilities within a small model.

</div>
</div>

**Cylingo Group (测测) | Senior Algorithm Engineer**<br>
*March 2024 - March 2026*

I led development of the **Xinyuan series**, covering multi-source multimodal data curation, continual pre-training, SFT, RLHF and multi-dimensional evaluation. I coordinated algorithm and engineering teams of **5–20 people** through training, deployment, evaluation and selected open-source releases. The series has accumulated **20,000+ downloads** across HuggingFace and ModelScope.

In psychological support, education and companionship, a model needs to understand the question, follow the conversation and stay within its capabilities. Tone, knowledge grounding, domain performance and general abilities require separate evaluation. Failures and feedback should point to specific changes in the next round of data and training.

Base-model and size choices also depend on deployment conditions. Latency, ecosystem maintenance and costs the team can sustain affect whether the work can keep improving. These constraints shape how I design evaluation and plan training.

Some of the work I can share publicly:

* [Xinyuan-VL-2B](https://huggingface.co/Cylingo/Xinyuan-VL-2B): Trained on **5M+ multimodal samples**, based on Qwen2-VL-2B-Instruct. The model card reports gains over the base model on multiple visual-understanding benchmarks and provides the training and evaluation details.
* [Xinyuan-LLM-14B-0428](https://huggingface.co/Cylingo/Xinyuan-LLM-14B-0428): Domain training on Qwen3-14B-Base for psychological support and education, with model weights and deployment instructions.
* Presented "Open Source Technology Driving Pan-Psychological Services and AI Inclusion" at the **ModelScope Developer Co-Creation Event** and joined a [Tongyi Lab × ModelScope interview](https://mp.weixin.qq.com/s/a16sWs_QPtvoeY4J5eexTg) on model selection, evaluation, personalization and on-device deployment.

<span class='anchor' id='projects-en'></span>

# Selected Projects

<div class="project-entry" markdown="1">

**[MindBridge: Agentic Multimodal Memory](https://github.com/EventHorizon-Lab/MindBridge)**

I believe an agent's capabilities increasingly depend on how it uses **context**. Sustained interaction brings text, audio and images, along with time, location and relationships between people. I designed MindBridge to organize those experiences into multimodal memory that can be maintained over time and used to support judgment and action.

Memory needs to accommodate changing understanding. The words "I am fine" and a speaker's tone may offer different cues. One emotional response cannot establish a lasting personality trait. Similar experiences need to remain associated with the right person. Source observations, user statements and model inferences need distinct provenance, and a state needs a period of validity.

I lead the kernel's design and implementation. It retains ordered source observations; optional models propose events, claims and states; the kernel validates evidence references, maintains validity periods and versions, and records auditable, reversible memory operations. Recall combines semantic and lexical retrieval with time and location constraints. For a given task, the system organizes memories and evidence within a context budget, presents conflicts and returns the evidence cited in an answer.

Compute, latency, cost and privacy requirements vary by application. MindBridge therefore uses a stable kernel with optional capabilities for embedding, generation, audio, vision and memory reasoning. Local and remote models can be exchanged while the kernel maintains memory semantics, evidence relationships and persistence rules. I want deployment choices to remain flexible and existing memories to retain a clear basis.

</div>

<div class="project-entry" markdown="1">

**[FateBridge: A Traditional Metaphysics and Astrology Engine for Agents](https://github.com/thomas-yanxin/FateBridge)**

People often begin with a question about themselves, a relationship or a living space. Exploring it through traditional metaphysics and astrology also involves choosing methods, preparing inputs and understanding calculations. I initiated FateBridge to organize that work so people can begin with their own questions.

FateBridge is a domain computation engine designed for **agentic harnesses**. It brings together **92 tools**, including BaZi, Zi Wei Dou Shu and Western astrology, through MCP, CLI and REST API. The accompanying **Onda skills** work with agents such as Codex and Claude Code, helping select methods, check inputs and organize explanations around the question.

The foundation is a clear account of calculation conditions. Calendar conventions, solar-term boundaries, time zones and true solar time can affect a chart; different schools have distinct rules. Domain code performs the calculations, with structured results retaining conventions, versions and precision information. Computed facts, traditional interpretations and practical suggestions need separate explanations. I want the tools to offer multiple perspectives whose basis can be checked, including the conditions that remain unknown.

</div>

<div class="project-entry" markdown="1">

**QianYe (亲百问): Family Memory and Shared Storytelling**

An old photograph preserves a scene. The experiences of the people in it may never have been recorded. Even when we want to know more about older relatives, finding a place to begin can be difficult. QianYe starts with photographs and familiar objects, helping families tell their stories and assemble a journal they can revisit together. I work on product design and WeChat mini program development for this public-interest project.

I design the flow around storytelling, review and inclusion in the journal. Relatives can answer asynchronously, add perspectives on the same experience and browse by person. The effort required of older adults, and the ability to resume an interrupted recording, affect whether a story is captured at all. Segmented saving, draft recovery, larger text, clear states and generous touch targets are part of that work.

Editing needs to preserve the storyteller's voice. Original audio, images and transcripts remain available, and transcripts can enter the journal directly. AI editing is an explicit choice followed by user review. Family spaces and invitations define who can contribute and who can read. I want the tools to help people express themselves while keeping decisions about the content with the storyteller and family.

</div>

**[Health LLM Knowledge Platform: MindChat & Sunsimiao](https://github.com/X-D-Lab)**

MindChat began with a conversation between my teacher and me about loneliness and companionship within families. I hoped models could offer a more accessible place for people who wanted to talk. That starting point has stayed with me as I work on affective intelligence and sustained interaction.

I was responsible for model training, collaborating on data construction, testing and application integration. The work covered cleaning medical and psychological dialogue data, domain training, instruction tuning, and exploration of retrieval, memory and context mechanisms. It drew my attention to continuity: what was said earlier and how it is expressed now should inform the next response. Those qualities need evaluation, alongside careful attention to the limits of the model's knowledge and capabilities.

The team released [MindChat](https://github.com/X-D-Lab/MindChat) and [Sunsimiao](https://github.com/X-D-Lab/Sunsimiao), including models, examples and deployment materials. Model size, compute, privacy and maintenance all shape deployment choices. These practical constraints continue to inform my work on memory systems and products.

**[ColugoMum: Smart Retail Settlement Platform](https://github.com/thomas-yanxin/ColugoMum)**

Product recognition needs to keep up with the shelf. New items arrive, packaging can look similar, and maintainers need to update the system. I cared about recognition quality and the amount of work the next product addition would require.

I handled project management, algorithm adaptation and the on-device frontend. Using **PaddleClas / PP-ShiTu**, I worked on data construction, lightweight model tuning and cloud–edge–frontend integration. Image retrieval lets new categories enter through additions to the gallery, reducing repeated training. Similar packaging, limited samples and on-device latency still need attention under the actual engineering conditions.

The project received the **National First Prize at the 2022 China Robot and Artificial Intelligence Competition**, appeared at **Baidu Wave Summit 2021+**, and led to a [paper](https://ieeexplore.ieee.org/document/9851085), open-source code and teaching materials. Methods and experiments are described in the [technical article](https://developer.cloud.tencent.com/article/2146677). I also care about whether others can continue using and maintaining a system after delivery.

<div class="project-entry" markdown="1">

**[OXiaoPeng: A Model Application Built from Community Needs](https://github.com/thomas-yanxin/OXiaoPeng)**

OXiaoPeng began with a few specific needs in WeChat groups: managing advertisements, welcoming members and answering recurring questions. I first built a group assistant, then connected ERNIE, PanGu, Yuan, ChatYuan and ChatGPT so people could try conversation and text-to-image generation in a familiar setting. The community helped choose its name.

Users told me directly what was awkward to use. An upstream service change also interrupted image generation. Development had to continue after model integration: collecting feedback, recovering from dependency changes and keeping the service usable. Those experiences made the responsibilities of maintaining a model application concrete for me.

Early deployments served **2,000+ direct users**, with an **indirect reach of 20,000+ people**, across several AI open-source communities. The project received an **OpenI project incubation award in 2022** and was shortlisted for an **interview for the 2023 MiraclePlus Spring Camp (S23)**. I recorded its development and the community's role in ["2022, My Year with OpenI"](https://www.cnblogs.com/thomas-yanxin/p/17067454.html).

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

Model selection, evaluation and product decisions recur in my public talks. These interviews and courses preserve my thinking at different stages and show how those judgments became more concrete through practice.

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

Open-source communities have introduced me to collaborators and kept projects in contact with the questions people encounter while using them. I enjoy explaining a method until someone else can try it. Teaching, events and maintenance give that exchange a way to continue.

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

If you work on multimodal models, agents or memory systems, or have a specific idea about a project here, you are welcome to write to [yx20001210@gmail.com](mailto:yx20001210@gmail.com). A technical question or feedback from use is a good place to start. More code and recent work are on [GitHub](https://github.com/thomas-yanxin).

[← 中文](/)
