---
title: "GSM8K"
description: "GSM8K是大小为8.5K的小学数学数据集，涉及基本算术运算，需要2-8个步骤才能解决，包含7.5K训练集和1K测试集。GSM8K每道题的答案包含完整的解题过程，有助于CoT训练。"
categories: ["应用题-英文"]
weight: 100
draft: false

github: "https://github.com/openai/grade-school-math/tree/master/grade_school_math"
---

#### 简介

GSM8K是大小为8.5K的小学数学数据集，涉及基本算术运算，需要2-8个步骤才能解决，包含7.5K训练集和1K测试集。GSM8K每道题的答案包含完整的解题过程，有助于CoT训练。
#### 元数据

* question: A math question.
* answer: Answer to the question.

#### 示例

```json
{
	"question": "Janet\u2019s ducks lay 16 eggs per day. She eats three for breakfast every morning and bakes muffins for her friends every day with four. She sells the remainder at the farmers' market daily for $2 per fresh duck egg. How much in dollars does she make every day at the farmers' market?",
	"answer": "Janet sells 16 - 3 - 4 = <<16-3-4=9>>9 duck eggs a day.\nShe makes 9 * 2 = $<<9*2=18>>18 every day at the farmer\u2019s market.\n#### 18"
}
```