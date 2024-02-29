---
title: "Arith3K"
description: "Arith3K is a high-quality arithmetic evaluation dataset created by TAL Education Group, which includes 3 major categories and 15 subcategories of different operators and forms of generalized arithmetic problems, totaling 3,000 questions. It covers a wide range of generalized arithmetic problems, almost including all common operators and calculation forms used in scientific computing. Unlike previous arithmetic evaluation datasets, it significantly increases the difficulty span of problems, from relatively simple 1-5 digit integer arithmetic operations to complex nested operator calculations, fulfilling the arithmetic evaluation needs in different evolutionary stages of LLMs’."
categories: ["Arithmetics"]
weight: 160
draft: false
---

#### Introduction

Arith3K is a high-quality arithmetic evaluation dataset created by TAL Education Group, which includes 3 major categories and 15 subcategories of different operators and forms of generalized arithmetic problems, totaling 3,000 questions. It covers a wide range of generalized arithmetic problems, almost including all common operators and calculation forms used in scientific computing. Unlike previous arithmetic evaluation datasets, it significantly increases the difficulty span of problems, from relatively simple 1-5 digit integer arithmetic operations to complex nested operator calculations, fulfilling the arithmetic evaluation needs in different evolutionary stages of LLMs’.

#### Example

```json
{
    "id": 226,
    "expression": "14^4-tan(-3.16π)/sqrt(703)",
    "answer": 38416.0207
}
```