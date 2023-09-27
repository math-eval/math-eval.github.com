---
title: "MathQA"
description: "MathQA包含37200道数学多选题，需要从5个选项中选出唯一的正确答案，分别为3316道几何数学题、9830道物理数学题、663道概率题、4377道增益损失题、17796道普通数学题和1277道其他类别数学题。"
categories: ["应用题-英文"]
draft: false
weight: 150
github: "https://math-qa.github.io/math-QA"
---

#### 简介

MathQA包含37200道数学多选题，需要从5个选项中选出唯一的正确答案，分别为3316道几何数学题、9830道物理数学题、663道概率题、4377道增益损失题、17796道普通数学题和1277道其他类别数学题。

#### 示例

```json
{
    "Problem": "? % of 360 = 108",
    "Rationale": "\"? % of 360 = 108 or , ? = 108 \u00d7 100 / 360 = 30 answer a\"",
    "options": "a ) 30 , b ) 36 , c ) 64 , d ) 72 , e ) none of these",
    "correct": "a",
    "annotated_formula": "divide(multiply(108, const_100), 360)",
    "linear_formula": "multiply(n1,const_100)|divide(#0,n0)|",
    "category": "gain"
}
```