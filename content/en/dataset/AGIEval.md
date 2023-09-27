---
title: "AGIEval"
description: "AGIEval includes five math datasets, which consist of 351 Chinese high school math multiple-choice questions, 118 Chinese high school math fill-in-the-blank questions, 220 English math multiple-choice questions from the SAT, 254 English math multiple-choice questions from the GRE, and 1000 English math fill-in-the-blank questions from the AMC and AIME exams."
categories: ["Math world CN"]
weight: 140
draft: false

github: "https://github.com/microsoft/AGIEval"
---

#### Introduction

AGIEval includes five math datasets, which consist of 351 Chinese high school math multiple-choice questions, 118 Chinese high school math fill-in-the-blank questions, 220 English math multiple-choice questions from the SAT, 254 English math multiple-choice questions from the GRE, and 1000 English math fill-in-the-blank questions from the AMC and AIME exams.

#### Example

```json
{
	"passage": null,
	"question": "设集合 $A=\\{x \\mid x \\geq 1\\}, B=\\{x \\mid-1<x<2\\}$, 则 $A \\cap B=$ ($\\quad$)\\\\\n",
	"options": ["(A)$\\{x \\mid x>-1\\}$", "(B)$\\{x \\mid x \\geq 1\\}$", "(C)$\\{x \\mid-1<x<1\\}$", "(D)$\\{x \\mid 1 \\leq x<2\\}$"],
	"label": "D",
	"answer": null,
	"other": {
		"source": "2021年浙江卷—数学"
	}
}
```