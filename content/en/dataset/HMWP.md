---
title: "HMWP"
description: "HMWP consists of 5491 Chinese math problems extracted from the Chinese K12 math problem database, including 2955 single-variable linear problems, 1636 two-variable linear problems, and 900 single-variable nonlinear problems."
categories: ["Math world CN"]
draft: false

github: "https://github.com/LYH-YF/MWPToolkit"
---

#### Introduction

HMWP consists of 5491 Chinese math problems extracted from the Chinese K12 math problem database, including 2955 single-variable linear problems, 1636 two-variable linear problems, and 900 single-variable nonlinear problems.

#### Example

```json
{
	"id": 16362589,
	"original_text": "在 水果 店里 ， 小 李买 了 5kg 苹果 ， 3kg 梨 ， 老板 少要 2 元 ， 收 了 50 元 ； 老王 买 了 11kg 苹果 ， 5kg 梨 ， 老板 按 0.9 折 收钱 ， 收 了 90 元 ， 该店 的 苹果 和 梨 的 单价 各是 多少 元 ？",
	"equation": "5.0 * x + 3.0 * y - 2.0 = 50.0 ; ( 11.0 * x + 5.0 * y ) * 0.9 = 90.0",
	"ans": [
		5,
		9
	]
}
```