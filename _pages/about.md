---
permalink: /
title: ""
excerpt: ""
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

我毕业于**华东理工大学信息科学与工程学院自动化专业**，目前在**心言集团（测测）**担任**高级算法工程师**。我的工作聚焦垂域大模型、多模态大模型与智能体应用，在**情感智能**、**具身智能**方向沉淀了从数据治理、增量预训练、SFT/RLHF 到落地部署的完整链路经验，也持续关注计算机视觉、自然语言处理与多智能体协同决策。

我主导并参与了多个具备落地属性的开源与产业项目，包括 **Xinyuan-LLM**、**Xinyuan-VL**、**MindChat**、**Sunsimiao**、**ColugoMum** 与 **OXiaoPeng** 等，覆盖泛心理、医疗健康、智慧零售与社区问答场景。相关项目在 GitHub 累计获得 **20000+ Stars**，多次进入 GitHub 全球趋势榜，并获得国内外科技媒体、开源社区和产业生态的持续关注。

截至目前，我已出版大模型应用开发图书 **1** 本，发表论文 **3** 篇，获授权实用新型专利 **1** 项、软件著作权 **3** 项；累计获得国家级奖项 **7** 项、省市级奖项 **10+** 项，并受邀参加阿里云通义千问发布会、OpenI/O 启智开发者大会、百度 Wave Summit 2021+ 峰会市集展览等活动。


<span class='anchor' id='-news'></span>

# News

* *2026.05*：出版《LangChain 大模型应用开发：从入门到实践》，清华大学出版社，周涛、薛栋、**颜鑫** 编著。
* *2026.01*：获得 2025 合成数据大赛 · 灵溪 AI for Mental Health 主题赛**一等奖**。
* *2025.09*：受邀担任 2025 年云栖大会「做 AI，Z 世代不一样！」分论坛 **Speaker**。
* *2025.07*：获得 2024 年中国国际大学生创新大赛**铜奖**。
* *2025.07*：接受**阿里云通义实验室**与**魔搭 ModelScope 社区**联合采访。

<span class='anchor' id='experience'></span>
<span class='anchor' id='-company'></span>

# Professional Experience

**心言集团 | 高级算法工程师**<br>
*2024.03 - 至今*

