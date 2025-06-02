---
permalink: /
title: "Homepage"
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a master student in Software Engineering at Beihang University, advised by [Prof. Qian Yu](https://yuqian1023.github.io/).

[![github](https://img.shields.io/badge/dynamic/json?logo=github&label=GitHub%20Stars&style=for-the-badge&query=%24.stars&url=https://api.github-star-counter.workers.dev/user/hjc-owo)](https://github.com/hjc-owo/)
[![blog](https://img.shields.io/badge/huggingface-space-ffcc00?logo=huggingface&style=for-the-badge)](https://huggingface.co/hjc-owo)

# 🔥 News

- _2025.03_: &nbsp;🎉🎉 Our paper [VectorPainter](https://hjc-owo.github.io/VectorPainterProject/) has been accepted by **ICME 2025!**
- _2025.02_: &nbsp;🎉🎉 Our paper [LLM4SVG](https://ximinng.github.io/LLM4SVGProject/) has been accepted by **CVPR 2025!**
- _2023.12_: &nbsp;🎉🎉 We released [PyTorch-SVGRender](https://ximinng.github.io/PyTorch-SVGRender-project/), a state-of-the-art library for differentiable SVG rendering in PyTorch.

# 📝 Publications

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">CVPR 2025</div><img src='images/covers/llm4svg.png' loading="lazy" alt="LLM4SVG"></div></div>
<div class='paper-box-text' markdown="1">

<!-- paper 3 -->

[Empowering LLMs to Understand and Generate Complex Vector Graphics](https://arxiv.org/abs/2412.11102)

Ximing Xing, **Juncheng Hu**, Guotao Liang, Jing Zhang, Dong Xu, Qian Yu

[![project](https://img.shields.io/badge/%F0%9F%8F%A0%20Homepage-LLM4SVG-orange.svg)](https://ximinng.github.io/LLM4SVGProject/)
[![](https://img.shields.io/github/stars/ximinng/LLM4SVG?style=social&label=Code+Stars)](https://github.com/ximinng/LLM4SVG)

<b><u>TL;DR:</u></b> LLM4SVG introduces learnable **SVG Semantic Tokens** and a large **SVGX-SFT dataset**, enabling LLMs to understand and generate complex vector graphics.

IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2025

🌐 [**Project**](https://ximinng.github.io/LLM4SVGProject/) |
📁 [**Code**](https://github.com/ximinng/LLM4SVG)

</div>
</div>

<!-- paper 2 -->
<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">arXiv 2024</div><img src='images/covers/svgfusion.png' loading="lazy" alt="SVGFusion"></div></div>
<div class='paper-box-text' markdown="1">

[SVGFusion: Scalable Text-to-SVG Generation via Vector Space Diffusion](https://arxiv.org/abs/2412.10437)

Ximing Xing, **Juncheng Hu**, Jing Zhang, Dong Xu, Qian Yu

[![project](https://img.shields.io/badge/%F0%9F%8F%A0%20Homepage-SVGFusion-orange.svg)](https://ximinng.github.io/SVGFusionProject/)
[![](https://img.shields.io/github/stars/ximinng/SVGFusion?style=social&label=Code+Stars)](https://github.com/ximinng/SVGFusion)

<b><u>TL;DR:</u></b> SVGFusion improves text-to-SVG generation by using a **VP-VAE to learn a vector representation of SVG elements**, and a **VS-DiT** to generate SVGs from text prompts by performing diffusion within that **learned vector space**.

🌐 [**Project**](https://ximinng.github.io/SVGFusionProject/) |
📁 [**Code**](https://github.com/ximinng/SVGFusion)

</div>
</div>

<!-- paper 1 -->
<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">ICME 2025</div><img src='images/covers/vectorpainter.png' loading="lazy" alt="VectorPainter"></div></div>
<div class='paper-box-text' markdown="1">

[VectorPainter: Advanced Stylized Vector Graphics Synthesis Using Stroke-Style Priors](https://arxiv.org/abs/2405.02962)

**Juncheng Hu**, Ximing Xing, Jing Zhang, Qian Yu

[![project](https://img.shields.io/badge/%F0%9F%8F%A0%20Homepage-VectorPainter-orange.svg)](https://hjc-owo.github.io/VectorPainterProject/)
[![](https://img.shields.io/github/stars/hjc-owo/VectorPainter?style=social&label=Code+Stars)](https://github.com/hjc-owo/VectorPainter)

<b><u>TL;DR:</u></b> VectorPainter synthesizes text-guided vector graphics by **imitating strokes**.

2025 IEEE International Conference on Multimedia and Expo (ICME). IEEE, 2025.

🌐 [**Project**](https://hjc-owo.github.io/VectorPainterProject/) |
📁 [**Code**](https://github.com/hjc-owo/VectorPainter)

</div>
</div>

# 📒 Projects

<!-- project 1 -->
<div class='paper-box'>
<div class='paper-box-image'><div><div class="project-badge">open source</div><img src='images/covers/PyTorch-SVGRender.png' alt="PyTorch-SVGRender" width="100%" loading="lazy"></div></div>
<div class='paper-box-text' markdown="1">

[Pytorch-SVGRender: A Differentiable Rendering Library for SVG Creation](https://ximinng.github.io/PyTorch-SVGRender-project/)

👥 Main Contributors: Ximing Xing, **Juncheng Hu**

<b><u>TL;DR:</u></b> SVG Differentiable Rendering: Generating vector graphics using neural networks. Support: text-to-SVG, Image-to-SVG, SVG Editing.

<a href="https://ximinng.github.io/PyTorch-SVGRender-project/"><img src="https://img.shields.io/badge/Website-Gitpage-yellow" alt="website"></a>
<a href="https://pytorch-svgrender.readthedocs.io/en/latest/index.html"><img src="https://img.shields.io/badge/DOCS-Readthedocs-purple?logo=readthedocs" alt="docs"></a>
<a href="https://huggingface.co/SVGRender"><img src="https://img.shields.io/badge/SPACE-HuggingFace-ffcc00?logo=huggingface" alt="space"></a>
[![](https://img.shields.io/github/stars/ximinng/PyTorch-SVGRender?style=social&label=Code+Stars)](https://github.com/ximinng/PyTorch-SVGRender)

🌐 [**Project**](https://ximinng.github.io/PyTorch-SVGRender-project/) |
📁 [**Code**](https://github.com/ximinng/PyTorch-SVGRender) |
🤗 [**HuggingFace**](https://huggingface.co/SVGRender) |
📄 [**Docs**](https://pytorch-svgrender.readthedocs.io/en/latest/index.html)

</div>
</div>

<!-- # 🎖 Honors and Awards -->

<!-- - _2021.10_ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. -->
<!-- - _2021.09_ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. -->

# 📖 Educations

- _2024.09 – Present_: **M.S. in Software Engineering**, School of Software, Beihang University

- _2019.09 – 2024.06_: **B.S. in Software Engineering**, School of Software, Beihang University
  - **GPA**: 3.95730 / 4.00
  - **Rank**: 4 / 187

<!-- # 💬 Invited Talks -->

<!-- - _2021.06_, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. -->
<!-- - _2021.03_, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. \| [\[video\]](https://github.com/) -->

# 💻 Internships

- _2024.01 - 2024.06_, [AISphere](https://aishiai.com/), China.

  Controllable video generation, Text/Image-to-video generation, video reconstruction using VAE.
