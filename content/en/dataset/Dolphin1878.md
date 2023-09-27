---
title: "Dolphin1878"
description: "Dolphin1878 is a dataset comprising 1878 English mathematical problems collected from both algebra.com and Yahoo websites. Each problem in the dataset contains 1-4 unknown variables. The dataset also includes 187 test samples for evaluation purposes."
categories: ["Math world EN"]
draft: false

github: "https://github.com/LYH-YF/MWPToolkit/"
---

#### Introduction

Dolphin1878 is a dataset comprising 1878 English mathematical problems collected from both algebra.com and Yahoo websites. Each problem in the dataset contains 1-4 unknown variables. The dataset also includes 187 test samples for evaluation purposes.

#### Example

```json
{
    "id": "algebra.com.106087",
    "index": 1001,
    "text": "The difference of two integers is 9. Five times the smaller is 7 more than three times the larger. Find the numbers.",
    "sources": [
        "algebra.com.106087",
        "algebra.com.173890",
        "algebra.com.18136"
    ],
    "equations": [
        "unkn: x,y",
        "equ: x-y=9",
        "equ: 5*y=3*x+7"
    ],
    "ans": "{26; 17}",
    "ans_simple": [
        26,
        17
    ]
}
```