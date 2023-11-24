---
title: "GAOKAO-2023"
description: "我们为了公平的评价模型，确保这些大模型在训练的时候没有见过最新的数据，我们会每年更新我们的中国高考数据集榜单，因为高考的题目是最新的，确保没有被见过的，这一次收集的2023年中国高考数学题包含110个选择题，47个填空题以及两个大题。"
categories: ["应用题-中文"]
weight: 130
draft: false
---

#### 简介

我们为了公平的评价模型，确保这些大模型在训练的时候没有见过最新的数据，我们会每年更新我们的中国高考数据集榜单，因为高考的题目是最新的，确保没有被见过的，这一次收集的2023年中国高考数学题包含110个选择题，47个填空题以及两个大题。

#### 示例

```json
{
	"dataset_name": "choice_answer_2023",
	"dataset_version": "2023-11-16",
	"qid": "1",
	"queId": "f02740ae2c6743afb76e10770f3bc1ad",
	"competition_source_list": ["2023年高考真题北京卷第2题4分"],
	"difficulty": 2,
	"qtype": "short_answer",
	"problem": "在复平面内，复数$$z$$对应的点的坐标是$$(-1,  sqrt{3})$$，则$$z$$的共轭复数$$ overline{z}=$$（ ）． ",
	"answer_option_list": [
		[{
			"aoId": "f273160850bb43dfbb619ca8231bfb20",
			"aoVal": "A",
			"content": "$$1+  sqrt{3}{i}$$ "
		}],
		[{
			"aoId": "3707bfbafcd34285acbc0a53f558a698",
			"aoVal": "B",
			"content": "$$1-  sqrt{3}{i}$$ "
		}],
		[{
			"aoId": "010665c78018474a9c6749a5206960f5",
			"aoVal": "C",
			"content": "$$-1+  sqrt{3}{i}$$ "
		}],
		[{
			"aoId": "eb89f327c0c4412a9b9f23e44a7e88c3",
			"aoVal": "D",
			"content": "$$-1-  sqrt{3}{i}$$ "
		}]
	],
	"knowledge_point_routes": [],
	"answer_analysis": ["因为在复平面内，复数$$z$$对应的点的坐标是$$(-1,  sqrt{3})$$， 所以$$z=-1+ sqrt{3}{i}$$， 所以$$ overline{z}=-1- sqrt{3}{i}$$， 故选：$${D}$$． "],
	"answer_value": "D"
}
```