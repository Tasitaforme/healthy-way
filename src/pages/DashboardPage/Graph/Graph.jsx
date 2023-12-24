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

export default function Graph({ symbol, dataGraph }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 100,
      },
      point: {
        radius: 0,
        backgroundColor: '#E3FFA8',
        borderColor: '#E3FFA8',
        borderWidth: 1,
        pointBorderColor: 'var(--black-primary)',
        pointBackgroundColor: '#E3FFA8',
        pointHoverRadius: 6,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: true,
        backgroundColor: 'var(--black-primary)',
        bodyFontFamily: 'Poppins',
        bodyFont: { size: 32 },
        borderWidth: 186,
        position: 'average',
        displayColors: false,
        cornerRadius: 10,
        yAlign: 'bottom',
        bodyAlign: 'center',
        titleFont: { size: 0 },
        titleAlign: 'left',
        boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
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
        sensitivity: 140,
        min: 0,
        max: 3200,
        grid: {
          color: '#292928',
          drawBorder: false,
        },
        ticks: {
          stepSize: 1000,
          font: {
            size: 10,
          },

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

  return (
    <ChartBlock>
      <Line
        options={options}
        data={dataGraph}
        style={{ width: '100%', fontSize: '10px' }}
      />
    </ChartBlock>
  );
}
