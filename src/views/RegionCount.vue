<template>
  <div id="region-count">

  </div>
</template>

<script>
import ApexCharts from "apexcharts";
import data from "@/inc/data";

export default {
  data() {
    return {
      options: {
        series: [
          {
            name: 'объем гос. долга суюъекта РФ, тыс. руб.',
            data: [44, 55, 41, 64, 22, 43, 21]
          },
          {
            name: 'объем гос. долга суюъекта РФ, тыс. руб.',
            data: [53, 32, 33, 52, 13, 44, 32]
          },
          {
            name: 'объем гос. долга суюъекта РФ, тыс. дол. США',
            data: [53, 32, 33, 52, 13, 44, 32]
          },
          {
            name: 'Объем  долга муниципальных образований, входящих в состав субъекта Российской Федерации, тыс.руб.',
            data: [44, 55, 41, 64, 22, 43, 21]
          },
          {
            name: 'Объем  внутреннего долга муниципальных образований, входящих в состав субъекта Российской Федерации, тыс.руб.',
            data: [53, 32, 33, 52, 13, 44, 32]
          },
          {
            name: 'Объем внешнего долга муниципальных образований, входящих в состав субъекта Российской Федерации тыс долл. США',
            data: [53, 32, 33, 52, 13, 44, 32]
          }
        ],
        chart: {
          type: 'bar',
          zoom: {
            enabled: true
          }
        },

        theme: {
          mode: 'light',
          palette: 'palette7',
          monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: 'light',
            shadeIntensity: 0.65
          },
        },
        legend: {
          show: true,
          position: 'top'
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        dataLabels: {
          enabled: true
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
          categories: ['Центральный федеральный округ',
            'Белгородская область',
            'Брянская область',
            'Владимирская область',
            'Воронежская область',
            'Ивановская область',
          ],
          tickPlacement: 'on'
        },
      },
    }
  },
  mounted() {
    console.log('data: ', this.options.series[0].data);
    var chart = new ApexCharts(document.querySelector('#region-count'), this.options);

    chart.render();
  }
}
</script>

<style scoped>

</style>