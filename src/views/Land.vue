<template>
  <div id="home">
     <p id="head">
       重点关注学生考试成绩统计图
     </p>
     <div id="establish_copy">
         <ul id="establish">
       <li>
           <span>切换班级</span>
           <span class="active">1703C</span>
           <span>1703E</span>
           <span>1703E</span>
           <span>创建班级+</span>
       </li>
       <li>
           <span>
               <em></em>
           </span>
           <span>柱形图/线图</span>
       </li>
     </ul>
     </div>
    
     <ol id="status">
         <li>添加学生+：</li>
         <li><input type="text" placeholder="输入姓名"/></li>
         <li><input type="text" placeholder="末位次数"/></li>
         <li><input type="text" placeholder="帮扶对象"/></li>
         <li>添加</li>
     </ol>
     <div id="line" >
        <div id="barGraph" style="height: 100%;"></div>
        <ul id="cont">
          <li>
              <span @click="add('add')">添加成绩+</span>
              <span  @click="add('alysis')">添加分析和解决方案</span>
          </li>
          <li>查看和编辑所有的成绩</li>
        </ul>
       <AchiEvement :bool="bool"/>
     </div>
  </div>
</template>
<script>
import AchiEvement from "../components/AchiEvement";
let echarts = require("echarts/lib/echarts");
// 引入柱状图
require("echarts/lib/chart/bar");
// 引入柱状图
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  components: {
    AchiEvement
  },
  mounted() {
    this.drawBar();
  },
  methods: {
    data() {
      return {
          bool: false,
          conpye:'',
          list:[]
      };
    },
    drawBar() {
      // 基于dom，初始化echarts实例
      let barGraph = echarts.init(document.getElementById("barGraph"));
      // 绘制图表

      barGraph.setOption({
        title: {
          color: "red",
          text: "××同学的日周考成绩统计图",
          left: "left"
        },
        tooltip: {
          trigger: "axis",
          formatter: "{a} <br/>{b} : {c}"
        },
        legend: {
          left: "center",
          data: ["技能", "理论"],
          bottom: 0
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          name: "x",
          splitLine: { show: false },
          data: ["08-01", "08-02", "08-03", "08-04", "08-05", "08-06", "08-07"]
        },
        grid: {
          left: "1%",
          right: "2%",
          bottom: "8%",
          containLabel: true
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}"
          }
        },
        series: [
          {
            name: "技能",
            type: "line",
            color: "#c1232b",
            data: [40, 90, 87, 76, 55, 84, 97],
            markPoint: {
              data: [
                { type: "max", name: "技能" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "理论",
            type: "line",
            data: [67, 20, 40, 60, 80, 100, 76],
            color: "#b5c334",
            markPoint: {
              data: [{ name: "周最低", value: 100, xAxis: 1, yAxis: 20 }]
            },
            markLine: {
              data: [
                { type: "average", name: "平均值" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max"
                  },
                  {
                    symbol: "circle",
                    label: {
                      normal: {
                        position: "start",
                        formatter: "最大值"
                      }
                    },
                    type: "max",
                    name: "最高点"
                  }
                ]
              ]
            }
          }
        ]
      });
    },
    add(type) {
      this.bool = !this.bool;
      this.conpye=type
      console.log(this.conpye,'123')
      // this.list.push(this.bool, this.conpye)S
    //  this.$emit('bool',this.bool,this.conpye)
      // console.log(this.bool,this.conpye, "90");
     
    }
  }
};
</script>
<style lang="scss">
@media screen and (min-width: 740px) {
   body{
    width:1600px;
    height:768px
  }
  #app {
    width: 100%;
    height: 100%;
  }
  #home {
    width: 100%;
    overflow-x: auto;
  }
  #head {
    background: #0076ff;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
  }
  #establish_copy{
    width:100%;
    
  }
  #establish {
    width: 90%;
    pointer-events: auto;
    height: 86px;
    border: 1px solid #bbbbbb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px auto;
    li:first-of-type {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 26px;
      > span {
        display: inline-block;
        width: 65px;
        height: 30px;
        border: 1px solid #bbbbbb;
        font-size: 10px;
        color: #1989fa;
        text-align: center;
        line-height: 30px;
        margin: 15px 20px 15px 0;
        border-radius: 4px;
        background: #e6f1fc;
      }
      .active {
        background: #1890ff;
        color: #fff;
      }
      span:first-of-type,
      span:last-of-type {
        border: 0;
        margin-right: 0;
        background: 0;
        color: #101010;
      }
    }
    li:last-of-type {
      padding-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      > span:first-of-type {
        display: inline-block;
        width: 36px;
        height: 15px;
        border-radius: 10px;
        background: rgba(86, 119, 252, 0.5);
        position: relative;
        em {
          position: absolute;
          left: 15px;
          top: -4px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #5677fc;
        }
      }
      span:last-of-type {
        font-size: 11px;
        margin-left: 5px;
      }
    }
  }
  #status {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      input {
        width: 120px;
        font-size: 11px;
        text-align: center;
        color: #101010;
        border: 0;
        background: 0;
        border: 1px solid #dcdfe6;
        height: 20px;
        line-height: 20px;
      }
      font-size: 11px;
    }
    li:last-of-type {
      display: inline-block;
      width: 65px;
      height: 20px;
      border: 1px solid #bbbbbb;
      font-size: 10px;
      color: #1989fa;
      text-align: center;
      line-height: 19px;
      border-radius: 2px;
      background: #e6f1fc;
    }
  }
  #line {
    width: 90%;
    height: 400px;
    border: 1px solid #333;
    margin: 19px auto;
    position: relative;
    #cont {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      li:first-of-type {
        span {
          display: inline-block;
          padding: 0 10px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          border: 1px solid #bbbbbb;
          font-size: 11px;
          color: #101010;
        }
        span:last-of-type {
          margin-left: 10px;
        }
      }
      li:last-of-type {
          padding: 0 10px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          border: 1px solid #bbbbbb;
          font-size: 11px;
          color: #101010;
      }
    }
  }
}
@media screen and (max-width: 739px) {
  body{
    width:1600px;
    height:768px
  }
  html,#app {
    width: 100%;
    height: 100%;
    overflow-x: auto;
    pointer-events: auto;
  }
  #home {
    width: 100%;
  }
  #head {
    background: #0076ff;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
  }
  #establish {
    width: 90%;
    height: 86px;
    border: 1px solid #bbbbbb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px auto;
    li:first-of-type {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 26px;
      > span {
        display: inline-block;
        width: 65px;
        height: 30px;
        border: 1px solid #bbbbbb;
        font-size: 10px;
        color: #1989fa;
        text-align: center;
        line-height: 30px;
        margin: 15px 20px 15px 0;
        border-radius: 4px;
        background: #e6f1fc;
      }
      .active {
        background: #1890ff;
        color: #fff;
      }
      span:first-of-type,
      span:last-of-type {
        border: 0;
        margin-right: 0;
        background: 0;
        color: #101010;
      }
    }
    li:last-of-type {
      padding-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      > span:first-of-type {
        display: inline-block;
        width: 36px;
        height: 15px;
        border-radius: 10px;
        background: rgba(86, 119, 252, 0.5);
        position: relative;
        em {
          position: absolute;
          left: 15px;
          top: -4px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #5677fc;
        }
      }
      span:last-of-type {
        font-size: 11px;
        margin-left: 5px;
      }
    }
  }
  #status {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      input {
        width: 120px;
        font-size: 11px;
        text-align: center;
        color: #101010;
        border: 0;
        background: 0;
        border: 1px solid #dcdfe6;
        height: 20px;
        line-height: 20px;
      }
      font-size: 11px;
    }
    li:last-of-type {
      display: inline-block;
      width: 65px;
      height: 20px;
      border: 1px solid #bbbbbb;
      font-size: 10px;
      color: #1989fa;
      text-align: center;
      line-height: 19px;
      border-radius: 2px;
      background: #e6f1fc;
    }
  }
  #line {
    width: 90%;
    height: 400px;
    border: 1px solid #333;
    margin: 19px auto;
    position: relative;
    #cont {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      li:first-of-type {
        span {
          display: inline-block;
          padding: 0 10px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          border: 1px solid #bbbbbb;
          font-size: 11px;
          color: #101010;
        }
        span:last-of-type {
          margin-left: 10px;
        }
      }
      li:last-of-type {
        font-size: 11px;
      }
    }
  }
}
</style>
