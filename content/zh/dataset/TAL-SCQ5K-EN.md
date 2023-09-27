---
title: "TAL-SCQ5K-EN"
description: "TAL-SCQ5K-EN是由好未来创建的高质量英语数学竞赛数据集，包含5K道英语数学竞赛题目（3K道用于训练，2K道用于测试）。这些题目采用多项选择题形式，涵盖了小学数学领域的各个主题。此外，为了方便CoT训练，提供了详细的解题步骤，并且所有题目中的数学表达式均以标准文本模式的Latex格式呈现。"
categories: ["应用题-英文"]
weight: 180
draft: false

website: "https://huggingface.co/datasets/math-eval/TAL-SCQ5K"
github: "https://github.com/math-eval/TAL-SCQ5K"
---

#### 简介

TAL-SCQ5K-EN是由好未来创建的高质量英语数学竞赛数据集，包含5K道英语数学竞赛题目（3K道用于训练，2K道用于测试）。这些题目采用多项选择题形式，涵盖了小学数学领域的各个主题。此外，为了方便CoT训练，提供了详细的解题步骤，并且所有题目中的数学表达式均以标准文本模式的Latex格式呈现。

#### 示例

```json
{
    "dataset_name": "prime_math_competition_en_single_choice_8K_dev",
    "dataset_version": "2023-07-07",
    "qid": "244",
    "queId": "8afc802a8c304199b1040f11ffa2e92a",
    "competition_source_list": [],
    "difficulty": "2",
    "qtype": "single_choice",
    "problem": "A $14$-digit. number $666666 XY 444444$ is a multiple of $26$. If $X$ and $Y$ are both positive, what is the smallest vaue of $X+ Y$? ",
    "answer_option_list": [
        [{
            "aoVal": "A",
            "content": "$$3$$ "
        }],
        [{
            "aoVal": "B",
            "content": "$$4$$ "
        }],
        [{
            "aoVal": "C",
            "content": "$$9$$ "
        }],
        [{
            "aoVal": "D",
            "content": "$$14$$ "
        }],
        [{
            "aoVal": "E",
            "content": "None of the above "
        }]
    ],
    "knowledge_point_routes": ["Overseas Competition->Knowledge Point->Number Theory Modules->Division without Remainders->Divisibility Rules"],
    "answer_analysis": ["Since $1001$ is a multiple of $13$, $111111 = 111 \\times 1001$ is also a multiple of $13$.  It follows that both $666666$ and $444444$ are both multiples of $26$.  $666666XY 444444 = 66666600000000 + XY 000000 + 444444$  $\\Rightarrow XY$ must be divisible by $13$.  Smallest $X+Y=1+3=4$. "],
    "answer_value": "B"
}
```