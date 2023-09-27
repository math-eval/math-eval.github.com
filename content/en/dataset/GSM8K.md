---
title: "GSM8K"
description: "GSM8K is a small-scale elementary school mathematics dataset with a size of 8.5K. It covers basic arithmetic operations and requires 2-8 steps to solve each problem. The dataset consists of a training set of 7.5K examples and a test set of 1K examples. The answers to each question in GSM8K include complete solution processes, which are beneficial for CoT training."
categories: ["Math world EN"]
weight: 100
draft: false

github: "https://github.com/openai/grade-school-math/tree/master/grade_school_math"
---

#### Introduction

GSM8K is a small-scale elementary school mathematics dataset with a size of 8.5K. It covers basic arithmetic operations and requires 2-8 steps to solve each problem. The dataset consists of a training set of 7.5K examples and a test set of 1K examples. The answers to each question in GSM8K include complete solution processes, which are beneficial for CoT training.

#### Meta Data

* question: A math question.
* answer: Answer to the question.

#### Example

```json
{
	"question": "Janet\u2019s ducks lay 16 eggs per day. She eats three for breakfast every morning and bakes muffins for her friends every day with four. She sells the remainder at the farmers' market daily for $2 per fresh duck egg. How much in dollars does she make every day at the farmers' market?",
	"answer": "Janet sells 16 - 3 - 4 = <<16-3-4=9>>9 duck eggs a day.\nShe makes 9 * 2 = $<<9*2=18>>18 every day at the farmer\u2019s market.\n#### 18"
}
```