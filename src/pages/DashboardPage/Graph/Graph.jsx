import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ChartBlock } from '../DashboardPage.styled';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function Graph({ symbol, dataGraph, unit, labels }) {
  const options = {
    interaction: {
      mode: 'index',
      intersect: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 100,
      },
      point: {
        radius: 0,
        borderWidth: 1,
        pointBorderColor: '#050505',
        pointBackgroundColor: '#E3FFA8',
        pointHoverRadius: 6,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          footer: function () {
            return unit;
          },
          label: function (tooltipItem, data) {
            if (tooltipItem) {
              const formattedValue = Math.round(tooltipItem.raw);
              return `${formattedValue}`;
            }
            return null;
          },
        },
        enabled: true,
        mode: 'index',
        padding: 8,
        intersect: true,
        backgroundColor: '#050505',
        bodyFontFamily: 'Poppins',
        bodyFont: { size: 32 },
        footerFont: {
          family: 'Poppins',
          size: 14,
          weight: 500,
          lineHeight: 1.4,
        },

        footerLineHeight: 1.4,
        borderWidth: 2,
        position: 'nearest',
        displayColors: false,
        cornerRadius: 10,
        yAlign: 'bottom',
        bodyAlign: 'center',
        titleFont: { size: 0 },
        footerAlign: 'center',
        boxShadow: ['0px 4px 14px 0px rgba(227, 255, 168, 0.20)'],
      },

      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,

        min: 0,
        max: 5000,
        grid: {
          color: '#292928',
          drawBorder: false,
        },
        ticks: {
          stepSize: 1000,
          font: {
            size: 10,
          },
          sensitivity: 10,

          callback: function (value, index) {
            if (value === 0) {
              return value;
            } else {
              const formattedValue = Math.round(value / 1000);
              return `${formattedValue}${symbol}`;
            }
          },
        },
      },
      x: {
        beginAtZero: true,

        grid: {
          ticks: {
            align: 'center',
            font: {
              size: 10,
              lineHeight: 2,
            },
          },
          color: '#292928',
          drawBorder: false,
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: '',
        data: dataGraph,
        cubicInterpolationMode: 'monotone',
        borderColor: '#E3FFA8',
        backgroundColor: 'transparent',
      },
    ],
  };
  return (
    <ChartBlock>
      <Line
        data={data}
        options={options}
        style={{ width: '100%', fontSize: '10px' }}
      />
    </ChartBlock>
  );
}
