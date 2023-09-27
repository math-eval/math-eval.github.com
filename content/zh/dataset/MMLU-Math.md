---
title: "MMLU(Math)"
description: "MMLU(Math)包含四个数学数据集：抽象代数、大学数学、高中数学和小学数学，题型都为四选一的选择题。测试样本个数分别为：100、148、270和388。"
categories: ["应用题-英文"]
weight: 120
draft: false

website: "https://huggingface.co/datasets/cais/mmlu"
github: "https://github.com/hendrycks/test"
---

#### 简介

MMLU(Math)包含四个数学数据集：抽象代数、大学数学、高中数学和小学数学，题型都为四选一的选择题。测试样本个数分别为：100、148、270和388。

#### 元数据

* question: a string feature
* choices: a list of 4 string features
* answer: a ClassLabel feature

#### 示例

```json
{
  "question": "What is the embryological origin of the hyoid bone?",
  "choices": ["The first pharyngeal arch", "The first and second pharyngeal arches", "The second pharyngeal arch", "The second and third pharyngeal arches"],
  "answer": "D"
}
```