* 主导 **Xinyuan 系列垂域大模型**全链路研发，覆盖 **4500万+** 多源数据的脱敏、去重、质量打分、增量预训练、SFT、RLHF 与多维评测，推动系列模型在 **HuggingFace + ModelScope** 双平台累计下载 **2万+**。
* 发布 [Xinyuan-VL-2B](https://huggingface.co/Cylingo/Xinyuan-VL-2B)，围绕多模态理解与低参数规模模型评测完成训练和开源交付，登顶当时 [OpenCompass](https://huggingface.co/spaces/opencompass/open_vlm_leaderboard) **&lt;4B 参数榜首**。
* 发布 [Xinyuan-LLM-14B-0428](https://huggingface.co/Cylingo/Xinyuan-LLM-14B-0428)，打造**世界首个泛心理 + 教育领域基座模型**，将心理服务、教育场景与通用大模型能力进行垂域融合。
* 主导团队对外技术布道，受邀在**阿里云魔搭 ModelScope 开发者共创会**主讲《开源技术驱动下的泛心理服务与 AI 普惠实践之路》，并完成[阿里云通义实验室 × 魔搭 ModelScope 社区联合专访](https://mp.weixin.qq.com/s/a16sWs_QPtvoeY4J5eexTg)，扩大泛心理大模型在开发者与产业用户中的认知。

<span class='anchor' id='projects'></span>
<span class='anchor' id='-projects'></span>

# Selected Projects

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Health LLM Platform</div><img src='/images/structure3.png' alt="健康大模型知识中台" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[健康大模型知识中台](https://github.com/X-D-Lab)**

* 主导构建覆盖基础模型、知识增强与应用部署的健康大模型矩阵，基于 SimHash、Perplexity 等方法治理**百万级医疗数据**与**十万级心理对话数据**，累计处理 **400万+** 多源样本。
* 在 Qwen、InternLM 等开源模型基础上完成增量预训练、SFT 与 RLHF，孵化 [Sunsimiao](https://github.com/X-D-Lab/Sunsimiao) 医疗大模型（**400+ Stars**）与 [MindChat](https://github.com/X-D-Lab/MindChat) 心理大模型（**700+ Stars**），并通过 RAG 与三维记忆体系降低大模型幻觉风险。
* 通过 [OXiaoPeng](https://github.com/thomas-yanxin/OXiaoPeng) 将模型能力接入微信生态，沉淀 **2000+ 直接用户、2万+ 间接覆盖用户**，让心理与健康支持从模型研发跑通到真实社区运营反馈闭环。
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ColugoMum</div><img src='/images/structure1.png' alt="ColugoMum 智能零售结算平台" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[袋鼯麻麻 ColugoMum：智能零售结算平台](https://github.com/thomas-yanxin/Smart_container)**

* 主导研发智能零售结算平台，针对无人零售中的**多类别、小样本、高相似度、高频更新**问题，自研基于图像检索的零售商品识别算法，相比传统目标检测方案**免除新品上架重训练**，显著降低真实零售场景的维护成本。
* 项目获得 **2022 年第 24 届中国机器人及人工智能大赛全国一等奖**，受邀亮相**百度 Wave Summit 2021+ 开发者峰会市集展览**，累计浏览 **10万+**，GitHub 累计 **200+ Stars**。
* 入选启智社区优秀开源项目孵化器并获**2022 年启智社区优秀孵化项目奖**，同步落地**教育部产学合作协同育人项目（百度 & 华东理工大学）课程建设成果**。
</div>
</div>

<div class="project-entry" markdown="1">

**[欧小鹏 OXiaoPeng](https://github.com/thomas-yanxin/OXiaoPeng)**

* 在大模型应用尚未普及的早期，率先构建多模型聚合应用，统一封装**百度文心 ERNIE、鹏程·盘古 PanGu、浪潮源 Yuan1.0、元语智能 ChatYuan、ChatGPT 等 5 类主流大模型**，并以**微信、飞书、QQ 三类前端载体**提供对话、文生图与领域知识库问答能力，为后续社区评测与用户反馈采集提供统一接入层。
* 将真实社区运营反馈纳入大模型体验评估，沉淀**直接用户 2000+、间接覆盖用户 2万+**，服务 OpenI 启智社区、鹏程·盘古、元语智能、飞桨领航团等多个 AI 社区。
* 项目入围 **2023 年奇绩春季创业营（S23）面试**，并获得 **2022 年启智社区优秀孵化项目奖**。

</div>

<!-- <details class="archive-details" markdown="1">
<summary>更多项目与早期成果</summary>

* **[慧眼识垃圾](https://github.com/thomas-yanxin/the-eye-knows-the-garbage)**：构建个人、垃圾桶与政府三端协同的垃圾分类识别系统，获得软件著作权，并在中国大学生计算机设计大赛、上海市计算机应用能力设计大赛、中国机器人及人工智能大赛上海赛区等赛事中获奖。
* 更多开源项目与代码请见 [GitHub 个人主页](https://github.com/thomas-yanxin)。

</details> -->

<span class='anchor' id='publications-ip'></span>
<span class='anchor' id='-publications'></span>

# Publications & IP

* 周涛、薛栋、**颜鑫**. 《LangChain 大模型应用开发：从入门到实践》[M]. 清华大学出版社.
* D. Xue, J. Tu, M. Wang, **X. Yan**, F. Liu and J. Hu, "[Towards Privacy-Preserving Mental Health Support with Large Language Models](https://arxiv.org/abs/2601.01993)," *arXiv preprint* arXiv:2601.01993, 2026.
* F.-Q. Cui, J. Huang, S. Zhao, J.-M. Guo, Q. Cai, **X. Yan** and Z. Liu, "[ReMA: A Training-Free Plug-and-Play Mixing Augmentation for Video Behavior Recognition](https://arxiv.org/abs/2601.00311)," *arXiv preprint* arXiv:2601.00311, 2026.
* F.-Q. Cui, J. Huang, S. Zhao, X. Li, **X. Yan**, Z. Jia and X. Zhou, "[Robust Low-Rank Sparse Framework for Video-Based Affective Computing](https://api.semanticscholar.org/CorpusID:283055464)," 2025.
* **X. Yan**, Q. Hu, X. Huang and C. Shen, "[Intelligent Retail Settlement Platform based on Image Retrieval](https://ieeexplore.ieee.org/document/9851085)," 2022 4th International Conference on Communications, Information System and Computer Engineering (CISCE), 2022, pp. 609-616, doi: 10.1109/CISCE55963.2022.9851085.
* 【[实用新型专利](/proof/%E4%B8%93%E5%88%A9-2022208288888%E6%99%BA%E8%83%BD%E9%9B%B6%E5%94%AE%E7%BB%93%E7%AE%97%E5%B9%B3%E5%8F%B0.pdf)】智能零售结算平台；发明人：**颜鑫**、沈晨、杜旭东；专利号：ZL 2022 2 0828888.8；授权公告号：CN 216979871 U。
* 【[软件著作权](/proof/%E8%BD%AF%E4%BB%B6%E8%91%97%E4%BD%9C%E6%9D%83-%E8%A2%8B%E9%BC%AF%E9%BA%BB%E9%BA%BB.jpg)】袋鼯麻麻：智能零售结算系统 V1.0；著作权人：**颜鑫**、胡庆春、沈晨、杜旭东、黄小悦、申佳川；登记号：2022SRE010935。
* 【[软件著作权](/proof/%E8%BD%AF%E4%BB%B6%E8%91%97%E4%BD%9C%E6%9D%83-%E6%85%A7%E7%9C%BC%E8%AF%86%E5%9E%83%E5%9C%BE.jpg)】慧眼识垃圾系统 V1.0；著作权人：**颜鑫**、沈晨、杜旭东；登记号：2021SR0986633。
* 【[软件著作权](/proof/%E8%BD%AF%E4%BB%B6%E8%91%97%E4%BD%9C%E6%9D%83-%E8%87%AA%E5%8A%A8%E9%97%AE%E7%AD%94.pdf)】基于领域知识库的智能问答系统 V1.0；著作权人：黄小悦、韩响尘、王鑫、**颜鑫**、林宏聪、任竞展、周天奕；登记号：2022SRE025369。

<span class='anchor' id='awards-honors'></span>
<span class='anchor' id='-awards'></span>
<span class='anchor' id='-honors'></span>

# Awards & Honors

## Featured Awards

* 2025 合成数据大赛 · 灵溪 AI for Mental Health 主题赛**一等奖** - [证明](https://mp.weixin.qq.com/s/qNfiSLt1TfaqjBpXB9rHKQ)
* 2024 中国国际大学生创新大赛「人因与功效学专项：人因智能关键技术——非接触集成式驾驶员状态智能检测边缘计算技术」**铜奖**
* 2024 安徽省大学生创新创业大赛「AI 赋能下的军民融合应用创新」产业赛道**金奖**
* 2023 第 9 届中国国际“互联网+”大学生创新创业大赛「灵心智能」**铜奖**
* 2023 第 9 届安徽省“互联网+”大学生创新创业大赛「灵心智能」**金奖**
* 2022 第 8 届中国国际“互联网+”大学生创新创业大赛「晓声科技」**银奖** - [证明](https://mp.weixin.qq.com/s/EujzF8ubT_1PkoMs3u-qTw)
* 2022 第 24 届中国机器人及人工智能大赛全国**一等奖** - [证明](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/2022%E5%B9%B4%E7%AC%AC24%E5%B1%8A%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8F%8A%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%A4%A7%E8%B5%9B%E5%85%A8%E5%9B%BD%E4%B8%80%E7%AD%89%E5%A5%96.pdf)

## Selected Honors

* 百度飞桨开发者技术专家 - [证明](https://www.paddlepaddle.org.cn/ppdemd?n=/ppdemd/%E9%A2%9C%E9%91%AB)
* 开放原子开源基金会**活力开源贡献者（技术、生态贡献）**
* 百度飞桨 AIStudio 2022 年度影响力人物 **TOP10** - [证明](https://mp.weixin.qq.com/s/jKTEAP1euh4yBoatod9E0Q)
* OpenI 启智社区首批核心体验官 - [证明](https://openi.org.cn/index.php?m=content&c=index&a=show&catid=221&id=53)
* Datawhale 成员 - [证明](https://mp.weixin.qq.com/s/_I-aNX1lAPV2_eYoS0w_Bg)

<details class="archive-details" markdown="1">
<summary>更多竞赛与荣誉</summary>

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
* 2022 国家级大学生创新创业项目**第一主持人**，**优秀结题** - [证明](http://gjcxcy.bjtu.edu.cn/NewLXItemListForStudentDetail.aspx?ItemNo=941768&year=2022&type=student&IsLXItem=0)
* 英特尔创新大使、华为云云享专家、中国人工智能学会会员、中国自动化学会预备会员、中国宇航学会会员。
* 2022 Jina 社区活跃贡献者、阿里云开发者社区乘风者计划专家博主、OpenI 启智社区积极贡献者、OpenI 启智社区活跃开发者。
* 百度飞桨 WAVE SUMMIT 2021 / 2021+ 优秀开源开发者。

</details>

<span class='anchor' id='talks-media'></span>
<span class='anchor' id='-invited-talks'></span>
<span class='anchor' id='-dispersions'></span>

# Talks & Media

## Invited Talks

* *2025.09*：2025 年云栖大会「做 AI，Z 世代不一样！」分论坛，Speaker。
* *2025.05*：阿里云魔搭 ModelScope 开发者共创会，《开源技术驱动下的泛心理服务与 AI 普惠实践之路》。
* *2023.06*：飞桨 PaddlePaddle 大模型应用开发课，《全流程构建智能文档查询助手》 - [视频](https://www.bilibili.com/video/BV18h4y1d77H/?share_source=copy_web&vd_source=8162f92b2a1a94035ca9e4e0f6e1860a)
* *2023.05*：Datawhale AIGC 主题学习，《基于 LangChain 和 ChatGLM-6B 构建本地知识库自动问答应用》 - [视频](https://www.bilibili.com/video/BV11N411y7dT/?share_source=copy_web&vd_source=8162f92b2a1a94035ca9e4e0f6e1860a)
* *2022.04*：飞桨产业实践范例库，商品识别产业应用实战 - [视频](https://www.bilibili.com/video/BV1Fu411y7co?spm_id_from=333.999.0.0)

## Media Coverage

* 【阿里通义千问】写代码，也写情绪 - [文章](https://mp.weixin.qq.com/s/a16sWs_QPtvoeY4J5eexTg) / [视频](https://www.bilibili.com/video/BV1GVgNzLEHs/?share_source=copy_web) / [音频](https://www.xiaoyuzhoufm.com/episodes/6878c7f5a9dec92500c5c93e)
* 【Founder Park】Qwen 3 发布，Founder Park 采访心言集团高级算法工程师左右 - [文章](https://mp.weixin.qq.com/s/pb8eoQhvAF9O5N3CSO7rIg)
* 【阿里通义千问】通义千问 + 心理领域 = ? - [链接](https://mp.weixin.qq.com/s/ZcRES0s7zD_yDeWTTr6Gyg)
* 【科学网】人皆孤独？他们用通义千问开发了一款心理大模型 - [链接](https://news.sciencenet.cn/htmlnews/2023/12/513458.shtm?bsh_bid=5975565683)
* 【机器之心 SOTA 模型】MindChat 心理大模型等项目多个新模型版本开源 - [链接](https://mp.weixin.qq.com/s/PppVdSHObBG7IRA-vgVLlA)

<details class="archive-details" markdown="1">
<summary>更多报道与公开内容</summary>

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
* *2021.07*：飞桨领航团 AI 达人创造营 - [视频](https://www.bilibili.com/video/BV1qq4y1X7uZ?spm_id_from=333.999.0.0&vd_source=02aea3a5719f15c2ff7a32ade6916170)
* *2021.05*：飞桨开发者说，商品识别产业应用实战 - [视频](https://www.bilibili.com/video/BV13p4y1t76K?spm_id_from=333.999.0.0)

</details>

<span class='anchor' id='community-activities'></span>
<span class='anchor' id='-activities'></span>
<span class='anchor' id='-social-practices'></span>

# Community & Activities

**[飞桨领航团](https://www.paddlepaddle.org.cn/ppdenavigategroup) | 华东区主管**<br>
*2021.09 - 2022.07*

* 统筹飞桨领航团**华东七省**运营，主导高校拓展、团长选拔、活动策划与项目落地，任期内新增覆盖高校 **50+** 所，涵盖浙江大学、东南大学、上海科技大学、南京航空航天大学、苏州大学、华东理工大学、合肥工业大学等 **985 / 211 / 双一流**院校。

**[华东理工大学飞桨领航团](https://www.paddlepaddle.org.cn/ppdenavigategroup) | 团长**<br>
*2021.04 - 2022.01*

* 从零搭建校级飞桨领航团，围绕飞桨推广与 AI 实战组织主题讲座、知识竞赛、实操挑战赛与项目体验，累计举办 **5+** 场活动、覆盖 **100+** 人次、孵化 **10+** 个精品项目。
* 推动“教育部产学合作协同育人项目（百度公司 & 华东理工大学）”课程建设落地，把社区活动沉淀为面向校内 AI 人才培养的课程与实践资源。

**华东理工大学信息学院社团管理部 | 顾问**<br>
*2019.10 - 2020.06*

* 协调学院 **10+** 学生社团运作，搭建社团与院团委常态化沟通机制，组织“社团招新”“新人培训”“班歌班标大赛”等院级活动。
* 主持五大学院联合“社团交流会”全流程组织，负责邀请函制作、主持串场、现场协调与复盘总结。

<details class="archive-details" markdown="1">
<summary>更多社区与社会实践</summary>

* Qwen Ambassador。
* 2022 OpenI 启智社区首批资深体验官 - [证明](https://openi.org.cn/index.php?m=content&c=index&a=show&catid=221&id=53)
* 2022 OpenI 启智社区 & 合肥工业大学情感计算与先进智能机器安徽省重点实验室产学研共建学生负责人 - [证明](/proof/OpenI&MAC_LAB.jpg)
* 2022 百度飞桨智慧零售商品识别产业案例共建者 - [视频](https://www.bilibili.com/video/BV1Fu411y7co/)
* 2022 华东理工大学通海茶叙第 130 期讲座嘉宾 - [证明](https://mp.weixin.qq.com/s/yyOjg0qnRo8TggylMhyqgA)
* 2022 Datawhale 组队学习第 34 期航海士 - [证明](https://mp.weixin.qq.com/s/8NAmTy5n7TXxVH85WAR-gA)
* 2022 百度飞桨领航团 AI 达人创造营第二期讲师 - [证明](https://mp.weixin.qq.com/s/JfHYZZE701Qt7vJJa1K11w)
* 2021 百度飞桨领航团 AI 达人创造营第一期讲师 - [证明](https://mp.weixin.qq.com/s/MD-ni4z5EITpdrAZd2FGyg)
* 2021 百度上海飞桨领航团 & 五角场创新创业学院 meetup 活动 - [证明](https://mp.weixin.qq.com/s/NMJVAttPUHiZEaIIz1zQoA)
* 2020 及 2021 华东理工大学新生迎新活动志愿者 - [证明](/proof/迎新志愿者.jpg)
* 2021 上海市无偿献血活动参与者。
* 2020 华东理工大学 95 公益周“爱加餐项目”志愿者。
* 2019 华东理工大学寒假招生宣传、自主宣讲活动优秀团队奖 - [证明](/proof/招生宣传.jpg)
* 2019 华东理工大学青年马克思主义者培养工程结业 - [证明](/proof/青马班.jpg)

</details>

<span class='anchor' id='-educations'></span>

# Education

**华东理工大学 | 信息科学与工程学院 | 自动化专业**<br>
*2019.09 - 2023.06*

* 华东理工大学校综合课程奖学金三等。
* 华东理工大学信息科学与工程学院优秀团员 - [证明](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/%E4%BC%98%E7%A7%80%E5%9B%A2%E5%91%98.jpg)
* 华东理工大学青春战“疫”优秀志愿者 - [证明](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/%E6%8A%97%E7%96%AB%E4%BC%98%E7%A7%80%E5%BF%97%E6%84%BF%E8%80%85.jpg)
* 华东理工大学信息科学与工程学院第六期创新实践育人计划优秀学员 - [证明](https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/%E5%88%9B%E6%96%B0%E8%82%B2%E4%BA%BA.jpg)
* 华东理工大学信息科学与工程学院社会工作奖 C 等 - [证明](/proof/%E7%A4%BE%E4%BC%9A%E5%B7%A5%E4%BD%9C%E5%A5%96.jpg)
