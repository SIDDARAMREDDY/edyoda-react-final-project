import React, { Component } from "react";
import Chart from "react-apexcharts";
import styles from "./ChartStyles.module.css";

class HorizontalChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "10%",
            
          },
        },
        chart: {
          id: "apexchart-example",
          toolbar: {
            show: false,
          },
          foreColor: "#fff",
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: Object.keys(
            JSON.parse(localStorage.getItem("dashboardPage")).performance
          ),
        },
        fill: {
          colors: ["rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(0, 128, 0)","rgb(255, 165, 0)","rgb(128, 0, 128)","rgb(255, 0, 0)","rgb(255, 255, 0)"]
        
        }
      },
      series: [
        {
          name: "featured",
          data: Object.values(
            JSON.parse(localStorage.getItem("dashboardPage")).performance
          ),
        },
      ],
    };
  }
  render() {
    return (
      <div className={styles.chartcontainer}>
        <h2>Performance</h2>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
        />
      </div>
    );
  }
}
export default HorizontalChart;