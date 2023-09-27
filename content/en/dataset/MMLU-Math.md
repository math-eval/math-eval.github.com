---
title: "MMLU(Math)"
description: "MMLU(Math) comprises multiple-choice questions across four difficulty levels: abstract algebra, college mathematics, high school mathematics and elementary mathematics. The number of test samples is: 100, 148, 270 and 388."
categories: ["Math world EN"]
weight: 120
draft: false

website: "https://huggingface.co/datasets/cais/mmlu"
github: "https://github.com/hendrycks/test"
---

#### Introduction

MMLU(Math) comprises multiple-choice questions across four difficulty levels: abstract algebra, college mathematics, high school mathematics and elementary mathematics. The number of test samples is: 100, 148, 270 and 388.

#### Meta Data

* question: a string feature
* choices: a list of 4 string features
* answer: a ClassLabel feature

#### Example

```json
{
  "question": "What is the embryological origin of the hyoid bone?",
  "choices": ["The first pharyngeal arch", "The first and second pharyngeal arches", "The second pharyngeal arch", "The second and third pharyngeal arches"],
  "answer": "D"
}
```