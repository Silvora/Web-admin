let radar = {
    legend: {
      bottom: 0,
      data: ['访问', '购买'],
    },
    tooltip: {},
    radar: {
      radius: '60%',
      splitNumber: 8,
      indicator: [
        {
          name: '电脑',
        },
        {
          name: '充电器',
        },
        {
          name: '耳机',
        },
        {
          name: '手机',
        },
        {
          name: 'Ipad',
        },
        {
          name: '耳机',
        },
      ],
    },
    series: [
      {
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
          shadowBlur: 0,
          shadowColor: 'rgba(0,0,0,.2)',
          shadowOffsetX: 0,
          shadowOffsetY: 10,
          opacity: 1,
        },
        data: [
          {
            value: [90, 50, 86, 40, 50, 20],
            name: '访问',
            itemStyle: {
              color: '#b6a2de',
            },
          },
          {
            value: [70, 75, 70, 76, 20, 85],
            name: '购买',
            itemStyle: {
              color: '#5ab1ef',
            },
          },
        ],
      },
    ],
  }

let DoughnutPie={
    tooltip: {
      trigger: 'item',
    },
    legend: {
      bottom: '1%',
      left: 'center',
    },
    series: [
      {
        color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '12',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: '搜索引擎' },
          { value: 735, name: '直接访问' },
          { value: 580, name: '邮件营销' },
          { value: 484, name: '联盟广告' },
        ],
        animationType: 'scale',
        animationEasing: 'exponentialInOut',
        animationDelay: function () {
          return Math.random() * 100;
        },
      },
    ],
  }

let NightingalePie={
    tooltip: {
      trigger: 'item',
    },

    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '80%',
        center: ['50%', '50%'],
        color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
        data: [
          { value: 500, name: '电子产品' },
          { value: 310, name: '服装' },
          { value: 274, name: '化妆品' },
          { value: 400, name: '家居' },
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: 'radius',
        animationType: 'scale',
        animationEasing: 'exponentialInOut',
        animationDelay: function () {
          return Math.random() * 400;
        },
      },
    ],
  }




export {radar,DoughnutPie,NightingalePie}
