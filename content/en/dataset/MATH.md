---
title: "MATH"
description: "MATH is a dataset which consists of 12, 500 problems(7,500 training, 5,000 testing) from high school math competitions in text-mode Latex. Each problem in MATH has a full step-by-step solution which facilitate CoT training."
categories: ["Math world EN"]
weight: 110
draft: false

github: "https://github.com/hendrycks/math"
---

#### Introduction

MATH is a dataset which consists of 12, 500 problems(7,500 training, 5,000 testing) from high school math competitions in text-mode Latex. Each problem in MATH has a full step-by-step solution which facilitate CoT training.

#### Example

```json
{
    "problem": "How many vertical asymptotes does the graph of $y=\\frac{2}{x^2+x-6}$ have?",
    "level": "Level 3",
    "type": "Algebra",
    "solution": "The denominator of the rational function factors into $x^2+x-6=(x-2)(x+3)$. Since the numerator is always nonzero, there is a vertical asymptote whenever the denominator is $0$, which occurs for $x = 2$ and $x = -3$.  Therefore, the graph has $\\boxed{2}$ vertical asymptotes."
}
```