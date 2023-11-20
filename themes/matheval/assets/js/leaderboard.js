import bestJSON from "data/best.json";
import zeroShotJSON from "data/zero.json";
import fewShotJSON from "data/few.json";
import testCountData from "data/testCount.json";

(function () {
  "use strict";

  function initTableData(data) {
    return data.map((item) => {
      return {
        ...item,
        'ability_average': 0,
        'overall_average': 0,
        'weighted_average': 0,
        'cumulative_ranking': 0,
      }
    })
  }

  const bestData = initTableData(bestJSON);
  const zeroShotData = initTableData(zeroShotJSON);
  const fewShotData = initTableData(fewShotJSON);

  const leaderboardApp = document.getElementById("leaderboardApp");
  if (!leaderboardApp) return;

  const langType = /\/en/.test(new URL(window.location.href).pathname) ? 'en' : 'zh';

  const abilityAverageName = langType === 'zh' ? '能力平均' : 'Ability average';
  const overallAverageName = langType === 'zh' ? '整体平均' : 'Overall average';
  const weightedAverageName = langType === 'zh' ? '加权平均' : 'Weighted average';
  const cumulativeRankingName = langType === 'zh' ? '累加排位' : 'Cumulative ranking';
  const abilityAverageTips = {
    content: langType === 'zh' ? '分别计算模型在应用题和算数类型各个数据集上的平均准确率，然后取两者的平均值作为最终能力平均准确率。该数值越大代表模型性能越好。' : 'Calculate the average accuracy of the model on various datasets of application problems and arithmetic types respectively, and then take the average of the two as the final average accuracy of ability. The larger this value, the better the performance of the model.'
  }
  const overallAverageTips = {
    content: langType === 'zh' ? '将该模型在n个数据集上的准确率直接算均值。该数值越大代表模型性能越好。' : 'Calculate the average accuracy of the model on n datasets directly. A higher value indicates better model performance.'
  }
  const weightedAverageTips = {
    content: langType === 'zh' ? '用该模型在n个数据集上所有做对题目数除以所有数据集的总题目数。该数值越大代表模型性能越好。' : 'The number of correct questions of the model on n datasets is divided by the total number of questions in all datasets. The larger this value, the better the performance of the model.'
  }
  const cumulativeRankingTips = {
    content: langType === 'zh' ? '将该模型在n个数据集上的准确率排名的排序名次累加。该数值越小代表模型性能越好。' : "Add up the ranking positions of the model's accuracy on n datasets. A lower value indicates better model performance."
  }
  const formatterNum = function ({ cellValue }) {
    return isNaN(Number(cellValue)) ? 'N/A' : Number(cellValue).toFixed(4);
  }
  const formatterRank = function ({ cellValue }) {
    return isNaN(Number(cellValue)) ? 'N/A' : Number(cellValue);
  }
  const averageColumn = [
    { field: 'ability_average', title: abilityAverageName, 'title-help': abilityAverageTips, width: langType === 'zh' ? 120 : 160, formatter: formatterNum, align: 'center', sortable: true, visible: true },
    { field: 'overall_average', title: overallAverageName, 'title-help': overallAverageTips, width: langType === 'zh' ? 120 : 160, formatter: formatterNum, align: 'center', sortable: true, visible: true },
    { field: 'weighted_average', title: weightedAverageName, 'title-help': weightedAverageTips, width: langType === 'zh' ? 120 : 180, formatter: formatterNum, align: 'center', sortable: true, visible: true },
    { field: 'cumulative_ranking', title: cumulativeRankingName, 'title-help': cumulativeRankingTips, width: langType === 'zh' ? 120 : 180, formatter: formatterRank, align: 'center', sortable: true, visible: true },
  ]
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
    { field: 'arith_std', title: 'Arith3K', width: 90, align: 'center', sortable: true, visible: true },
  ]
  const filterConfig = {
    // 中文数据集
    cn: ['hmwp', 'scq_ch', 'GAOKAO-BENCH', 'cmmlu', 'math23k', 'ape210k', 'BBH', 'AGIEval', 'arith_std', 'math401'],
    // 英文数据集
    en: ['GSM8K', 'math', 'mmlu', 'svamp', 'math401', 'draw', 'dolphin1878', 'scq_en', 'mawps', 'asdiv-a', 'MathQA', 'BBH', 'arith_std'],
    // 应用题
    math_world_problems: ['GSM8K', 'math', 'mmlu', 'svamp', 'draw', 'hmwp', 'dolphin1878', 'scq_en', 'scq_ch', 'mawps', 'GAOKAO-BENCH', 'asdiv-a', 'cmmlu', 'MathQA', 'math23k', 'ape210k', 'AGIEval'],
    // 算术
    arithmetics: ['math401', 'BBH', 'arith_std'],
    // 小学
    primary: [],
    // 初中
    middle: [],
    // 高中
    high: [],
    // 大学
    college: []
  }

  const { createApp } = Vue
  const app = createApp({
    data() {
      return {
        fixedColumn: document.body.offsetWidth > 640 ? 'left' : '',
        sampleType: 'best', // best | zero | few
        languagesType: 'all', // all | cn | en
        abilityType: 'all', // all | arithmetics | math_world_problems
        gradeType: 'all', // all | primary | middle | high | college
        quickViewType: '', // 数据集速览
        averageColumn,
        datasetColumn,
        tableData: bestData,
        sortConfig: {
          defaultSort: {
            field: 'ability_average',
            order: 'desc'
          },
          showIcon: false,
          sortMethod: this.customSortMethod
        },
        loading: false,
        columns: []
      }
    },
    computed: {
      datasetList() {
        return this.datasetColumn.map(item => item.field)
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.columns = this.$refs.Table.getColumns();
        this.updateTableData();
      })
    },
    methods: {
      sampleTypeChange(type) {
        this.sampleType = type;
        if (type === 'best') {
          this.tableData = bestData;
        }
        if (type === 'zero') {
          this.tableData = zeroShotData;
        }
        if (type === 'few') {
          this.tableData = fewShotData;
        }
        this.delayResetColumn()
      },
      languagesTypeChange(type) {
        if (this.quickViewType) {
          return;
        }
        this.languagesType = type;
        this.delayResetColumn()
      },
      abilityTypeChange(type) {
        if (this.quickViewType) {
          return;
        }
        this.abilityType = type;
        this.delayResetColumn()
      },
      gradeTypeChange(type) {
        if (this.quickViewType) {
          return;
        }
        this.gradeType = type;
        this.delayResetColumn();
      },
      quickViewTypeChange(type) {
        if (type !== this.quickViewType) {
          this.languagesType = 'all';
          this.abilityType = 'all';
          this.gradeType = 'all';
          this.quickViewType = type;
        } else {
          this.quickViewType = '';
        }
        setTimeout(() => {
          this.resetQuickColumn();
        }, 0)
      },
      visibleColumn(field, visible) {
        this.columns.filter(column => column.field === field)[0].visible = visible;
      },
      delayResetColumn() {
        setTimeout(() => {
          if (this.quickViewType) {
            this.resetQuickColumn();
          } else {
            this.resetColumn()
          }
        }, 0)
      },
      arrayMerge(arr1, arr2) {
        return Array.from(new Set([...arr1, ...arr2]));
      },
      resetQuickColumn() {
        // 选择数据集速览, 只显示当前选择数据集的列
        if (this.quickViewType) {
          // 不显示能力平均, 整体平均, 加权平均, 累加排位
          this.averageColumn.forEach(item => {
            this.visibleColumn(item.field, false)
          })
          this.datasetColumn.forEach(item => {
            if (item.field === this.quickViewType) {
              this.visibleColumn(item.field, true)
            } else {
              this.visibleColumn(item.field, false)
            }
          })
          this.$refs.Table.refreshColumn();
          this.$refs.Table.reloadData(this.tableData);
          this.$refs.Table.sort(this.quickViewType, 'desc');
        } else {
          this.averageColumn.forEach(item => {
            this.visibleColumn(item.field, true)
          })
          this.$refs.Table.refreshColumn();
          this.resetColumn();
        }
      },
      resetColumn() {
        const languagesConfig = this.languagesType === 'all' ? this.arrayMerge(filterConfig['cn'], filterConfig['en']) : filterConfig[this.languagesType]
        const abilityConfig = this.abilityType === 'all' ? this.arrayMerge(filterConfig['arithmetics'], filterConfig['math_world_problems']) : filterConfig[this.abilityType]
        const gradeConfig = this.gradeType === 'all' ? this.arrayMerge(filterConfig['primary'], filterConfig['middle'], filterConfig['high'], filterConfig['college']) : filterConfig[this.gradeType]
        datasetColumn.forEach(item => {
          if (languagesConfig.includes(item.field) && abilityConfig.includes(item.field)) {
            this.visibleColumn(item.field, true)
          } else {
            this.visibleColumn(item.field, false)
          }
        })
        this.$refs.Table.refreshColumn();
        this.updateTableData();
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

      formatterNum: formatterNum,

      formatterRank: formatterRank,

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
      },

      // 更新能力平均值
      // 在单应用题和算数的情况下，都是各自的整体平均
      // 在其它情况下，是选定条件的(算数整体平均+应用题整体平均)/2
      updateAbilityAverage() {
        const columns = this.$refs.Table.getColumns();
        const datasetColumns = columns.filter(item => this.datasetList.includes(item.field));
        // 能力维度:全部
        if (this.abilityType === 'all') {
          let arithmeticsAverage = 0;
          let mathWorldProblemsAverage = 0;
          const arithmeticsColumns = columns.filter(item => filterConfig.arithmetics.includes(item.field));
          const mathWorldProblemsColumns = columns.filter(item => filterConfig.math_world_problems.includes(item.field));
          // console.log('updateAbilityAverage', arithmeticsColumns, mathWorldProblemsColumns)
          this.tableData.forEach((item) => {
            let arithmeticsCount = 0; 
            let mathWorldProblemsCount = 0;
            arithmeticsColumns.forEach((column) => {
              arithmeticsCount += item[column.field] * 10000
            })
            mathWorldProblemsColumns.forEach((column) => {
              mathWorldProblemsCount += item[column.field] * 10000
            })
            arithmeticsAverage = (Math.round(arithmeticsCount / arithmeticsColumns.length) / 10000).toFixed(4);
            mathWorldProblemsAverage = (Math.round(mathWorldProblemsCount / mathWorldProblemsColumns.length) / 10000).toFixed(4);
            item.ability_average = ((Number(arithmeticsAverage) + Number(mathWorldProblemsAverage)) / 2).toFixed(4);
          })
        } else {
          this.tableData.forEach((item) => {
            let count = 0;
            datasetColumns.forEach((column) => {
              count += item[column.field] * 10000
            })
            item.ability_average = (Math.round(count / datasetColumns.length) / 10000).toFixed(4);
          })
        }
      },

      // 更新整体平均值
      // 选定数据集中的平均值
      updateOverallAverage() {
        const columns = this.$refs.Table.getColumns();
        const datasetColumns = columns.filter(item => this.datasetList.includes(item.field));
        this.tableData.forEach((item) => {
          let count = 0;
          datasetColumns.forEach((column) => {
            count += item[column.field] * 10000
          })
          // console.log(item.name, count / datasetColumns.length, Math.round(count / datasetColumns.length), (Math.round(count / datasetColumns.length) / 10000))
          item.overall_average = (Math.round(count / datasetColumns.length) / 10000).toFixed(4);
        })
      },

      // 更新加权平均值
      // 选定数据集中的acc*数量/(数量和)
      updateWeightedAverage() {
        const columns = this.$refs.Table.getColumns();
        const datasetColumns = columns.filter(item => this.datasetList.includes(item.field));
        this.tableData.forEach((item) => {
          let weightedAverage = 0;
          let averageCount = 0;
          let testCount = 0;
          datasetColumns.forEach((column) => {
            averageCount += item[column.field] * testCountData[column.field];
            testCount += testCountData[column.field];
          })
          weightedAverage = averageCount / testCount;
          item.weighted_average = weightedAverage.toFixed(4);
        })
      },

      // 更新累加排位
      // 选定数据集，在所有模型内排序的位数，累加的和
      updateCumulativeRanking() {
        const columns = this.$refs.Table.getColumns();
        const datasetColumns = columns.filter(item => this.datasetList.includes(item.field));
        // 遍历所有模型
        this.tableData.forEach((item) => {
          // 当前模型的累加排位
          let count = 0;
          // 遍历所有数据集, 在所有模型中获取当前数据集的排位
          datasetColumns.forEach((column) => {
            // 将tableData数据按column数据集的值从大到小排序, 返回数组对象格式
            const tableDataRanking = [...this.tableData].sort((a, b) => {
              return b[column.field] - a[column.field];
            })
            // tableDataRanking数组中有相同值的排名, 将这个数组转换为对象, key为模型名称, value为排名, 相同的排名并列
            const tableDataRankingMap = new Map();
            tableDataRanking.forEach((tableDataItem) => {
              if (tableDataRankingMap.has(tableDataItem[column.field])) {
                tableDataRankingMap.get(tableDataItem[column.field]).push(tableDataItem.name);
              } else {
                tableDataRankingMap.set(tableDataItem[column.field], [tableDataItem.name]);
              }
            })
            // 将tableDataRankingMap转换为map对象, key为value数组的模型名称, value为key的排序索引
            const tableDataRankingMapIndex = new Map();
            let indexCache = 1;
            tableDataRankingMap.forEach((tableDataRankingMapItem) => {
              tableDataRankingMapItem.forEach((tableDataRankingMapItemItem) => {
                tableDataRankingMapIndex.set(tableDataRankingMapItemItem, indexCache);
              })
              indexCache++;
            })
            
            count += tableDataRankingMapIndex.get(item.name);
          })
          item.cumulative_ranking = count;
        })
      },

      updateTableData() {
        this.updateAbilityAverage();
        this.updateOverallAverage();
        this.updateWeightedAverage();
        this.updateCumulativeRanking();
        this.$refs.Table.reloadData(this.tableData);
        this.$refs.Table.sort('ability_average', 'desc');
      },
    }
  })
  app.use(VXETable)
  app.config.compilerOptions.delimiters = ['${', '}']
  app.mount('#leaderboardApp')

})();
