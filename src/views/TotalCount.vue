<template>
  <div id="total-count"></div>
</template>

<script>
import ApexCharts from 'apexcharts';
import data from "@/inc/data";

export default {
  name: 'total-count',
  data() {
    return {
      options: {
        series: [{
          name: 'structures',
          data: ["0001",
            "5432",
            "4343",
            "3453",
            "2344",
            "2336",
            "3355",
            "3552",
            "2356",
            "4560",
            "1241",
            "4352",
            "5623",
            "2364",
            "6235",
            "7416",
            "7317",
            "3418",
            "2369",
            "6520",
            "6431",
            "3622",
            "2463",
            "2624",
            "2625",
            "2626",
            "6247",
            "5728",
            "4529",
            "1330",
            "6731",
            "7332",
            "3433"],
        }],
        chart: {
          type: 'bar',
          zoom: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            type: 'datetime'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2
        },

        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },
        xaxis: {
          labels: {
            rotate: -90
          },
          categories: ["гос. ценные бумаги", "кредиты от кредитных орг-ий, иностранных банков и международных фин-ых орг-ий", "бюджетные кредиты из других бюджетов бюджетной системы РФ", "гос. гарантии", "иные долговые обязательства", "всего", "гос. ценные бумаги", "кредиты от кредитных орг-ий, иностранных банков и международных фин-ых орг-ий", "бюджетные кредиты из других бюджетов бюджетной системы РФ", "гос. гарантии", "иные долговые обязательства", "всего", "гос. ценные бумаги", "кредиты от кредитных орг-ий, иностранных банков и международных фин-ых орг-ий", "бюджетные кредиты из других бюджетов бюджетной системы РФ", "гос. гарантии", "иные долговые обязательства", "всего", "гос. ценные бумаги", "кредиты от иностранных банков и международных фин. орг-ий", "бюджетные кредиты из других бюджетов бюджетной системы РФ", "гос. гарантии, предоставленные РФ в рамках использования целевых иностранных кредитов", "иные долговые обязательства", "всего", "муниципальные ценные бумаги", "кредиты от кредитных орг-ий", "бюджетные кредиты из других бюджетов бюджетной системы РФ", "муниципальные гарантии", "иные долговые обязательства", "всего", "бюджетные кредиты от Российской Федерации в рамках использования целевых иностранных кредитов", " муниципальные гарантии, предоставленные Российской Федерации в рамках использования целевых иностранных кредитов", "всего"],
          tickPlacement: 'on'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
          },
        }
      },
    }
  },
  mounted() {
    console.log('data: ', this.options.series[0].data);
    var chart = new ApexCharts(document.querySelector('#total-count'), this.options);

    chart.render();
  }
}
</script>

<style scoped>

</style>