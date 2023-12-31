import { Chart as ChartJS, ArcElement } from 'chart.js';
import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement);

const DoughnutCalories = ({ calories, baseCalories }) => {
  const calculatedPercentage = useMemo(
    () =>
      calories >= baseCalories
        ? 100
        : Math.round((calories / baseCalories) * 100),
    [calories, baseCalories]
  );

  const arcColor =
    calories >= baseCalories ? '#e74a3b' : 'rgba(69, 255, 188, 1)';
  const borderRad = calories >= baseCalories ? [0] : [50];

  const data = {
    datasets: [
      {
        data: [calculatedPercentage, 100 - calculatedPercentage],
        backgroundColor: [arcColor, 'rgba(41, 41, 40, 1)'],
        borderColor: ['rgba(69, 255, 188, 0)'],
        borderRadius: borderRad,
        cutout: '80%',
      },
    ],
  };

  const textCenterPlugin = {
    id: 'textCenter',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      ctx.font = '32px Poppins';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(calories, xCoor, yCoor - 12);

      ctx.font = '14px sans-serif';
      ctx.fillStyle = '#B6B6B6';
      ctx.fillText('calories', xCoor, yCoor + 15);
    },
  };

  const backgroundCircle = {
    id: 'backgroundCircle',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
      const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
      const width = outerRadius - innerRadius;
      const angle = Math.PI / 180;
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.strokeStyle = 'rgba(41, 41, 40, 1)';
      ctx.arc(xCoor, yCoor, outerRadius - width / 2, 0, angle * 360, false);
      ctx.stroke();
    },
  };

  return (
    <div
      className="doughnut"
      style={{
        height: '168px',
        width: '168px',
      }}
    >
      <Doughnut plugins={[textCenterPlugin, backgroundCircle]} data={data} />
    </div>
  );
};

export default DoughnutCalories;
