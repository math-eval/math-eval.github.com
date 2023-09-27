---
title: "GAOKAO(Math)"
description: "GAOKAO(Math)收集了2010-2022年的中国高考数学题，包含6个数据集，分别为全国卷1和全国卷2的选择题、填空题和解答题。GAOKAO(Math)中的每道题都给出了详细的解答过程，有利于CoT训练。"
categories: ["应用题-中文"]
weight: 130
draft: false

github: "https://github.com/OpenLMLab/GAOKAO-Bench"
---

#### 简介

GAOKAO(Math)收集了2010-2022年的中国高考数学题，包含6个数据集，分别为全国卷1和全国卷2的选择题、填空题和解答题。GAOKAO(Math)中的每道题都给出了详细的解答过程，有利于CoT训练。

#### 示例

```json
{
    "year": "2010",
    "category": "（新课标）",
    "question": "1. （5 分) 已知集合 $A=\\{x \\in R|| x \\mid \\leqslant 2\\}\\}, B=\\{x \\in Z \\mid \\sqrt{x} \\leqslant 4\\}$, 则 $A \\cap B=(\\quad$ ）\nA. $(0,2)$\nB. $[0,2]$\nC. $\\{0,2\\}$\nD. $\\{0,1,2\\}$\n",
    "answer": [
        "D"
    ],
    "analysis": "解: $A=\\{x \\in R|| x \\mid \\leqslant 2\\}=,\\{x \\in R \\mid-2 \\leqslant x \\leqslant 2\\}$,\n\n$B=\\{x \\in Z \\mid \\sqrt{x} \\leqslant 4\\}=\\{x \\in Z \\mid 0 \\leqslant x \\leqslant 16\\}$\n\n故 $A \\cap B=\\{0,1,2\\}$.\n\n应选 D.\n",
    "index": 0,
    "score": 5
}
```