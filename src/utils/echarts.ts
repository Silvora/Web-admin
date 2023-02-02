import * as echarts from "echarts"
export function InitCharts(el:any,data:any){
    var myChart = echarts.init(
        el
    );

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(data);
        window.addEventListener("resize",()=>{
            myChart.resize() 
        })
  
}

