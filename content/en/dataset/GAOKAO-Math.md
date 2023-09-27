---
title: "GAOKAO(Math)"
description: "GAOKAO(Math) is a collection of Chinese high school mathematics questions from the years 2010 to 2022. It consists of six datasets, including multiple-choice questions, fill-in-the-blank questions, and problem-solving questions from both National Exam Paper 1 and National Exam Paper 2. Each question in GAOKAO(Math) is accompanied by a detailed solution process, which is beneficial for CoT training."
categories: ["Math world CN"]
weight: 130
draft: false

github: "https://github.com/OpenLMLab/GAOKAO-Bench"
---

#### Introduction

GAOKAO(Math) is a collection of Chinese high school mathematics questions from the years 2010 to 2022. It consists of six datasets, including multiple-choice questions, fill-in-the-blank questions, and problem-solving questions from both National Exam Paper 1 and National Exam Paper 2. Each question in GAOKAO(Math) is accompanied by a detailed solution process, which is beneficial for CoT training.

#### Example

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