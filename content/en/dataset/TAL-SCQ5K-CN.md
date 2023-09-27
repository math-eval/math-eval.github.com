---
title: "TAL-SCQ5K-CN"
description: "TAL-SCQ5K-CN is a high quality mathematical competition dataset in Chinese language created by TAL Education Group, which consisting of 5K Chinese mathematical competition questions (3K training and 2K testing). The questions are in the form of multiple-choice and cover mathematical topics at the primary,junior high and high school levels. In addition, detailed solution steps are provided to facilitate CoT training and all the mathematical expressions in the questions have been presented as standard text-mode Latex format."
categories: ["Math world CN"]
weight: 160
draft: false

website: "https://huggingface.co/datasets/math-eval/TAL-SCQ5K"
github: "https://github.com/math-eval/TAL-SCQ5K"
---

#### Introduction

TAL-SCQ5K-CN is a high quality mathematical competition dataset in Chinese language created by TAL Education Group, which consisting of 5K Chinese mathematical competition questions (3K training and 2K testing). The questions are in the form of multiple-choice and cover mathematical topics at the primary,junior high and high school levels. In addition, detailed solution steps are provided to facilitate CoT training and all the mathematical expressions in the questions have been presented as standard text-mode Latex format.

#### Example

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