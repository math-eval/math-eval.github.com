---
title: "DRAW1K"
description: "DRAW1K is a dataset consisting of 1000 algebraic word problems collected from the algebra.com website. It includes 255 single-variable problems and 745 two-variable problems. The dataset also contains 200 test samples for evaluation."
categories: ["Math world EN"]
draft: false

github: "https://github.com/LYH-YF/MWPToolkit"
---

#### Introduction

DRAW1K is a dataset consisting of 1000 algebraic word problems collected from the algebra.com website. It includes 255 single-variable problems and 745 two-variable problems. The dataset also contains 200 test samples for evaluation.

#### Example

```json
{
  "id": 238992,
  "original_text": "a bank offers two checking plans . The anywhere plan charges 30 cents per check . Th Accucheck plan costs $ 1.12 a month , plus 22 cents per check . For what number of checks will the Accucheck plan costs less than the Anywhere plan ?",
  "equation": "0.01*30.0*m-0.01*22.0*m=1.12",
  "ans": [
      14.0
  ],
  "number list": [
      "2.0",
      "30.0",
      "1.12",
      "22.0"
  ],
  "number_position": [
      3,
      11,
      21,
      26
  ]
}
```