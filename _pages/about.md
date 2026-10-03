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

I am a Ph.D. student in Software Engineering at the School of Software, Beihang University, advised by [Prof. Qian Yu](https://yuqian1023.github.io/).

My research lies at the intersection of **vector graphics**, **generative models**, and **multimodal large language models**. I am particularly interested in **differentiable SVG rendering**, **text/image-to-SVG generation**, and **vector animation**, with the goal of building systems that understand, create, and edit structured visual content the way designers do.

[![github](https://img.shields.io/badge/dynamic/json?logo=github&label=GitHub%20Stars&style=for-the-badge&query=%24.stars&url=https://api.github-star-counter.workers.dev/user/hjc-owo)](https://github.com/hjc-owo/)
[![blog](https://img.shields.io/badge/huggingface-space-ffcc00?logo=huggingface&style=for-the-badge)](https://huggingface.co/hjc-owo)

# 🔥 News

- _2026.06_: &nbsp;🎉🎉 Our paper [Render-in-the-Loop](https://yukinonooo.github.io/RenderInTheLoopProject/) has been accepted by **ECCV 2026**!
- _2026.05_: &nbsp;🎉🎉 Our paper [VAnim](https://yukinonooo.github.io/VAnimProject/) has been accepted by **ICML 2026**!
- _2025.07_: &nbsp;🎉🎉 Our paper [GroupSketch](https://hjc-owo.github.io/GroupSketchProject/) has been accepted by **ACM MM 2025**!
- _2025.03_: &nbsp;🎉🎉 Our paper [VectorPainter](https://hjc-owo.github.io/VectorPainterProject/) has been accepted by **ICME 2025**!
- _2025.02_: &nbsp;🎉🎉 Our paper [LLM4SVG](https://ximinng.github.io/LLM4SVGProject/) has been accepted by **CVPR 2025**!
- _2023.12_: &nbsp;🎉🎉 We released [PyTorch-SVGRender](https://ximinng.github.io/PyTorch-SVGRender-project/), a state-of-the-art library for differentiable SVG rendering in PyTorch.

# 📝 Publications

<!-- paper 6 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">ECCV 2026</div><img src='images/covers/render-in-the-loop.svg' loading="lazy" alt="Render-in-the-Loop visual self-feedback for SVG generation"></div></div>
<div class='paper-box-text' markdown="1">

[Render-in-the-Loop: Vector Graphics Generation via Visual Self-Feedback](https://yukinonooo.github.io/RenderInTheLoopProject/)

Guotao Liang, Zhangcheng Wang, **Juncheng Hu**, Haitao Zhou, Ziteng Xue, Jing Zhang, Dong Xu, Qian Yu†

[![project](https://img.shields.io/badge/%F0%9F%8F%A0%20Project-Render--in--the--Loop-orange.svg)](https://yukinonooo.github.io/RenderInTheLoopProject/)
[![paper](https://img.shields.io/badge/Paper-ECCV%202026-0066cc.svg)](https://link.springer.com/chapter/10.1007/978-3-032-37035-8_13)
[![arXiv](https://img.shields.io/badge/arXiv-2604.20730-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.20730)

<b><u>TL;DR:</u></b> Render-in-the-Loop interleaves **SVG code generation** with **visual self-feedback** from intermediate renderings, using fine-grained path decomposition and **Render-and-Verify decoding** to improve text- and image-to-SVG generation.

European Conference on Computer Vision (ECCV), 2026.

🌐 [**Project**](https://yukinonooo.github.io/RenderInTheLoopProject/) |
📄 [**Paper**](https://link.springer.com/chapter/10.1007/978-3-032-37035-8_13) |
📑 [**arXiv**](https://arxiv.org/abs/2604.20730)

</div>
</div>

<!-- paper 5 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">ICML 2026</div><img src='images/covers/vanim_1.png' loading="lazy" alt="VAnim"><img src='images/covers/vanim_2.png' loading="lazy" alt="VAnim Results" style="margin-top: 0.6em; display: block;"></div></div>
<div class='paper-box-text' markdown="1">

[VAnim: Rendering-Aware Sparse State Modeling for Structure-Preserving Vector Animation](https://yukinonooo.github.io/VAnimProject/)

Guotao Liang, Zhangcheng Wang, Chuang Wang, **Juncheng Hu**, Haitao Zhou, Junhua Liu, Jing Zhang, Dong Xu, Qian Yu†

[![project](https://img.shields.io/badge/%F0%9F%8F%A0%20Project-VAnim-orange.svg)](https://yukinonooo.github.io/VAnimProject/)
[![paper](https://img.shields.io/badge/Paper-ICML%202026-0066cc.svg)](https://openreview.net/forum?id=Qs63Njpn1R)
[![arXiv](https://img.shields.io/badge/arXiv-2605.01517-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.01517)

<b><u>TL;DR:</u></b> VAnim formulates SVG animation as **sparse state updates** on a persistent DOM tree, combining identification-first motion planning with rendering-aware RL to generate **structure-preserving vector animations** from text.

International Conference on Machine Learning (ICML), 2026.

🌐 [**Project**](https://yukinonooo.github.io/VAnimProject/) |
📄 [**Paper**](https://openreview.net/forum?id=Qs63Njpn1R) |
📑 [**arXiv**](https://arxiv.org/abs/2605.01517)

</div>
</div>

<!-- paper 4 -->

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">ACM MM 2025</div><img src='images/covers/groupsketch.png' loading="lazy" alt="GroupSketch"></div></div>
<div class='paper-box-text' markdown="1">


[Multi-Object Sketch Animation with Grouping and Motion Trajectory Priors](https://hjc-owo.github.io/GroupSketchProject/)

Guotao Liang, **Juncheng Hu**, Ximing Xing, Jing Zhang, Qian Yu†

[![project](https://img.shields.io/badge/%F0%9F%8F%A0%20Project-GroupSketch-orange.svg)](https://hjc-owo.github.io/GroupSketchProject/)
[![paper](https://img.shields.io/badge/Paper-ACM%20MM%202025-0066cc.svg)](https://dl.acm.org/doi/10.1145/3746027.3754502)
[![arXiv](https://img.shields.io/badge/arXiv-2508.15535-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.15535)
[![code](https://img.shields.io/github/stars/Yukinonooo/GroupSketch?style=social&label=Code+Stars)](https://github.com/Yukinonooo/GroupSketch)

<b><u>TL;DR:</u></b> GroupSketch synthesizes **multi-object sketch animations** with **grouping** and **motion trajectory** priors, enabling users to create complex animations with ease.

ACM International Conference on Multimedia, 2025.

🌐 [**Project**](https://hjc-owo.github.io/GroupSketchProject/) |
📄 [**Paper**](https://dl.acm.org/doi/10.1145/3746027.3754502) |
📑 [**arXiv**](https://arxiv.org/abs/2508.15535) |
📁 [**Code**](https://github.com/Yukinonooo/GroupSketch)

</div>
</div>

<!-- paper 3 -->
<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">CVPR 2025</div><img src='images/covers/llm4svg_1.png' loading="lazy" alt="LLM4SVG"><img src='images/covers/llm4svg_2.png' loading="lazy" alt="LLM4SVG Results" style="margin-top: 0.6em; display: block;"></div></div>
<div class='paper-box-text' markdown="1">

[Empowering LLMs to Understand and Generate Complex Vector Graphics](https://ximinng.github.io/LLM4SVGProject/)

Ximing Xing, **Juncheng Hu**, Guotao Liang, Jing Zhang, Dong Xu, Qian Yu†

[![project](https://img.shields.io/badge/%F0%9F%8F%A0%20Project-LLM4SVG-orange.svg)](https://ximinng.github.io/LLM4SVGProject/)
[![paper](https://img.shields.io/badge/Paper-CVPR%202025-0066cc.svg)](https://openaccess.thecvf.com/content/CVPR2025/html/Xing_Empowering_LLMs_to_Understand_and_Generate_Complex_Vector_Graphics_CVPR_2025_paper.html)
[![arXiv](https://img.shields.io/badge/arXiv-2412.11102-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.11102)
[![code](https://img.shields.io/github/stars/ximinng/LLM4SVG?style=social&label=Code+Stars)](https://github.com/ximinng/LLM4SVG)
[![dataset](https://img.shields.io/badge/Dataset-SVGX_SFT_1M-ffcc00?logo=huggingface)](https://huggingface.co/datasets/xingxm/SVGX-SFT-1M)

<b><u>TL;DR:</u></b> LLM4SVG introduces learnable **SVG Semantic Tokens** and a large **SVGX-SFT dataset**, enabling LLMs to understand and generate complex vector graphics.

IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2025.

🌐 [**Project**](https://ximinng.github.io/LLM4SVGProject/) |
📄 [**Paper**](https://openaccess.thecvf.com/content/CVPR2025/html/Xing_Empowering_LLMs_to_Understand_and_Generate_Complex_Vector_Graphics_CVPR_2025_paper.html) |
📑 [**arXiv**](https://arxiv.org/abs/2412.11102) |
📁 [**Code**](https://github.com/ximinng/LLM4SVG) |
🤗 [**SVGX-SFT-1M Dataset**](https://huggingface.co/datasets/xingxm/SVGX-SFT-1M)

</div>
</div>

<!-- paper 2 -->
<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">arXiv 2024</div><img src='images/covers/svgfusion.png' loading="lazy" alt="SVGFusion"></div></div>
<div class='paper-box-text' markdown="1">

[SVGFusion: Scalable Text-to-SVG Generation via Vector Space Diffusion](https://ximinng.github.io/SVGFusionProject/)

Ximing Xing, **Juncheng Hu**, Jing Zhang, Dong Xu, Qian Yu†

[![project](https://img.shields.io/badge/%F0%9F%8F%A0%20Project-SVGFusion-orange.svg)](https://ximinng.github.io/SVGFusionProject/)
[![arXiv](https://img.shields.io/badge/arXiv-2412.10437-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.10437)
[![code](https://img.shields.io/github/stars/ximinng/SVGFusion?style=social&label=Code+Stars)](https://github.com/ximinng/SVGFusion)
[![dataset](https://img.shields.io/badge/Dataset-SVGX_Core_250k-ffcc00?logo=huggingface)](https://huggingface.co/datasets/xingxm/SVGX-Core-250k)

<b><u>TL;DR:</u></b> SVGFusion improves text-to-SVG generation by using a **VP-VAE to learn a vector representation of SVG elements**, and a **VS-DiT** to generate SVGs from text prompts by performing diffusion within that **learned vector space**.

🌐 [**Project**](https://ximinng.github.io/SVGFusionProject/) |
📑 [**arXiv**](https://arxiv.org/abs/2412.10437) |
📁 [**Code**](https://github.com/ximinng/SVGFusion) |
🤗 [**SVGX-Core-250k Dataset**](https://huggingface.co/datasets/xingxm/SVGX-Core-250k)

</div>
</div>

<!-- paper 1 -->
<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">ICME 2025</div><img src='images/covers/vectorpainter.png' loading="lazy" alt="VectorPainter"></div></div>
<div class='paper-box-text' markdown="1">

[VectorPainter: Advanced Stylized Vector Graphics Synthesis Using Stroke-Style Priors](https://hjc-owo.github.io/VectorPainterProject/)

**Juncheng Hu**, Ximing Xing, Jing Zhang, Qian Yu†

[![project](https://img.shields.io/badge/%F0%9F%8F%A0%20Project-VectorPainter-orange.svg)](https://hjc-owo.github.io/VectorPainterProject/)
[![paper](https://img.shields.io/badge/Paper-ICME%202025-0066cc.svg)](https://ieeexplore.ieee.org/document/11210204)
[![arXiv](https://img.shields.io/badge/arXiv-2405.02962-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.02962)
[![code](https://img.shields.io/github/stars/hjc-owo/VectorPainter?style=social&label=Code+Stars)](https://github.com/hjc-owo/VectorPainter)

<b><u>TL;DR:</u></b> VectorPainter synthesizes text-guided vector graphics by **imitating strokes**.

IEEE International Conference on Multimedia and Expo (ICME). IEEE, 2025.

🌐 [**Project**](https://hjc-owo.github.io/VectorPainterProject/) |
📄 [**Paper**](https://ieeexplore.ieee.org/document/11210204) |
📑 [**arXiv**](https://arxiv.org/abs/2405.02962) |
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

<a href="https://ximinng.github.io/PyTorch-SVGRender-project/"><img src="https://img.shields.io/badge/%F0%9F%8F%A0%20Website-Gitpage-yellow" alt="website"></a>
<a href="https://pytorch-svgrender.readthedocs.io/en/latest/index.html"><img src="https://img.shields.io/badge/DOCS-Readthedocs-purple?logo=readthedocs" alt="docs"></a>
<a href="https://huggingface.co/SVGRender"><img src="https://img.shields.io/badge/SPACE-HuggingFace-ffcc00?logo=huggingface" alt="space"></a>
[![](https://img.shields.io/github/stars/ximinng/PyTorch-SVGRender?style=social&label=Code+Stars)](https://github.com/ximinng/PyTorch-SVGRender)

🌐 [**Project**](https://ximinng.github.io/PyTorch-SVGRender-project/) |
📄 [**Docs**](https://pytorch-svgrender.readthedocs.io/en/latest/index.html) |
🤗 [**HuggingFace**](https://huggingface.co/SVGRender) |
📁 [**Code**](https://github.com/ximinng/PyTorch-SVGRender)

</div>
</div>

# 🎖 Honors and Awards

- _2025.12_ Merit Student of Beijing
- _2025.10_ National Scholarship for Master's Students

# 📖 Educations

- _2024.09 – Present_: **Ph.D. in Software Engineering**, School of Software, Beihang University

- _2019.09 – 2024.06_: **B.S. in Software Engineering**, School of Software, Beihang University
  - **GPA**: 3.95730 / 4.00
  - **Rank**: 4 / 187

<!-- # 💬 Invited Talks -->

<!-- - _2021.06_, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. -->
<!-- - _2021.03_, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. \| [\[video\]](https://github.com/) -->

# 💻 Internships

- _2024.01 - 2024.06_, [AISphere](https://aishiai.com/), China.

  Controllable video generation, Text/Image-to-video generation, video reconstruction using VAE.
