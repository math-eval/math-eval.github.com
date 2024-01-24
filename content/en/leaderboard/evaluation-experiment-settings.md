---
title: "Evaluation Experiment Settings"
---

<div class="flex mb-2">
  <div class="w-[70px] font-bold">Note 1:</div>
  <div class="flex-1">We will concatenate a simple "solution instruction" with the question as the input to the large model for it to infer and solve the question. <a href="https://github.com/math-eval/MathEval/blob/main/eval_prompt.md" target="_blank" class="text-primary not-prose">[Details]<i class="fa-solid fa-up-right-from-square text-xs ml-1"></i></a></div>
</div>
<div class="flex mb-2">
  <div class="w-[70px] font-bold">Note 2:</div>
  <div class="flex-1">We employ GPT-4 for answer extraction, resulting in a substantial enhancement in precision when compared to the conventional regular expression-based extraction method. In cases where GPT-4 extraction does not yield the desired results, we supplement it with results obtained through regular expression-based extraction. Furthermore, we harness the capabilities of GPT-4 for comparing the extracted answers with the standard responses, enabling us to handle diverse expression forms. This facilitates the generation of precise matching results, thereby allowing for an accurate assessment of correctness. It is important to note that this workflow does not involve any manual verification. <a href="https://github.com/math-eval/MathEval/blob/main/extract_res_regex.md" target="_blank" class="text-primary not-prose">[Details]<i class="fa-solid fa-up-right-from-square text-xs ml-1"></i></a></div>
</div>
<div class="flex">
  <div class="w-[70px] font-bold">Note 3:</div>
  <div class="flex-1">For multiple-choice MMLU(math), we conducted experiments in two ways: directly generating answers and predicting options based on perplexity. The better results are used as the evaluation results in the leaderboard.</div>
</div>