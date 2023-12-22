import { Chart as ChartJS, ArcElement } from 'chart.js';
import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  NutrientsItem,
  NutrientsItemList,
  NutrientsWrap,
} from './DoughnutNutrients.styled';
import {
  BodyTextFirst,
  BodyTextSecond,
  HeadlineThird,
} from '../../StyledComponents/Components.styled';

ChartJS.register(ArcElement);

const DoughnutNutrients = ({ title, arcColor, nutrient, baseNutrient }) => {
  const calculatedPercentage = useMemo(() => {
    if (nutrient >= baseNutrient) return 100;
    return Math.round((nutrient / baseNutrient) * 100);
  }, [baseNutrient, nutrient]);

  const borderRad = nutrient >= baseNutrient ? [0] : [50];

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
      ctx.font = '14px Poppins';
      ctx.fillStyle = '#B6B6B6';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${calculatedPercentage}%`, xCoor, yCoor);
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
    <NutrientsWrap>
      <div
        className="doughnut"
        style={{
          height: 48,
          width: 48,
        }}
      >
        <Doughnut plugins={[textCenterPlugin, backgroundCircle]} data={data} />
      </div>
      <div>
        <HeadlineThird>{title}</HeadlineThird>
        <NutrientsItemList>
          <NutrientsItem>
            <BodyTextFirst>Goal:</BodyTextFirst>
            <BodyTextSecond>{baseNutrient || 0}</BodyTextSecond>
          </NutrientsItem>
          <NutrientsItem>
            <BodyTextFirst>left:</BodyTextFirst>
            <BodyTextSecond>
              {nutrient >= baseNutrient ? 0 : baseNutrient - nutrient}
            </BodyTextSecond>
          </NutrientsItem>
        </NutrientsItemList>
      </div>
    </NutrientsWrap>
  );
};

export default DoughnutNutrients;
