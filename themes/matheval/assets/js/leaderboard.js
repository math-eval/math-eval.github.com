import bestData from "data/best.json";
import zeroShotData from "data/zero.json";
import fewShotData from "data/few.json";

(function () {
  "use strict";

  const leaderboardApp = document.getElementById("leaderboardApp");
  if (!leaderboardApp) return;

  const filterConfig = {
    // 中文数据集
    cn: ['hmwp', 'scq_ch', 'GAOKAO-BENCH', 'cmmlu', 'math23k', 'ape210k', 'BBH', 'AGIEval'],
    // 英文数据集
    en: ['GSM8K', 'math', 'mmlu', 'svamp', 'math401', 'draw', 'dolphin1878', 'scq_en', 'mawps', 'asdiv-a', 'MathQA', 'BBH'],
    // 应用题
    math_world_problems: ['GSM8K', 'math', 'mmlu', 'svamp', 'draw', 'hmwp', 'dolphin1878', 'scq_en', 'scq_ch', 'mawps', 'GAOKAO-BENCH', 'asdiv-a', 'cmmlu', 'MathQA', 'math23k', 'ape210k', 'AGIEval'],
    // 算术
    arithmetics: ['math401', 'BBH'],
  }

  const datasetColumn = [
    { field: 'scq_en', title: 'TAL-SCQ5K-EN', width: 140, align: 'center', sortable: true, visible: true },
    { field: 'scq_ch', title: 'TAL-SCQ5K-CN', width: 140, align: 'center', sortable: true, visible: true },
    { field: 'mawps', title: 'MAWPS', width: 80, align: 'center', sortable: true, visible: true },
    { field: 'GAOKAO-BENCH', title: 'GAOKAO(Math)', width: 140, align: 'center', sortable: true, visible: true },
    { field: 'asdiv-a', title: 'ASDiv-A', width: 80, align: 'center', sortable: true, visible: true },
    { field: 'cmmlu', title: 'CMMLU(Math)', width: 130, align: 'center', sortable: true, visible: true },
    { field: 'math', title: 'MATH', width: 80, align: 'center', sortable: true, visible: true },
    { field: 'GSM8K', title: 'GSM8K', width: 80, align: 'center', sortable: true, visible: true },
    { field: 'mmlu', title: 'MMLU(Math)', width: 140, align: 'center', sortable: true, visible: true },
    { field: 'svamp', title: 'SVAMP', width: 80, align: 'center', sortable: true, visible: true },
    { field: 'math401', title: 'math401-llm', width: 120, align: 'center', sortable: true, visible: true },
    { field: 'draw', title: 'DRAW1K', width: 100, align: 'center', sortable: true, visible: true },
    { field: 'hmwp', title: 'HMWP', width: 80, align: 'center', sortable: true, visible: true },
    { field: 'dolphin1878', title: 'Dolphin1878', width: 110, align: 'center', sortable: true, visible: true },
    { field: 'MathQA', title: 'MathQA', width: 90, align: 'center', sortable: true, visible: true },
    { field: 'math23k', title: 'Math23K', width: 90, align: 'center', sortable: true, visible: true },
    { field: 'ape210k', title: 'Ape210K', width: 90, align: 'center', sortable: true, visible: true },
    { field: 'BBH', title: 'Big-Bench-Hard(Math)', width: 180, align: 'center', sortable: true, visible: true },
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

      const abilityAverageName = lanyType === 'zh' ? '能力平均' : 'Ability average';
      const overallAverageName = lanyType === 'zh' ? '整体平均' : 'Overall average';
      const weightedAverageName = lanyType === 'zh' ? '加权平均' : 'Weighted average';
      const cumulativeRankingName = lanyType === 'zh' ? '累加排位' : 'Cumulative ranking';
      const abilityAverageTips = {
        content: lanyType === 'zh' ? '分别计算模型在应用题和算数类型各个数据集上的平均准确率，然后取两者的平均值作为最终能力平均准确率。该数值越大代表模型性能越好。' : 'Calculate the average accuracy of the model on various datasets of application problems and arithmetic types respectively, and then take the average of the two as the final average accuracy of ability. The larger this value, the better the performance of the model.'
      }
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
        // 能力平均
        { field: 'overall_weighted', title: abilityAverageName, 'title-help': abilityAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: true },
        { field: 'overall_weighted_cn', title: abilityAverageName, 'title-help': abilityAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'overall_weighted_en', title: abilityAverageName, 'title-help': abilityAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'math_world_problems_overall_weighted', title: abilityAverageName, 'title-help': abilityAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'math_world_problems_overall_weighted_cn', title: abilityAverageName, 'title-help': abilityAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'math_world_problems_overall_weighted_en', title: abilityAverageName, 'title-help': abilityAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'arithmetics_overall_weighted', title: abilityAverageName, 'title-help': abilityAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'arithmetics_overall_weighted_cn', title: abilityAverageName, 'title-help': abilityAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },
        { field: 'arithmetics_overall_weighted_en', title: abilityAverageName, 'title-help': abilityAverageTips, width: lanyType === 'zh' ? 120 : 160, formatter: this.formatterNum, align: 'center', sortable: true, visible: false },

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
        tableData: bestData,
        sortConfig: {
          defaultSort: {
            field: 'overall_weighted',
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
          this.tableData = bestData;
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
        const overall_weighted_list = [
          'overall_weighted',
          'overall_weighted_cn',
          'overall_weighted_en',
          'arithmetics_overall_weighted',
          'arithmetics_overall_weighted_cn',
          'arithmetics_overall_weighted_en',
          'math_world_problems_overall_weighted',
          'math_world_problems_overall_weighted_cn',
          'math_world_problems_overall_weighted_en'
        ]

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

        const fieldKeys = ['overall_weighted', 'overall_average', 'weighted_average', 'cumulative_ranking'];

        [overall_weighted_list, overall_average_list, weighted_average_list, cumulative_ranking_list].forEach((listItem, listIndex) => {
          const prefix = `${this.abilityType === 'overall_average' ? '' : this.abilityType + '_'}${fieldKeys[listIndex]}`;
          const itemName = (this.languagesType === 'cn' || this.languagesType === 'en') ? `${prefix}_${this.languagesType}` : prefix;
          listItem.forEach((item) => {
            if (itemName === item) {
              this.$refs.Table.showColumn(this.$refs.Table.getColumnByField(item));
              this.$refs.Table.sort(`${this.abilityType !== 'overall_average' ? this.abilityType + '_' : '' }overall_weighted${this.languagesType !== 'all' ? '_' + this.languagesType : ''}`, 'desc');
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
        return isNaN(Number(cellValue)) ? 'N/A' : Number(cellValue).toFixed(4);
      },

      formatterRank({ cellValue }) {
        return isNaN(Number(cellValue)) ? 'N/A' : Number(cellValue);
      },

      formatterName({ cellValue }) {
        const names = {
          'wenxin': '文心一言',
          'GPT4': 'GPT-4',
          'GPT35': 'GPT-3.5',
          'mathgpt': 'MathGPT',
          'spark': '讯飞星火',
          'internlm-chat-20B': 'Internlm-chat-20B',
          'chatglm2-6B': 'Chatglm2-6B',
          'moss-moon-003-base': 'Moss-moon-003-base',
          'llemma_7B': 'Llemma-7B',
          'llemma_34B': 'Llemma-34B'
        }
        return names[cellValue] || cellValue;
      }
    }
  })
  app.use(VXETable)
  app.config.compilerOptions.delimiters = ['${', '}']
  app.mount('#leaderboardApp')

})();
