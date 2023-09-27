---
title: "AGIEval"
description: "AGIEval包含5个数学数据集，分别为351道中文高考数学选择题，118道中文高考数学填空题，220道来自SAT的英文数学选择题，254道来自GRE的英文数学选择题和1000道来自AMC和AIME考试的英文数学填空题。"
categories: ["应用题-中文"]
weight: 140
draft: false

github: "https://github.com/microsoft/AGIEval"
---

#### 简介

AGIEval包含5个数学数据集，分别为351道中文高考数学选择题，118道中文高考数学填空题，220道来自SAT的英文数学选择题，254道来自GRE的英文数学选择题和1000道来自AMC和AIME考试的英文数学填空题。

#### 示例

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