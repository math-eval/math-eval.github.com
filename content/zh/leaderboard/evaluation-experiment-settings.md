---
title: "测评实验设置"
---

<div class="flex mb-2">
  <div class="w-[60px] font-bold">说明1：</div>
  <div class="flex-1">我们将一句简单的“解题指令”与题干本身进行拼接，作为输入，让大模型进行推理和解题。<a href="https://github.com/math-eval/MathEval/blob/main/eval_prompt.md" target="_blank" class="text-primary not-prose">【详情】<i class="fa-solid fa-up-right-from-square text-xs"></i></a></div>
</div>
<div class="flex mb-2">
  <div class="w-[60px] font-bold">说明2：</div>
  <div class="flex-1">我们用GPT-4来进行模型预测答案的抽取，相比较于正则表达式的抽取在精准率上有明显的提升，对于没有正常抽取的结果，我们再用正则表达式进行补充。<br>在进行抽取答案和标准答案的比对工作时，我们也使用了GPT-4来进行比对，它可以统一多种表达形式，并给出精准的匹配结果，从而计算正确率。此处无人工核验环节。<a href="https://github.com/math-eval/MathEval/blob/main/extract_res_regex.md" target="_blank" class="text-primary not-prose">【详情】<i class="fa-solid fa-up-right-from-square text-xs"></i></a></div>
</div>
<div class="flex">
  <div class="w-[60px] font-bold">说明3：</div>
  <div class="flex-1">对于MMLU(math)选择题，我们同时用直接生成答案和依据困惑度进行选项预测两种方式进行实验，并用较好结果作为榜单中的评测结果。</div>
</div>