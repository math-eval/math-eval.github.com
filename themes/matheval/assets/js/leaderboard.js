import highestData from "data/overall.json";
import zeroShotData from "data/zero.json";
import fewShotData from "data/few.json";

(function () {
  "use strict";

  const leaderboardApp = document.getElementById("leaderboardApp");
  if (!leaderboardApp) return;

  const filterConfig = {
    // 中文数据集
    cn: ['HMWP', 'Arith30K', 'SCQ5k-CN', 'GAOKAO-Math', 'CMMLU-Math', 'C-eval-Math', 'Math23k', 'Ape210K', 'Big-Bench-Hard-Math', 'AGIEval'],
    // 英文数据集
    en: ['GSM8K', 'MATH', 'MMLU-Math', 'svamp', 'math401-llm', 'DRAW1K', 'Dolphin1878', 'Arith30K', 'SCQ5K-EN', 'mawps', 'asdiv-a', 'MathQA', 'Big-Bench-Math', 'Big-Bench-Hard-Math'],
    // 应用题
    math_world_problems: ['GSM8K', 'MATH', 'MMLU-Math', 'svamp', 'DRAW1K', 'HMWP', 'Dolphin1878', 'SCQ5K-EN', 'SCQ5k-CN', 'mawps', 'GAOKAO-Math', 'asdiv-a', 'CMMLU-Math', 'C-eval-Math', 'MathQA', 'Math23k', 'Ape210K', 'AGIEval'],
    // 算术
    arithmetics: ['math401-llm', 'Arith30K', 'Big-Bench-Math', 'Big-Bench-Hard-Math'],
  }

  const datasetColumn = [
    { field: 'Arith30K', title: 'Arith30K', width: 90, align: 'center', sortable: true, visible: true },
    { field: 'SCQ5K-EN', title: 'TAL-SCQ5K-EN', width: 140, align: 'center', sortable: true, visible: true },
    { field: 'SCQ5k-CN', title: 'TAL-SCQ5K-CN', width: 140, align: 'center', sortable: true, visible: true },
    { field: 'mawps', title: 'MAWPS', width: 80, align: 'center', sortable: true, visible: true },
    { field: 'GAOKAO-Math', title: 'GAOKAO(Math)', width: 140, align: 'center', sortable: true, visible: true },
    { field: 'asdiv-a', title: 'ASDiv-A', width: 80, align: 'center', sortable: true, visible: true },
    { field: 'CMMLU-Math', title: 'CMMLU(Math)', width: 130, align: 'center', sortable: true, visible: true },
    { field: 'MATH', title: 'MATH', width: 80, align: 'center', sortable: true, visible: true },
    { field: 'GSM8k', title: 'GSM8K', width: 80, align: 'center', sortable: true, visible: true },
    { field: 'MMLU-Math', title: 'MMLU(Math)', width: 140, align: 'center', sortable: true, visible: true },
    { field: 'svamp', title: 'SVAMP', width: 80, align: 'center', sortable: true, visible: true },
    { field: 'math401-llm', title: 'math401-llm', width: 120, align: 'center', sortable: true, visible: true },
    { field: 'DRAW1K', title: 'DRAW1K', width: 100, align: 'center', sortable: true, visible: true },
    { field: 'HMWP', title: 'HMWP', width: 80, align: 'center', sortable: true, visible: true },
    { field: 'Dolphin1878', title: 'Dolphin1878', width: 110, align: 'center', sortable: true, visible: true },
    { field: 'C-eval-Math', title: 'C-eval(Math)', width: 120, align: 'center', sortable: true, visible: true },
    { field: 'MathQA', title: 'MathQA', width: 90, align: 'center', sortable: true, visible: true },
    { field: 'Math23k', title: 'Math23K', width: 90, align: 'center', sortable: true, visible: true },
    { field: 'Ape210K', title: 'Ape210K', width: 90, align: 'center', sortable: true, visible: true },
    { field: 'Big-Bench-Math', title: 'Big-Bench(Math)', width: 140, align: 'center', sortable: true, visible: true },
    { field: 'Big-Bench-Hard-Math', title: 'Big-Bench-Hard(Math)', width: 180, align: 'center', sortable: true, visible: true },
    { field: 'AGIEval', title: 'AGIEval', width: 90, align: 'center', sortable: true, visible: true },
  ]

  const { createApp } = Vue
  const app = createApp({
    data() {
      let lanyType = 'zh';
      const url = new URL(window.location.href);
      if (/\/en/.test(url.pathname)) {
        lanyType = 'en';
      }

      const overallAverageName = lanyType === 'zh' ? '整体平均' : 'Overall average';
      const weightedAverageName = lanyType === 'zh' ? '加权平均' : 'Weighted average';
      const cumulativeRankingName = lanyType === 'zh' ? '累加排位' : 'Cumulative ranking';
      const overallAverageTips = {
        content: lanyType === 'zh' ? '将该模型在n个数据集上的准确率直接算均值。该数值越大代表模型性能越好。' : 'Calculate the average accuracy of the model on n datasets directly. A higher value indicates better model performance.'
      }
      const weightedAverageTips = {
        content: lanyType === 'zh' ? '用该模型在n个数据集上所有做对题目数除以所有数据集的总题目数。该数值越大代表模型性能越好。' : 'The number of correct questions of the model on n datasets is divided by the total number of questions in all datasets. The larger this value, the better the performance of the model.'
      }
      const cumulativeRankingTips = {
        content: lanyType === 'zh' ? '将该模型在n个数据集上的准确率排名的排序名次累加。该数值越小代表模型性能越好。' : "Add up the ranking positions of the model's accuracy on n datasets. A lower value indicates better model performance."
      }
      const averageColumn = [
        // 整体平均
        { field: 'overall_average', title: overallAverageName, 'title-help': overallAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: true },
        { field: 'overall_average_cn', title: overallAverageName, 'title-help': overallAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'overall_average_en', title: overallAverageName, 'title-help': overallAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'math_world_problems_overall_average', title: overallAverageName, 'title-help': overallAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'math_world_problems_overall_average_cn', title: overallAverageName, 'title-help': overallAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'math_world_problems_overall_average_en', title: overallAverageName, 'title-help': overallAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'arithmetics_overall_average', title: overallAverageName, 'title-help': overallAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'arithmetics_overall_average_cn', title: overallAverageName, 'title-help': overallAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'arithmetics_overall_average_en', title: overallAverageName, 'title-help': overallAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },

        // 加权平均
        { field: 'weighted_average', title: weightedAverageName, 'title-help': weightedAverageTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterNum, align: 'center', sortable: true, visible: true },
        { field: 'weighted_average_cn', title: weightedAverageName, 'title-help': weightedAverageTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'weighted_average_en', title: weightedAverageName, 'title-help': weightedAverageTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'math_world_problems_weighted_average', title: weightedAverageName, 'title-help': weightedAverageTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'math_world_problems_weighted_average_cn', title: weightedAverageName, 'title-help': weightedAverageTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'math_world_problems_weighted_average_en', title: weightedAverageName, 'title-help': weightedAverageTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'arithmetics_weighted_average', title: weightedAverageName, 'title-help': weightedAverageTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'arithmetics_weighted_average_cn', title: weightedAverageName, 'title-help': weightedAverageTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'arithmetics_weighted_average_en', title: weightedAverageName, 'title-help': weightedAverageTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },

        // 累加排位
        { field: 'cumulative_ranking', title: cumulativeRankingName, 'title-help': cumulativeRankingTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterRank, align: 'center', sortable: true, visible: true },
        { field: 'cumulative_ranking_cn', title: cumulativeRankingName, 'title-help': cumulativeRankingTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterRank, align: 'center', sortable: true, visible: false },
        { field: 'cumulative_ranking_en', title: cumulativeRankingName, 'title-help': cumulativeRankingTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterRank, align: 'center', sortable: true, visible: false },
        { field: 'math_world_problems_cumulative_ranking', title: cumulativeRankingName, 'title-help': cumulativeRankingTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterRank, align: 'center', sortable: true, visible: false },
        { field: 'math_world_problems_cumulative_ranking_cn', title: cumulativeRankingName, 'title-help': cumulativeRankingTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterRank, align: 'center', sortable: true, visible: false },
        { field: 'math_world_problems_cumulative_ranking_en', title: cumulativeRankingName, 'title-help': cumulativeRankingTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterRank, align: 'center', sortable: true, visible: false },
        { field: 'arithmetics_cumulative_ranking', title: cumulativeRankingName, 'title-help': cumulativeRankingTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterRank, align: 'center', sortable: true, visible: false },
        { field: 'arithmetics_cumulative_ranking_cn', title: cumulativeRankingName, 'title-help': cumulativeRankingTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterRank, align: 'center', sortable: true, visible: false },
        { field: 'arithmetics_cumulative_ranking_en', title: cumulativeRankingName, 'title-help': cumulativeRankingTips, width: lanyType === 'zh' ? 120 : 180, formatter: this.formatterRank, align: 'center', sortable: true, visible: false },
      ]

      return {
        lanyType,
        sampleType: 'highest', // zero | few | highest
        languagesType: 'all', // all | cn | en
        abilityType: 'overall_average', // overall_average | arithmetics | math_world_problems
        averageColumn,
        datasetColumn,
        tableData: highestData,
        sortConfig: {
          defaultSort: {
            field: 'overall_average',
            order: 'desc'
          },
          showIcon: false,
          sortMethod: this.customSortMethod
        }
      }
    },
    methods: {
      sampleTypeChange(type) {
        this.sampleType = type;
        this.$refs.Table.clearSort();
        if (type === 'highest') {
          this.tableData = highestData;
        }
        if (type === 'zero') {
          this.tableData = zeroShotData;
        }
        if (type === 'few') {
          this.tableData = fewShotData;
        }
        this.resetColumn();
      },
      languagesTypeChange(type) {
        this.languagesType = type;
        this.resetColumn();
      },
      abilityTypeChange(type) {
        this.abilityType = type;
        this.resetColumn();
      },

      resetAverageColumn() {
        const overall_average_list = [
          'overall_average',
          'overall_average_cn',
          'overall_average_en',
          'arithmetics_overall_average',
          'arithmetics_overall_average_cn',
          'arithmetics_overall_average_en',
          'math_world_problems_overall_average',
          'math_world_problems_overall_average_cn',
          'math_world_problems_overall_average_en'
        ];

        const weighted_average_list = [
          'weighted_average',
          'weighted_average_cn',
          'weighted_average_en',
          'arithmetics_weighted_average',
          'arithmetics_weighted_average_cn',
          'arithmetics_weighted_average_en',
          'math_world_problems_weighted_average',
          'math_world_problems_weighted_average_cn',
          'math_world_problems_weighted_average_en'
        ];

        const cumulative_ranking_list = [
          'cumulative_ranking',
          'cumulative_ranking_cn',
          'cumulative_ranking_en',
          'arithmetics_cumulative_ranking',
          'arithmetics_cumulative_ranking_cn',
          'arithmetics_cumulative_ranking_en',
          'math_world_problems_cumulative_ranking',
          'math_world_problems_cumulative_ranking_cn',
          'math_world_problems_cumulative_ranking_en'
        ];

        const fieldKeys = ['overall_average', 'weighted_average', 'cumulative_ranking'];

        [overall_average_list, weighted_average_list, cumulative_ranking_list].forEach((listItem, listIndex) => {
          const prefix = `${this.abilityType === 'overall_average' ? '' : this.abilityType + '_'}${fieldKeys[listIndex]}`;
          const itemName = (this.languagesType === 'cn' || this.languagesType === 'en') ? `${prefix}_${this.languagesType}` : prefix;
          listItem.forEach((item) => {
            if (itemName === item) {
              this.$refs.Table.showColumn(this.$refs.Table.getColumnByField(item));
              this.$refs.Table.sort(`${this.abilityType !== 'overall_average' ? this.abilityType + '_' : '' }overall_average${this.languagesType !== 'all' ? '_' + this.languagesType : ''}`, 'desc');
            } else {
              this.$refs.Table.hideColumn(this.$refs.Table.getColumnByField(item));
            }
          });
        });
      },

      resetColumn() {
        if (this.languagesType === 'all') {
          datasetColumn.forEach(item => {
            if (this.abilityType === 'overall_average') {
              this.$refs.Table.showColumn(this.$refs.Table.getColumnByField(item.field));
            }
            if (this.abilityType === 'arithmetics' || this.abilityType === 'math_world_problems') {
              if (filterConfig[this.abilityType].includes(item.field)) {
                this.$refs.Table.showColumn(this.$refs.Table.getColumnByField(item.field));
              } else {
                this.$refs.Table.hideColumn(this.$refs.Table.getColumnByField(item.field));
              }
            }
            this.resetAverageColumn();
          });
        }
        if (this.languagesType === 'cn' || this.languagesType === 'en') {
          datasetColumn.forEach(item => {
            if (this.abilityType === 'overall_average') {
              if (filterConfig[this.languagesType].includes(item.field)) {
                this.$refs.Table.showColumn(this.$refs.Table.getColumnByField(item.field));
              } else {
                this.$refs.Table.hideColumn(this.$refs.Table.getColumnByField(item.field));
              }
            }
            if (this.abilityType === 'arithmetics' || this.abilityType === 'math_world_problems') {
              if (filterConfig[this.languagesType].includes(item.field) && filterConfig[this.abilityType].includes(item.field)) {
                this.$refs.Table.showColumn(this.$refs.Table.getColumnByField(item.field));
              } else {
                this.$refs.Table.hideColumn(this.$refs.Table.getColumnByField(item.field));
              }
            }
            this.resetAverageColumn();
          });
        }
      },

      headerCellClickEvent ({ column }) {
        if (column.sortable) {
          if (column.order === 'desc') {
            this.$refs.Table.sort(column.property, 'asc')
          } else {
            this.$refs.Table.sort(column.property, 'desc')
          }
        }
      },

      customSortMethod({ data, sortList }) {
        return data.sort((a, b) => {
          const sortField = sortList[0].field;
          const sortType = sortList[0].order;
          const sortFieldData = isNaN(Number(a[sortField])) ? 0 : Number(a[sortField]);
          const sortFieldData2 = isNaN(Number(b[sortField])) ? 0 : Number(b[sortField]);
          // 累加排位, 数字越小越靠前
          if (sortField.includes('cumulative_ranking')) {
            if (sortType === 'desc') {
              return sortFieldData - sortFieldData2;
            }
            if (sortType === 'asc') {
              return sortFieldData2 - sortFieldData;
            }
          } else {
            if (sortType === 'asc') {
              return sortFieldData - sortFieldData2;
            }
            if (sortType === 'desc') {
              return sortFieldData2 - sortFieldData;
            }
          }
          
        })
      },

      formatterNum({ cellValue }) {
        return isNaN(Number(cellValue)) ? 'N/A' : Number(cellValue).toFixed(2);
      },

      formatterRank({ cellValue }) {
        return isNaN(Number(cellValue)) ? 'N/A' : Number(cellValue);
      }
    }
  })
  app.use(VXETable)
  app.config.compilerOptions.delimiters = ['${', '}']
  app.mount('#leaderboardApp')

})();
