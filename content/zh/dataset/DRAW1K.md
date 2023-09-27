---
title: "DRAW1K"
description: "DRAW1K是从algebra.com网站上抓取的1000个代数应用题，包括255个一元未知变量问题和745个二元未知变量问题，测试样本有200个。"
categories: ["应用题-英文"]
draft: false

github: "https://github.com/LYH-YF/MWPToolkit"
---

#### 简介

DRAW1K是从algebra.com网站上抓取的1000个代数应用题，包括255个一元未知变量问题和745个二元未知变量问题，测试样本有200个。

#### 示例

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