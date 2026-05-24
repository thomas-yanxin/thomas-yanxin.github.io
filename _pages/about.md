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

<style>
  :root {
    --accent-color: #00369f;
    --accent-gradient: linear-gradient(135deg, #00369f 0%, #1e40af 100%);
    --bg-offset: #fafafa;
    --border-color: #e5e7eb;
    --text-primary: #1e293b;
    --text-secondary: #475569;
    --monospace: Monaco, Consolas, "Lucida Console", monospace;
  }

  /* Headings decoration */
  h1, h2, h3 {
    color: var(--text-primary);
  }
  
  h1 {
    font-size: 2.1em;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 24px;
    position: relative;
    padding-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  h1::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: var(--accent-gradient);
    border-radius: 2px;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 700;
    margin-top: 44px;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 6px;
    border-bottom: none !important;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  h2::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--accent-gradient);
    border-radius: 2px;
  }

  /* Stats grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin: 32px 0;
  }
  @media (min-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .stat-card {
    background: #ffffff;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 20px 16px;
    text-align: center;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }
  .stat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -10px rgba(0, 54, 159, 0.15);
    border-color: rgba(0, 54, 159, 0.3);
  }
  .stat-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--accent-gradient);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .stat-card:hover::before {
    opacity: 1;
  }
  .stat-num {
    font-size: 1.8em;
    font-weight: 800;
    color: var(--accent-color);
    line-height: 1.2;
    margin-bottom: 6px;
    font-family: var(--monospace);
  }
  .stat-label {
    font-size: 0.82em;
    font-weight: 600;
    color: var(--text-secondary);
  }

  /* News List */
  .news-list {
    margin: 24px 0;
    padding-left: 0 !important;
    list-style: none !important;
  }
  .news-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 12px 8px;
    border-bottom: 1px dashed #f3f4f6;
    transition: all 0.2s ease;
    border-radius: 6px;
  }
  .news-item:last-child {
    border-bottom: none;
  }
  .news-item:hover {
    padding-left: 14px;
    background-color: rgba(0, 54, 159, 0.015);
  }
  .news-date {
    font-family: var(--monospace);
    font-size: 0.8em;
    font-weight: 700;
    background: rgba(0, 54, 159, 0.06);
    color: var(--accent-color);
    padding: 3px 8px;
    border-radius: 6px;
    white-space: nowrap;
    letter-spacing: -0.02em;
  }
  .news-content {
    font-size: 0.95em;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  /* Timeline */
  .timeline {
    position: relative;
    margin: 32px 0 32px 8px;
    padding-left: 24px;
    border-left: 2px solid #e5e7eb;
  }
  .timeline-item {
    position: relative;
    margin-bottom: 32px;
  }
  .timeline-item:last-child {
    margin-bottom: 0;
  }
  .timeline-badge {
    position: absolute;
    left: -33px;
    top: 4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ffffff;
    border: 4px solid var(--accent-color);
    box-shadow: 0 0 0 4px rgba(0, 54, 159, 0.08);
    transition: all 0.3s ease;
  }
  .timeline-item:hover .timeline-badge {
    background: var(--accent-color);
    box-shadow: 0 0 0 6px rgba(0, 54, 159, 0.12);
  }
  .timeline-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  @media (min-width: 640px) {
    .timeline-header {
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }
  }
  .timeline-title {
    font-size: 1.1em;
    font-weight: 700;
    color: var(--text-primary);
  }
  .timeline-time {
    font-family: var(--monospace);
    font-size: 0.8em;
    color: #4b5563;
    background: #f1f5f9;
    padding: 3px 10px;
    border-radius: 6px;
    margin-top: 4px;
    white-space: nowrap;
    border: 1px solid #e2e8f0;
  }
  .timeline-content {
    font-size: 0.95em;
    color: var(--text-secondary);
  }
  .timeline-content ul {
    list-style-type: none !important;
    padding-left: 0 !important;
    margin-left: 0 !important;
  }
  .timeline-content li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 8px;
    line-height: 1.6;
  }
  .timeline-content li::before {
    content: "▫";
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
  }

  /* Project Cards (Double-Bezel Design) */
  .project-card {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    margin-bottom: 28px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
  }
  .project-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 30px -10px rgba(0, 36, 159, 0.08), 0 10px 15px -5px rgba(0, 0, 0, 0.01);
    border-color: rgba(0, 54, 159, 0.25);
  }
  @media (min-width: 768px) {
    .project-card {
      flex-direction: row;
    }
  }
  .project-img-wrapper {
    width: 100%;
    padding: 20px;
    background: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--border-color);
    position: relative;
  }
  @media (min-width: 768px) {
    .project-img-wrapper {
      width: 38%;
      border-bottom: none;
      border-right: 1px solid var(--border-color);
    }
  }
  .project-img-inner {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 14px rgba(0,0,0,0.06);
    transition: transform 0.5s ease;
    width: 100%;
    aspect-ratio: 16/10;
  }
  .project-img-inner img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .project-card:hover .project-img-inner {
    transform: scale(1.03);
  }
  .project-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background: var(--accent-gradient);
    color: #ffffff;
    font-size: 0.65em;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 6px;
    letter-spacing: 0.05em;
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 36, 159, 0.15);
    text-transform: uppercase;
  }
  .project-info {
    width: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    .project-info {
      width: 62%;
    }
  }
  .project-title {
    font-size: 1.25em;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 12px;
    margin-top: 0 !important;
  }
  .project-title a {
    color: var(--text-primary);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .project-title a:hover {
    color: var(--accent-color);
  }
  .project-desc {
    font-size: 0.95em;
    color: var(--text-secondary);
  }
  .project-desc ul {
    list-style-type: none !important;
    padding-left: 0 !important;
    margin-left: 0 !important;
  }
  .project-desc li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 8px;
    line-height: 1.6;
  }
  .project-desc li::before {
    content: "▫";
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
  }
  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
  }
  .tech-tag {
    font-family: var(--monospace);
    font-size: 0.75em;
    font-weight: 600;
    background: #f1f5f9;
    color: #475569;
    padding: 2px 8px;
    border-radius: 5px;
    border: 1px solid #e2e8f0;
  }

  /* Custom Sleek Buttons (Island CTA) */
  .btn-geek {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #ffffff;
    color: var(--accent-color) !important;
    border: 1px solid rgba(0, 54, 159, 0.18);
    font-size: 0.8em;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    text-decoration: none !important;
    box-shadow: 0 1px 2px rgba(0,0,0,0.01);
    vertical-align: middle;
  }
  .btn-geek:hover {
    background: var(--accent-gradient);
    color: #ffffff !important;
    border-color: transparent;
    box-shadow: 0 6px 12px -3px rgba(0, 36, 159, 0.2);
    transform: translateY(-1px);
  }
  .btn-geek .icon-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    background: rgba(0, 54, 159, 0.05);
    color: var(--accent-color);
    border-radius: 50%;
    transition: all 0.3s ease;
    font-size: 0.7em;
  }
  .btn-geek:hover .icon-circle {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    transform: rotate(45deg);
  }

  /* List Geek */
  .list-geek {
    padding-left: 0 !important;
    list-style: none !important;
    margin-left: 0 !important;
  }
  .list-geek-item {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    line-height: 1.6;
    color: var(--text-secondary);
  }
  .list-geek-item::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
    font-family: var(--monospace);
  }

  /* Geeky Badges */
  .badge-geek {
    font-family: var(--monospace);
    font-size: 0.75em;
    font-weight: 700;
    border: 1px solid var(--accent-color);
    color: var(--accent-color);
    background: rgba(0, 54, 159, 0.02);
    padding: 2px 8px;
    border-radius: 5px;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    display: inline-block;
    margin-right: 6px;
    vertical-align: middle;
  }

  /* Elegant Details block */
  .details-geek {
    border: 1px solid var(--border-color);
    border-radius: 12px;
    background: #fbfbfb;
    margin: 20px 0;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .details-geek[open] {
    background: #ffffff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.02);
  }
  .details-geek summary {
    padding: 14px 18px;
    font-weight: 700;
    color: var(--text-primary);
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    transition: background 0.2s ease;
    list-style: none !important;
  }
  .details-geek summary::-webkit-details-marker {
    display: none !important;
  }
  .details-geek summary:hover {
    background: rgba(0, 54, 159, 0.02);
  }
  .details-geek summary::after {
    content: "＋";
    font-family: var(--monospace);
    font-size: 1.1em;
    color: var(--accent-color);
    transition: transform 0.3s ease;
  }
  .details-geek[open] summary::after {
    content: "－";
    transform: rotate(180deg);
  }
  .details-geek-content {
    padding: 12px 18px 18px 18px;
    border-top: 1px solid #f3f4f6;
  }
</style>

# <i class="fas fa-user-ninja"></i> About Me

我毕业于**华东理工大学信息科学与工程学院自动化专业**，目前在*心言集团*担任**高级算法工程师**。我的工作聚焦垂域大模型、多模态大模型与智能体应用，在**情感智能**、**具身智能**方向沉淀了从数据治理、增量预训练、SFT/RLHF 到落地部署的完整链路经验，也持续关注计算机视觉、自然语言处理与多智能体协同决策。

我主导并参与了多个具备落地属性的开源与产业项目，包括 **Xinyuan-LLM**、**Xinyuan-VL**、**MindChat**、**Sunsimiao**、**ColugoMum** 与 **OXiaoPeng** 等，覆盖泛心理、医疗健康、智慧零售与社区问答场景。相关项目在 GitHub 累计获得 **20000+ Stars**，多次进入 GitHub 全球趋势榜，并获得国内外科技媒体、开源社区和产业生态的持续关注。

截至目前，我已出版大模型应用开发图书 **1** 本，发表论文 **3** 篇，获授权实用新型专利 **1** 项、软件著作权 **3** 项；累计获得国家级奖项 **7** 项、省市级奖项 **10+** 项，并受邀参加阿里云通义千问发布会、OpenI/O 启智开发者大会、百度 Wave Summit 2021+ 峰会市集展览等活动。

<!-- Stats Highlight Grid -->
<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-num">20k+</div>
    <div class="stat-label">GitHub Stars</div>
  </div>
  <div class="stat-card">
    <div class="stat-num">1 本</div>
    <div class="stat-label">专著出版</div>
  </div>
  <div class="stat-card">
    <div class="stat-num">3 篇</div>
    <div class="stat-label">发表论文</div>
  </div>
  <div class="stat-card">
    <div class="stat-num">17 项</div>
    <div class="stat-label">科创奖项</div>
  </div>
</div>

<span class='anchor' id='-news'></span>

# <i class="fas fa-bullhorn"></i> News

<ul class="news-list">
  <li class="news-item">
    <span class="news-date">2026.05</span>
    <span class="news-content">出版《LangChain 大模型应用开发：从入门到实践》，清华大学出版社，周涛、薛栋、<strong>颜鑫</strong> 编著。</span>
  </li>
  <li class="news-item">
    <span class="news-date">2026.01</span>
    <span class="news-content">获得 2025 合成数据大赛 &middot; 灵溪 AI for Mental Health 主题赛<strong>一等奖</strong>。</span>
  </li>
  <li class="news-item">
    <span class="news-date">2025.09</span>
    <span class="news-content">受邀担任 2025 年云栖大会「做 AI，Z 世代不一样！」分论坛 <strong>Speaker</strong>。</span>
  </li>
  <li class="news-item">
    <span class="news-date">2025.07</span>
    <span class="news-content">获得 2024 年中国国际大学生创新大赛<strong>铜奖</strong>。</span>
  </li>
  <li class="news-item">
    <span class="news-date">2025.07</span>
    <span class="news-content">接受<strong>阿里云通义实验室</strong>与<strong>魔搭 ModelScope 社区</strong>联合采访。</span>
  </li>
</ul>

<span class='anchor' id='experience'></span>
<span class='anchor' id='-company'></span>

# <i class="fas fa-briefcase"></i> Professional Experience

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-badge"></div>
    <div class="timeline-header">
      <span class="timeline-title">心言集团 &middot; 高级算法工程师</span>
      <span class="timeline-time">2024.03 - 至今</span>
    </div>
    <div class="timeline-content">
      <ul>
        <li>主导 <strong>Xinyuan 系列垂域大模型</strong>全链路研发，覆盖 <strong>4500万+</strong> 多源数据的脱敏、去重、质量打分、增量预训练、SFT、RLHF 与多维评测，推动系列模型在 <strong>HuggingFace + ModelScope</strong> 双平台累计下载 <strong>2万+</strong>。</li>
        <li>发布 <a href="https://huggingface.co/Cylingo/Xinyuan-VL-2B" class="btn-geek">Xinyuan-VL-2B <span class="icon-circle">↗</span></a>，围绕多模态理解与低参数规模模型评测完成训练和开源交付，登顶当时 <a href="https://huggingface.co/spaces/opencompass/open_vlm_leaderboard" class="btn-geek">OpenCompass <span class="icon-circle">↗</span></a> <strong>&lt;4B 参数榜首</strong>。</li>
        <li>发布 <a href="https://huggingface.co/Cylingo/Xinyuan-LLM-14B-0428" class="btn-geek">Xinyuan-LLM-14B-0428 <span class="icon-circle">↗</span></a>，打造<strong>世界首个泛心理 + 教育领域基座模型</strong>，将心理服务、教育场景与通用大模型能力进行垂域融合。</li>
        <li>主导团队对外技术布道，受邀在<strong>阿里云魔搭 ModelScope 开发者共创会</strong>主讲《开源技术驱动下的泛心理服务与 AI 普惠实践之路》，并完成<a href="https://mp.weixin.qq.com/s/a16sWs_QPtvoeY4J5eexTg" class="btn-geek">阿里云通义实验室 × 魔搭 ModelScope 社区联合专访 <span class="icon-circle">↗</span></a>，扩大泛心理大模型在开发者与产业用户中的认知。</li>
      </ul>
    </div>
  </div>
</div>

<span class='anchor' id='projects'></span>
<span class='anchor' id='-projects'></span>

# <i class="fas fa-project-diagram"></i> Selected Projects

<!-- Project 1 -->
<div class="project-card">
  <div class="project-img-wrapper">
    <span class="project-badge">HEALTH LLM PLATFORM</span>
    <div class="project-img-inner">
      <img src="/images/structure3.png" alt="健康大模型知识中台">
    </div>
  </div>
  <div class="project-info">
    <div>
      <h3 class="project-title">
        <a href="https://github.com/X-D-Lab">健康大模型知识中台</a>
      </h3>
      <div class="tech-tags">
        <span class="tech-tag">SimHash</span>
        <span class="tech-tag">Perplexity</span>
        <span class="tech-tag">RAG</span>
        <span class="tech-tag">SFT/RLHF</span>
        <span class="tech-tag">Health Domain</span>
      </div>
      <div class="project-desc">
        <ul>
          <li>主导构建覆盖基础模型、知识增强与应用部署的健康大模型矩阵，基于 SimHash、Perplexity 等方法治理<strong>百万级医疗数据</strong>与<strong>十万级心理对话数据</strong>，累计处理 <strong>400万+</strong> 多源样本。</li>
          <li>在 Qwen、InternLM 等开源模型基础上完成增量预训练、SFT 与 RLHF，孵化 <a href="https://github.com/X-D-Lab/Sunsimiao" class="btn-geek"><i class="fab fa-github"></i> Sunsimiao (400+ ★) <span class="icon-circle">↗</span></a> 医疗大模型与 <a href="https://github.com/X-D-Lab/MindChat" class="btn-geek"><i class="fab fa-github"></i> MindChat (700+ ★) <span class="icon-circle">↗</span></a> 心理大模型，并通过 RAG 与三维记忆体系降低大模型幻觉风险。</li>
          <li>通过 <a href="https://github.com/thomas-yanxin/OXiaoPeng" class="btn-geek"><i class="fab fa-github"></i> OXiaoPeng <span class="icon-circle">↗</span></a> 将模型能力接入微信生态，沉淀 <strong>2000+ 直接用户、2万+ 间接覆盖用户</strong>，让心理与健康支持从模型研发跑通到真实社区运营反馈闭环。</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- Project 2 -->
<div class="project-card">
  <div class="project-img-wrapper">
    <span class="project-badge">COLUGOMUM</span>
    <div class="project-img-inner">
      <img src="/images/structure1.png" alt="ColugoMum 智能零售结算平台">
    </div>
  </div>
  <div class="project-info">
    <div>
      <h3 class="project-title">
        <a href="https://github.com/thomas-yanxin/Smart_container">袋鼯麻麻 ColugoMum：智能零售结算平台</a>
      </h3>
      <div class="tech-tags">
        <span class="tech-tag">Image Retrieval</span>
        <span class="tech-tag">Few-Shot Learning</span>
        <span class="tech-tag">PaddlePaddle</span>
        <span class="tech-tag">Computer Vision</span>
        <span class="tech-tag">Smart Retail</span>
      </div>
      <div class="project-desc">
        <ul>
          <li>主导研发智能零售结算平台，针对无人零售中的<strong>多类别、小样本、高相似度、高频更新</strong>问题，自研基于图像检索的零售商品识别算法，相比传统目标检测方案<strong>免除新品上架重训练</strong>，显著降低真实零售场景的维护成本。</li>
          <li>项目获得 <strong>2022 年第 24 届中国机器人及人工智能大赛全国一等奖</strong>，受邀亮相<strong>百度 Wave Summit 2021+ 开发者峰会市集展览</strong>，累计浏览 <strong>10万+</strong>，GitHub 累计 <strong>200+ Stars</strong>。</li>
          <li>入选启智社区优秀开源项目孵化器并获<strong>2022 年启智社区优秀孵化项目奖</strong>，同步落地<strong>教育部产学合作协同育人项目（百度 & 华东理工大学）课程建设成果</strong>。</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- Project 3 -->
<div class="project-card">
  <div class="project-info" style="width: 100%;">
    <div>
      <h3 class="project-title">
        <a href="https://github.com/thomas-yanxin/OXiaoPeng">欧小鹏 OXiaoPeng：多大模型智能体聚合层</a>
      </h3>
      <div class="tech-tags">
        <span class="tech-tag">Multi-Model API</span>
        <span class="tech-tag">WeChat Bot</span>
        <span class="tech-tag">Feishu Bot</span>
        <span class="tech-tag">Community Bot</span>
      </div>
      <div class="project-desc">
        <ul>
          <li>在大模型应用尚未普及的早期，率先构建多模型聚合应用，统一封装<strong>百度文心 ERNIE、鹏程·盘古 PanGu、浪潮源 Yuan1.0、元语智能 ChatYuan、ChatGPT 等 5 类主流大模型</strong>，并以<strong>微信、飞书、QQ 三类前端载体</strong>提供对话、文生图与领域知识库问答能力，为后续社区评测与用户反馈采集提供统一接入层。</li>
          <li>将真实社区运营反馈纳入大模型体验评估，沉淀<strong>直接用户 2000+、间接覆盖用户 2万+</strong>，服务 OpenI 启智社区、鹏程·盘古、元语智能、飞桨领航团等多个 AI 社区。</li>
          <li>项目入围 <strong>2023 年奇绩春季创业营（S23）面试</strong>，并获得 <strong>2022 年启智社区优秀孵化项目奖</strong>。</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- Collapsible Projects -->
<details class="details-geek">
  <summary>更多项目与早期成果</summary>
  <div class="details-geek-content">
    <ul class="list-geek">
      <li class="list-geek-item"><strong><a href="https://github.com/thomas-yanxin/the-eye-knows-the-garbage">慧眼识垃圾</a></strong>：构建个人、垃圾桶与政府三端协同的垃圾分类识别系统，获得软件著作权，并在中国大学生计算机设计大赛、上海市计算机应用能力设计大赛、中国机器人及人工智能大赛上海赛区等赛事中获奖。</li>
      <li class="list-geek-item">更多开源项目与代码请见 <a href="https://github.com/thomas-yanxin" class="btn-geek"><i class="fab fa-github"></i> GitHub 个人主页 <span class="icon-circle">↗</span></a>。</li>
    </ul>
  </div>
</details>

<span class='anchor' id='publications-ip'></span>
<span class='anchor' id='-publications'></span>

# <i class="fas fa-file-contract"></i> Publications & IP

<ul class="list-geek">
  <li class="list-geek-item" style="margin-bottom: 12px;">
    <span class="badge-geek" style="color: #0d9488; border-color: #2dd4bf; background: rgba(45,212,191,0.05);">专著出版</span> 
    周涛、薛栋、<strong>颜鑫</strong>. 《LangChain 大模型应用开发：从入门到实践》[M]. 清华大学出版社.
  </li>
  <li class="list-geek-item" style="margin-bottom: 12px;">
    <span class="badge-geek" style="color: #2563eb; border-color: #93c5fd; background: rgba(37,99,235,0.05);">IEEE 论文</span> 
    <strong>X. Yan</strong>, Q. Hu, X. Huang and C. Shen, "<a href="https://ieeexplore.ieee.org/document/9851085">Intelligent Retail Settlement Platform based on Image Retrieval</a>," 2022 4th International Conference on Communications, Information System and Computer Engineering (CISCE), 2022, pp. 609-616, doi: 10.1109/CISCE55963.2022.9851085.
  </li>
  <li class="list-geek-item" style="margin-bottom: 12px;">
    <span class="badge-geek" style="color: #ca8a04; border-color: #fde047; background: rgba(202,138,4,0.05);">实用新型</span> 
    智能零售结算平台；发明人：<strong>颜鑫</strong>、沈晨、杜旭东；专利号：ZL 2022 2 0828888.8；授权公告号：CN 216979871 U。
    <a href="/proof/%E4%B8%93%E5%88%A9-2022208288888%E6%99%BA%E8%83%BD%E9%9B%B6%E5%94%AE%E7%BB%93%E7%AE%97%E5%B9%B3%E5%8F%B0.pdf" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fas fa-file-pdf"></i> 专利证书 <span class="icon-circle">↗</span></a>
  </li>
  <li class="list-geek-item" style="margin-bottom: 12px;">
    <span class="badge-geek" style="color: #7c3aed; border-color: #c084fc; background: rgba(124,58,237,0.05);">软件著作权</span> 
    袋鼯麻麻：智能零售结算系统 V1.0；著作权人：<strong>颜鑫</strong>、胡庆春、沈晨、杜旭东、黄小悦、申佳川；登记号：2022SRE010935。
    <a href="/proof/%E8%BD%AF%E4%BB%B6%E8%91%97%E4%BD%9C%E6%9D%83-%E8%A2%8B%E9%BC%AF%E9%BA%BB%E9%BA%BB.jpg" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fas fa-image"></i> 软著证书 <span class="icon-circle">↗</span></a>
  </li>
  <li class="list-geek-item" style="margin-bottom: 12px;">
    <span class="badge-geek" style="color: #7c3aed; border-color: #c084fc; background: rgba(124,58,237,0.05);">软件著作权</span> 
    慧眼识垃圾系统 V1.0；著作权人：<strong>颜鑫</strong>、沈晨、杜旭东；登记号：2021SR0986633。
    <a href="/proof/%E8%BD%AF%E4%BB%B6%E8%91%97%E4%BD%9C%E6%9D%83-%E6%85%A7%E7%9C%BC%E8%AF%86%E5%9E%83%E5%9C%BE.jpg" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fas fa-image"></i> 软著证书 <span class="icon-circle">↗</span></a>
  </li>
  <li class="list-geek-item" style="margin-bottom: 12px;">
    <span class="badge-geek" style="color: #7c3aed; border-color: #c084fc; background: rgba(124,58,237,0.05);">软件著作权</span> 
    基于领域知识库的智能问答系统 V1.0；著作权人：黄小悦、韩响尘、王鑫、<strong>颜鑫</strong>、林宏聪、任竞展、周天奕；登记号：2022SRE025369。
    <a href="/proof/%E8%BD%AF%E4%BB%B6%E8%91%97%E4%BD%9C%E6%9D%83-%E8%87%AA%E5%8A%A8%E9%97%AE%E7%AD%94.pdf" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fas fa-file-pdf"></i> 软著证书 <span class="icon-circle">↗</span></a>
  </li>
</ul>

<span class='anchor' id='awards-honors'></span>
<span class='anchor' id='-awards'></span>
<span class='anchor' id='-honors'></span>

# <i class="fas fa-award"></i> Awards & Honors

## Featured Awards

<ul class="list-geek">
  <li class="list-geek-item" style="margin-bottom: 10px;">
    <strong>2025 合成数据大赛 &middot; 灵溪 AI for Mental Health 主题赛</strong> 
    <span class="badge-geek" style="color: #b45309; border-color: #f59e0b; background: rgba(245,158,11,0.05);">一等奖</span>
    <a href="https://mp.weixin.qq.com/s/qNfiSLt1TfaqjBpXB9rHKQ" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fas fa-certificate"></i> 获奖证明 <span class="icon-circle">↗</span></a>
  </li>
  <li class="list-geek-item" style="margin-bottom: 10px;">
    <strong>2024 中国国际大学生创新大赛「人因智能关键技术」</strong> 
    <span class="badge-geek" style="color: #4b5563; border-color: #9ca3af; background: rgba(156,163,175,0.05);">铜奖</span>
  </li>
  <li class="list-geek-item" style="margin-bottom: 10px;">
    <strong>2024 安徽省大学生创新创业大赛「AI 赋能下的军民融合应用创新」</strong> 
    <span class="badge-geek" style="color: #b45309; border-color: #f59e0b; background: rgba(245,158,11,0.05);">金奖</span>
  </li>
  <li class="list-geek-item" style="margin-bottom: 10px;">
    <strong>2023 第 9 届中国国际“互联网+”大学生创新创业大赛「灵心智能」</strong> 
    <span class="badge-geek" style="color: #4b5563; border-color: #9ca3af; background: rgba(156,163,175,0.05);">铜奖</span>
  </li>
  <li class="list-geek-item" style="margin-bottom: 10px;">
    <strong>2023 第 9 届安徽省“互联网+”大学生创新创业大赛「灵心智能」</strong> 
    <span class="badge-geek" style="color: #b45309; border-color: #f59e0b; background: rgba(245,158,11,0.05);">金奖</span>
  </li>
  <li class="list-geek-item" style="margin-bottom: 10px;">
    <strong>2022 第 8 届中国国际“互联网+”大学生创新创业大赛「晓声科技」</strong> 
    <span class="badge-geek" style="color: #4b5563; border-color: #d1d5db; background: rgba(209,213,219,0.05);">银奖</span>
    <a href="https://mp.weixin.qq.com/s/EujzF8ubT_1PkoMs3u-qTw" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fas fa-certificate"></i> 获奖证明 <span class="icon-circle">↗</span></a>
  </li>
  <li class="list-geek-item" style="margin-bottom: 10px;">
    <strong>2022 第 24 届中国机器人及人工智能大赛全国</strong> 
    <span class="badge-geek" style="color: #b45309; border-color: #f59e0b; background: rgba(245,158,11,0.05);">一等奖</span>
    <a href="https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/2022%E5%B9%B4%E7%AC%AC24%E5%B1%8A%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8F%8A%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%A4%A7%E8%B5%9B%E5%85%A8%E5%9B%BD%E4%B0%80%E7%AD%89%E5%A5%96.pdf" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fas fa-file-pdf"></i> 证书PDF <span class="icon-circle">↗</span></a>
  </li>
</ul>

## Selected Honors

<ul class="list-geek">
  <li class="list-geek-item" style="margin-bottom: 8px;">
    <strong>百度飞桨开发者技术专家 (PPDE)</strong>
    <a href="https://www.paddlepaddle.org.cn/ppdemd?n=/ppdemd/%E9%A2%9C%E9%91%AB" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fas fa-user-check"></i> 专家主页 <span class="icon-circle">↗</span></a>
  </li>
  <li class="list-geek-item" style="margin-bottom: 8px;">
    <strong>开放原子开源基金会 &middot; 活力开源贡献者（技术、生态贡献）</strong>
  </li>
  <li class="list-geek-item" style="margin-bottom: 8px;">
    <strong>百度飞桨 AIStudio 2022 年度影响力人物 TOP10</strong>
    <a href="https://mp.weixin.qq.com/s/jKTEAP1euh4yBoatod9E0Q" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fas fa-award"></i> 获奖公告 <span class="icon-circle">↗</span></a>
  </li>
  <li class="list-geek-item" style="margin-bottom: 8px;">
    <strong>OpenI 启智社区首批核心体验官</strong>
    <a href="https://openi.org.cn/index.php?m=content&c=index&a=show&catid=221&id=53" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fas fa-user-shield"></i> 聘书证明 <span class="icon-circle">↗</span></a>
  </li>
  <li class="list-geek-item" style="margin-bottom: 8px;">
    <strong>Datawhale 成员</strong>
    <a href="https://mp.weixin.qq.com/s/_I-aNX1lAPV2_eYoS0w_Bg" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fas fa-users"></i> 成员公告 <span class="icon-circle">↗</span></a>
  </li>
</ul>

<!-- Collapsible Awards -->
<details class="details-geek">
  <summary>更多竞赛与荣誉</summary>
  <div class="details-geek-content">
    <ul class="list-geek">
      <li class="list-geek-item">2022 “建行杯”第 8 届安徽省“互联网+”大学生创新创业大赛「晓声科技」<strong>金奖</strong> <a href="https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/%E3%80%90%E6%99%93%E5%A3%B0%E7%A7%91%E6%8A%80%E3%80%91%E5%AE%89%E5%BE%BD%E7%9C%81%E9%87%91%E5%A5%96.pdf" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-file-pdf"></i> 证书 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 “建行杯”第 8 届江苏省“互联网+”大学生创新创业大赛「镜选未来」<strong>银奖</strong> <a href="https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/%E7%AC%AC%E5%85%AB%E5%B1%8A%E6%B1%9F%E8%8B%8F%E7%9C%81%E2%80%9C%E4%BA%92%E8%81%94%E7%BD%91%2B%E2%80%9D%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%88%9B%E6%96%B0%E5%88%9B%E4%B8%9A%E5%A4%A7%E8%B5%9B_%E8%B7%AF%E6%BC%94%E9%A1%B9%E7%9B%AE%E8%AF%84%E5%AE%A1%E7%BB%93%E6%9E%9C%E5%8F%91%E5%B8%83%E7%89%88%E6%9C%AC%20.pdf" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-file-pdf"></i> 证书 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 “建行杯”第 8 届上海市“互联网+”大学生创新创业大赛「Medbio」<strong>银奖</strong> <a href="https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/Medbio-%E6%B4%BB%E6%80%A7%E5%B0%8F%E5%80%86%E5%AD%90%E5%8C%96%E5%90%88%E7%89%A9%E7%A7%91%E7%A0%94%E6%9C%8D%E5%8A%A1%E5%B9%B3%E5%8F%B0.pdf" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-file-pdf"></i> 证书 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 第 7 届“创客中国”百度赛道创客组「镜选未来」<strong>优胜奖（Top10）</strong> <a href="https://mp.weixin.qq.com/s/kAp6jfZpvG2eolcWSANHSQ" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 报道 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 第 13 届“挑战杯”大学生创业计划竞赛上海市「袋鼯麻麻」<strong>铜奖</strong> <a href="https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/2022%E5%B9%B4%E6%8C%91%E6%88%98%E6%9D%AF%E5%B8%82%E7%BA%A7%E5%A4%8D%E8%B5%9B%E7%BB%93%E6%9E%9C-%E5%8D%8E%E4%B8%9C%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6.pdf" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-file-pdf"></i> 证书 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 第 10 届华东理工大学“奋进杯”大学生创业计划竞赛「袋鼯麻麻」<strong>金奖</strong> <a href="https://mp.weixin.qq.com/s/WgE9zxD4Nv4H-f_2sXr5pw" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 报道 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 第 8 届南京财经大学“互联网+”大学生创业计划大赛「数聚凤巢」<strong>一等奖</strong></li>
      <li class="list-geek-item">2022 第 8 届华东理工大学“互联网+”大学生创业计划大赛「袋鼯麻麻」<strong>一等奖</strong></li>
      <li class="list-geek-item">2022 第 1 届合肥工业大学“智能杯”创新创业大赛「晓声科技」<strong>二等奖</strong> <a href="/proof/首届合肥工业大学”智能杯“创新创业大赛大创组二等奖.jpg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-image"></i> 证书 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 第 15 届中国大学生计算机设计大赛（程序设计组）全国<strong>三等奖</strong> <a href="https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/2022%E5%B9%B4%EF%BC%88%E7%AC%AC15%E5%B1%8A%EF%BC%89%E4%B8%AD%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%AE%BE%E8%AE%A1%E5%A4%A7%E8%B5%9B%E4%B8%89%E7%AD%89%E5%A5%96.pdf" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-file-pdf"></i> 证书 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 第 15 届中国大学生计算机设计大赛（物联网组）全国<strong>三等奖</strong> <a href="https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/2022%E5%B9%B4%E7%AC%AC15%E5%B1%8A%E4%B8%AD%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%AE%BE%E8%AE%A1%E5%A4%A7%E8%B5%9B%EF%BC%88%E7%89%A9%E8%81%94%E7%BD%91%E7%BB%84%EF%BC%89%E5%85%A8%E5%9B%BD%E4%B8%89%E7%AD%89%E5%A5%96.jpg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-image"></i> 证书 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 第 24 届中国机器人及人工智能大赛（上海赛区）人工智能创新赛<strong>一等奖</strong> <a href="https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/%E7%9B%96%E7%AB%A0%E5%85%AC%E7%A4%BA-%E4%B8%8A%E6%B5%B7%E8%B5%9B%E5%8C%BA%E6%8B%9F%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%E5%85%AC%E7%A4%BA%E7%9A%84%E9%80%9A%E7%9F%A5.pdf" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-file-pdf"></i> 公示 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 第 5 届中国高校计算机大赛（人工智能创意赛）区域赛（华东赛区）<strong>二等奖</strong></li>
      <li class="list-geek-item">2022 第 14 届上海市计算机应用能力设计大赛（程序设计组）<strong>二等奖</strong></li>
      <li class="list-geek-item">2022 第 14 届上海市计算机应用能力设计大赛（物联网组）<strong>二等奖</strong></li>
      <li class="list-geek-item">2022 OpenI 启智社区<strong>社区先锋奖</strong>、<strong>优秀孵化项目奖</strong> <a href="https://mp.weixin.qq.com/s/rEXoEY1UbEgwolYE-OJPjw" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 报道 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 OpenI 启智社区“优秀开源项目征集”<strong>第一名</strong> <a href="/proof/%E8%A2%8B%E9%BC%AF%E9%BA%BB%E9%BA%BB.png" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-image"></i> 证书 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 OpenI 启智社区“优秀开源项目征集”<strong>第二名</strong> <a href="/proof/%E6%AC%A7%E5%B0%8F%E9%B9%8F.png" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-image"></i> 证书 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 讯飞开放生态 AI 先锋应用评比<strong>年度最佳应用 TOP10</strong> <a href="https://mp.weixin.qq.com/s/P6VaXjlXWLT0JGvBFRDIvQ" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 报道 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 第 2 届“点宽杯”全国高校金融科技黑客松大赛<strong>优胜队伍</strong> <a href="https://mp.weixin.qq.com/s/0nwc8CRLXZZaJnAg6JJjVA" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 报道 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2021 第 23 届中国机器人及人工智能大赛（上海赛区）人工智能创新赛<strong>二等奖</strong></li>
      <li class="list-geek-item">2021 PPSIG <strong>优秀开源项目奖</strong> <a href="/proof/PPSIG%E5%A5%96%E6%9D%AF.jpg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-image"></i> 证书 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2021 飞桨黑客马拉松<strong>优秀开源项目奖</strong> <a href="/proof/%E9%A3%9E%E6%A1%A8%E9%BB%91%E5%AE%A2%E6%9D%BE.jpg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-image"></i> 证书 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2021 WAVE SUMMIT 2021+ <strong>优秀开源项目</strong> <a href="/proof/WS%E4%BC%98%E7%A7%80%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE.jpg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-image"></i> 证书 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 国家级大学生创新创业项目<strong>第一主持人</strong>，<strong>优秀结题</strong> <a href="http://gjcxcy.bjtu.edu.cn/NewLXItemListForStudentDetail.aspx?ItemNo=941768&year=2022&type=student&IsLXItem=0" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 项目详情 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">英特尔创新大使、华为云云享专家、中国人工智能学会会员、中国自动化学会预备会员、中国宇航学会会员。</li>
      <li class="list-geek-item">2022 Jina 社区活跃贡献者、阿里云开发者社区乘风者计划专家博主、OpenI 启智社区积极贡献者、OpenI 启智社区活跃开发者。</li>
      <li class="list-geek-item">百度飞桨 WAVE SUMMIT 2021 / 2021+ 优秀开源开发者。</li>
    </ul>
  </div>
</details>

<span class='anchor' id='talks-media'></span>
<span class='anchor' id='-invited-talks'></span>
<span class='anchor' id='-dispersions'></span>

# <i class="fas fa-microphone-alt"></i> Talks & Media

## Invited Talks

<ul class="news-list">
  <li class="news-item">
    <span class="news-date">2025.09</span>
    <span class="news-content">
      <strong>2025 年云栖大会「做 AI，Z 世代不一样！」分论坛</strong> &middot; Speaker
    </span>
  </li>
  <li class="news-item">
    <span class="news-date">2025.05</span>
    <span class="news-content">
      <strong>阿里云魔搭 ModelScope 开发者共创会</strong> &middot; 《开源技术驱动下的泛心理服务与 AI 普惠实践之路》
    </span>
  </li>
  <li class="news-item">
    <span class="news-date">2023.06</span>
    <span class="news-content">
      <strong>飞桨 PaddlePaddle 大模型应用开发课</strong> &middot; 《全流程构建智能文档查询助手》
      <a href="https://www.bilibili.com/video/BV18h4y1d77H/?share_source=copy_web&vd_source=8162f92b2a1a94035ca9e4e0f6e1860a" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fab fa-bilibili" style="color:#f25d8e;"></i> 观看视频 <span class="icon-circle">↗</span></a>
    </span>
  </li>
  <li class="news-item">
    <span class="news-date">2023.05</span>
    <span class="news-content">
      <strong>Datawhale AIGC 主题学习</strong> &middot; 《基于 LangChain 和 ChatGLM-6B 构建本地知识库自动问答应用》
      <a href="https://www.bilibili.com/video/BV11N411y7dT/?share_source=copy_web&vd_source=8162f92b2a1a94035ca9e4e0f6e1860a" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fab fa-bilibili" style="color:#f25d8e;"></i> 观看视频 <span class="icon-circle">↗</span></a>
    </span>
  </li>
  <li class="news-item">
    <span class="news-date">2022.04</span>
    <span class="news-content">
      <strong>飞桨产业实践范例库</strong> &middot; 商品识别产业应用实战
      <a href="https://www.bilibili.com/video/BV1Fu411y7co?spm_id_from=333.999.0.0" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fab fa-bilibili" style="color:#f25d8e;"></i> 观看视频 <span class="icon-circle">↗</span></a>
    </span>
  </li>
</ul>

## Media Coverage

<ul class="list-geek">
  <li class="list-geek-item" style="margin-bottom: 12px;">
    <span class="badge-geek" style="color: #ea580c; border-color: #fdba74; background: rgba(234,88,12,0.05);">阿里通义千问</span>
    <strong>写代码，也写情绪</strong>
    <a href="https://mp.weixin.qq.com/s/a16sWs_QPtvoeY4J5eexTg" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fas fa-newspaper"></i> 专访文章 <span class="icon-circle">↗</span></a>
    <a href="https://www.bilibili.com/video/BV1GVgNzLEHs/?share_source=copy_web" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 4px;"><i class="fab fa-bilibili" style="color:#f25d8e;"></i> 专访视频 <span class="icon-circle">↗</span></a>
    <a href="https://www.xiaoyuzhoufm.com/episodes/6878c7f5a9dec92500c5c93e" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 4px;"><i class="fas fa-podcast" style="color:#ea580c;"></i> 播客音频 <span class="icon-circle">↗</span></a>
  </li>
  <li class="list-geek-item" style="margin-bottom: 12px;">
    <span class="badge-geek" style="color: #0284c7; border-color: #7dd3fc; background: rgba(2,132,199,0.05);">Founder Park</span>
    <strong>Qwen 3 发布，Founder Park 采访心言集团高级算法工程师左右</strong>
    <a href="https://mp.weixin.qq.com/s/pb8eoQhvAF9O5N3CSO7rIg" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fas fa-newspaper"></i> 专访文章 <span class="icon-circle">↗</span></a>
  </li>
  <li class="list-geek-item" style="margin-bottom: 12px;">
    <span class="badge-geek" style="color: #ea580c; border-color: #fdba74; background: rgba(234,88,12,0.05);">阿里通义千问</span>
    <strong>通义千问 + 心理领域 = ?</strong>
    <a href="https://mp.weixin.qq.com/s/ZcRES0s7zD_yDeWTTr6Gyg" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fas fa-link"></i> 阅读文章 <span class="icon-circle">↗</span></a>
  </li>
  <li class="list-geek-item" style="margin-bottom: 12px;">
    <span class="badge-geek" style="color: #0d9488; border-color: #2dd4bf; background: rgba(13,148,136,0.05);">科学网</span>
    <strong>人皆孤独？他们用通义千问开发了一款心理大模型</strong>
    <a href="https://news.sciencenet.cn/htmlnews/2023/12/513458.shtm?bsh_bid=5975565683" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fas fa-link"></i> 阅读文章 <span class="icon-circle">↗</span></a>
  </li>
  <li class="list-geek-item" style="margin-bottom: 12px;">
    <span class="badge-geek" style="color: #e11d48; border-color: #fda4af; background: rgba(225,29,72,0.05);">机器之心 SOTA 模型</span>
    <strong>MindChat 心理大模型等项目多个新模型版本开源</strong>
    <a href="https://mp.weixin.qq.com/s/PppVdSHObBG7IRA-vgVLlA" class="btn-geek" style="padding: 2px 10px; font-size: 0.8em; margin-left: 8px;"><i class="fas fa-link"></i> 阅读文章 <span class="icon-circle">↗</span></a>
  </li>
</ul>

<!-- Collapsible Media -->
<details class="details-geek">
  <summary>更多报道与公开内容</summary>
  <div class="details-geek-content">
    <ul class="list-geek">
      <li class="list-geek-item">【机器之心 SOTA 模型】不妨一试的开源项目：基座模型、领域精调、推理加速及 Agent 开发开源方案季度盘点 - <a href="https://mp.weixin.qq.com/s/ApOMU6qRfYopCW0NkUCQCQ" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 链接 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">【OpenMMLab】EMO 了？来和 MindChat 聊聊，可在线体验的 AI 心理大模型 - <a href="https://mp.weixin.qq.com/s/wOQP2A0nm0OGaiwzdJ9wPg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 链接 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">【魔搭 ModelScope 社区】基于 Qwen-7B 的垂域大模型 MindChat 心理大模型上线魔搭 - <a href="https://mp.weixin.qq.com/s/frJwp-kLuF_aT_vt8V6hJQ" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 链接 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">【GitHubStore】MindChat 心理大模型 - <a href="https://mp.weixin.qq.com/s/OIHSBq6c-4QAxvDUqmgpFA" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 链接 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">【OpenI 启智】2022 年度启智社区优秀项目及开发者评选结果正式揭晓 - <a href="https://mp.weixin.qq.com/s/PpbwEdP0-8wG9dsvRvRDaA" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 链接 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">【OpenI 启智】高校开源专场顺利举办 - <a href="https://mp.weixin.qq.com/s/phDFWZ8YOYEJMoYNrsOrag" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 链接 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">【飞桨 PaddlePaddle】飞桨助力合肥工业大学普适心理计算团队斩获“互联网+”大赛全国银奖 - <a href="https://mp.weixin.qq.com/s/SgK9qSmYQ9ihIfvb1sHEwA" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 链接 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">【组队学习】我们做了一个智能零售结算平台 - <a href="https://mp.weixin.qq.com/s/Ons9jLOekpbTPfcjW87Q3Q" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 链接 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">【OpenI 启智】连续 4 周上榜的这位开发者 - <a href="https://mp.weixin.qq.com/s/vgsMagmEVbcsXBVqil9_5A" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 链接 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">【Datawhale】我们做了一个智能零售结算平台 - <a href="https://mp.weixin.qq.com/s/V8eBkYZvb-mNJtyez7n_Rg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 链接 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">【OpenI 启智】OpenI 开源项目推荐 ColugoMum - <a href="https://mp.weixin.qq.com/s/mgNcoWAICBAqqBN8Iw" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 链接 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">【飞桨 PaddlePaddle】欢迎 17 名 AI 开发者加入飞桨开发者技术专家计划 - <a href="https://mp.weixin.qq.com/s/PAeREjahNTSJmwn1QtI3Zg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 链接 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">【太原理工大学互联网 PLUS 提升平台】百度飞桨校园 Fest 圆满结束 - <a href="https://mp.weixin.qq.com/s/-VoCDzr1MjeGm4UQuRxORw" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 链接 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">【安徽工程大学计算机学院团委】首届 AI 科创节圆满结束 - <a href="https://mp.weixin.qq.com/s/oCVRHA5Hg41PqTQ-yJQgkg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 链接 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">【飞桨 PaddlePaddle】基于飞桨开发垃圾分类小程序，实现“慧眼识垃圾” - <a href="https://mp.weixin.qq.com/s/6xt4ReF-n4qyJ859yvCbcg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 链接 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">【机器学习 AI 算法工程】垃圾分类：慧眼识垃圾系统 - <a href="https://mp.weixin.qq.com/s/rsJSLKaNxtJ06HnwbWbL-w" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 链接 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2021.07：飞桨领航团 AI 达人创造营 - <a href="https://www.bilibili.com/video/BV1qq4y1X7uZ?spm_id_from=333.999.0.0&vd_source=02aea3a5719f15c2ff7a32ade6916170" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fab fa-bilibili"></i> 视频 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2021.05：飞桨开发者说，商品识别产业应用实战 - <a href="https://www.bilibili.com/video/BV13p4y1t76K?spm_id_from=333.999.0.0" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fab fa-bilibili"></i> 视频 <span class="icon-circle">↗</span></a></li>
    </ul>
  </div>
</details>

<span class='anchor' id='community-activities'></span>
<span class='anchor' id='-activities'></span>
<span class='anchor' id='-social-practices'></span>

# <i class="fas fa-users-cog"></i> Community & Activities

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-badge"></div>
    <div class="timeline-header">
      <span class="timeline-title"><a href="https://www.paddlepaddle.org.cn/ppdenavigategroup" style="color:inherit; text-decoration:none;">飞桨领航团</a> &middot; 华东区主管</span>
      <span class="timeline-time">2021.09 - 2022.07</span>
    </div>
    <div class="timeline-content">
      <ul>
        <li>统筹飞桨领航团<strong>华东七省</strong>运营，主导高校拓展、团长选拔、活动策划与项目落地，任期内新增覆盖高校 <strong>50+</strong> 所，涵盖浙江大学、东南大学、上海科技大学、南京航空航天大学、苏州大学、华东理工大学、合肥工业大学等 <strong>985 / 211 / 双一流</strong>院校。</li>
      </ul>
    </div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-badge"></div>
    <div class="timeline-header">
      <span class="timeline-title"><a href="https://www.paddlepaddle.org.cn/ppdenavigategroup" style="color:inherit; text-decoration:none;">华东理工大学飞桨领航团</a> &middot; 团长</span>
      <span class="timeline-time">2021.04 - 2022.01</span>
    </div>
    <div class="timeline-content">
      <ul>
        <li>从零搭建校级飞桨领航团，围绕飞桨推广与 AI 实战组织主题讲座、知识竞赛、实操挑战赛与项目体验，累计举办 <strong>5+</strong> 场活动、覆盖 <strong>100+</strong> 人次、孵化 <strong>10+</strong> 个精品项目。</li>
        <li>推动“教育部产学合作协同育人项目（百度公司 & 华东理工大学）”课程建设落地，把社区活动沉淀为面向校内 AI 人才培养的课程与实践资源。</li>
      </ul>
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-badge"></div>
    <div class="timeline-header">
      <span class="timeline-title">华东理工大学信息学院社团管理部 &middot; 顾问</span>
      <span class="timeline-time">2019.10 - 2020.06</span>
    </div>
    <div class="timeline-content">
      <ul>
        <li>协调学院 <strong>10+</strong> 学生社团运作，搭建社团与院团委常态化沟通机制，组织“社团招新”“新人培训”“班歌班标大赛”等院级活动。</li>
        <li>主持五大学院联合“社团交流会”全流程组织，负责邀请函制作、主持串场、现场协调与复盘总结。</li>
      </ul>
    </div>
  </div>
</div>

<!-- Collapsible Community -->
<details class="details-geek">
  <summary>更多社区与社会实践</summary>
  <div class="details-geek-content">
    <ul class="list-geek">
      <li class="list-geek-item">Qwen Ambassador。</li>
      <li class="list-geek-item">2022 OpenI 启智社区首批资深体验官 <a href="https://openi.org.cn/index.php?m=content&c=index&a=show&catid=221&id=53" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 证明 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 OpenI 启智社区 & 合肥工业大学情感计算与先进智能机器安徽省重点实验室产学研共建学生负责人 <a href="/proof/OpenI&MAC_LAB.jpg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-image"></i> 证明 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 百度飞桨智慧零售商品识别产业案例共建者 <a href="https://www.bilibili.com/video/BV1Fu411y7co/" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fab fa-bilibili"></i> 视频 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 华东理工大学通海茶叙第 130 期讲座嘉宾 <a href="https://mp.weixin.qq.com/s/yyOjg0qnRo8TggylMhyqgA" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 证明 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 Datawhale 组队学习第 34 期航海士 <a href="https://mp.weixin.qq.com/s/8NAmTy5n7TXxVH85WAR-gA" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 证明 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2022 百度飞桨领航团 AI 达人创造营第二期讲师 <a href="https://mp.weixin.qq.com/s/JfHYZZE701Qt7vJJa1K11w" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 证明 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2021 百度飞桨领航团 AI 达人创造营第一期讲师 <a href="https://mp.weixin.qq.com/s/MD-ni4z5EITpdrAZd2FGyg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 证明 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2021 百度上海飞桨领航团 & 五角场创新创业学院 meetup 活动 <a href="https://mp.weixin.qq.com/s/NMJVAttPUHiZEaIIz1zQoA" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-link"></i> 证明 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2020 及 2021 华东理工大学新生迎新活动志愿者 <a href="/proof/迎新志愿者.jpg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-image"></i> 证明 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2021 上海市无偿献血活动参与者。</li>
      <li class="list-geek-item">2020 华东理工大学 95 公益周“爱加餐项目”志愿者。</li>
      <li class="list-geek-item">2019 华东理工大学寒假招生宣传、自主宣讲活动优秀团队奖 <a href="/proof/招生宣传.jpg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-image"></i> 证明 <span class="icon-circle">↗</span></a></li>
      <li class="list-geek-item">2019 华东理工大学青年马克思主义者培养工程结业 <a href="/proof/青马班.jpg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-image"></i> 证明 <span class="icon-circle">↗</span></a></li>
    </ul>
  </div>
</details>

<span class='anchor' id='-educations'></span>

# <i class="fas fa-graduation-cap"></i> Education

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-badge"></div>
    <div class="timeline-header">
      <span class="timeline-title">华东理工大学 &middot; 信息科学与工程学院 &middot; 自动化专业</span>
      <span class="timeline-time">2019.09 - 2023.06</span>
    </div>
    <div class="timeline-content">
      <ul>
        <li>华东理工大学校综合课程奖学金三等。</li>
        <li>华东理工大学信息科学与工程学院优秀团员 <a href="https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/%E4%BC%98%E7%A7%80%E5%9B%A2%E5%91%98.jpg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-image"></i> 证明 <span class="icon-circle">↗</span></a></li>
        <li>华东理工大学青春战“疫”优秀志愿者 <a href="https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/%E6%8A%97%E7%96%AB%E4%BC%98%E7%A7%80%E5%BF%97%E6%84%BF%E8%80%85.jpg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-image"></i> 证明 <span class="icon-circle">↗</span></a></li>
        <li>华东理工大学信息科学与工程学院第六期创新实践育人计划优秀学员 <a href="https://github.com/thomas-yanxin/thomas-yanxin.github.io/blob/master/proof/%E5%88%9B%E6%96%B0%E8%82%B2%E4%BA%BA.jpg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-image"></i> 证明 <span class="icon-circle">↗</span></a></li>
        <li>华东理工大学信息科学与工程学院社会工作奖 C 等 <a href="/proof/%E7%A4%BE%E4%BC%9A%E5%B7%A5%E4%BD%9C%E5%A5%96.jpg" class="btn-geek" style="padding: 2px 8px; font-size: 0.75em;"><i class="fas fa-image"></i> 证明 <span class="icon-circle">↗</span></a></li>
      </ul>
    </div>
  </div>
</div>