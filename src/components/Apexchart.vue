<template>
  <div id="chart" />
</template>

<script>
import ApexCharts from "apexcharts";

export default {
  data: () => ({
    //
  }),
  methods: {
    //
  },
  mounted() {
    var options = {
      series: [90, 80, 70, 60, 50],
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "20%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
    //   https://coolors.co/e0bad7-61d095-48bf84-439775-2a4747
      colors: ["#2A4747", "#439775", "#48BF84", "#61D095", "#e0bad7"], 
      labels: ["Vue", "Python", "SQL", "REST APIs", "AWS"],
      legend: {
        show: true,
        floating: true,
        fontSize: "13px",
        position: "left",
        offsetX: 200,
        offsetY: 5,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter: function(seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          vertical: 2,
        },
      },
      responsive: [
        {
          breakpoint: 1910,
          options: {
            legend: {
              show: false,
              fontSize: "10px",
            },
            chart: {
              height: 300,
            },
            plotOptions: {
              radialBar: {
                endAngle: 360,
                hollow: {
                  margin: 5,
                  size: "40%",
                },
                dataLabels: {
                  name: {
                    show: true,
                  },
                },
              },
            },
          },
        },
      ],
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  },
};
</script>

<style scoped>
.chart {
  width: 100%;
}
</style>
