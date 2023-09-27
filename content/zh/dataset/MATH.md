---
title: "MATH"
description: "MATH是一个包含12500个高中数学竞赛的问题（7500个用于训练，5000个用于测试）的数据集，以文本模式的Latex格式呈现。MATH中的每个问题都有一个完整的逐步解决方案，有助于CoT训练。"
categories: ["应用题-英文"]
weight: 110
draft: false

github: "https://github.com/hendrycks/math"
---

#### 简介

MATH是一个包含12500个高中数学竞赛的问题（7500个用于训练，5000个用于测试）的数据集，以文本模式的Latex格式呈现。MATH中的每个问题都有一个完整的逐步解决方案，有助于CoT训练。

#### 示例

```json
{
    "problem": "How many vertical asymptotes does the graph of $y=\\frac{2}{x^2+x-6}$ have?",
    "level": "Level 3",
    "type": "Algebra",
    "solution": "The denominator of the rational function factors into $x^2+x-6=(x-2)(x+3)$. Since the numerator is always nonzero, there is a vertical asymptote whenever the denominator is $0$, which occurs for $x = 2$ and $x = -3$.  Therefore, the graph has $\\boxed{2}$ vertical asymptotes."
}
```