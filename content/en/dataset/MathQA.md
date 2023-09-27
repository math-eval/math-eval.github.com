---
title: "MathQA"
description: "MathQA consists of 37,200 multiple-choice math questions, where a unique correct answer needs to be selected from 5 options. The questions are divided into different categories as follows: 3,316 geometry questions, 9,830 physics math questions, 663 probability questions, 4,377 gain-loss questions, 17,796 general math questions, and 1,277 other questions."
categories: ["Math world EN"]
weight: 150
draft: false

github: "https://math-qa.github.io/math-QA"
---

#### Introduction

MathQA consists of 37,200 multiple-choice math questions, where a unique correct answer needs to be selected from 5 options. The questions are divided into different categories as follows: 3,316 geometry questions, 9,830 physics math questions, 663 probability questions, 4,377 gain-loss questions, 17,796 general math questions, and 1,277 other questions.

#### Example

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