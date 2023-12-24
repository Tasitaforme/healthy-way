import React, { useEffect, useState } from 'react';
import Select from 'react-select';
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
import {
  IconWrap,
  StyledLink,
} from 'components/StyledComponents/Components.styled';
import sprite from 'assets/sprite.svg';
import { Line } from 'react-chartjs-2';

import {
  TextLabel,
  ListStat,
  ListItem,
  TextWeight,
  Table,
  ListChart,
  LiCart,
  ChartBlock,
  DashboardBlock,
  TextBlock,
  AverageBlock,
  TextAverageValue,
  TableBlock,
  SelectBlock,
  SelectOption,
} from './DashboardPage.styled';
import { GetStatisticsPerMonth } from '../../redux/statistics/operations';

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
const options = {
  responsive: true,
  elements: {
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
      ticks: {
        callback: function (value, index, type) {
          if (value === 0) {
            return value;
          } else {
            const formattedValue = Math.round(value / 1000);
            console.log(type);
            return `${formattedValue}${type === 'calories' ? 'K' : 'L'}`;
          }
        },
      },
    },
    x: {
      beginAtZero: false,
    },
  },
};

function createArrayWithNumbers(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}
const currentDate = new Date();
function getDaysInMonth() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const lastDayOfMonth = new Date(year, month, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  return daysInMonth;
}

function arrayMean(arr) {
  const total = arr.reduce((previousValue, number) => {
    return previousValue + number;
  }, 0);
  return total / arr.length;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const currentMonth = currentDate.getMonth();
function getMonthsList() {
  const monthsList = months
    .slice(currentMonth)
    .concat(months.slice(0, currentMonth));
  return monthsList;
}

const customStyles = {
  valueContainer: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    ':hover': {
      color: 'var(--green-light)',
      transition: 'transform 0.3s ease',
      transform: 'rotate(180deg)',
    },
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'var(--black-primary)',
    border: 'none',
    cursor: 'pointer',
    ':hover': {
      borderColor: 'var(--green-light)',
      color: 'var(--green-light)',
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    // maxHeight: '144px',
    maxHeight: '300px',
    minWidth: '221px',
    overflow: 'hidden',
    color: '#b6b6b6',
    backgroundColor: '#0f0f0f',
    borderRadius: '14px',
    scrollbarColor: '#0f0f0f',
    boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '14px',
    backgroundColor: state.isSelected ? 'rgba(255, 255, 255, 0.03)' : '#0f0f0f',
    color: '#b6b6b6',
    ':hover': {
      color: 'var(--green-light)',
    },
  }),
};
const resultArrMonth = getMonthsList();

let ArrMonth = resultArrMonth.map((month) => ({
  value: month,
  label: month,
}));

export default function DashboardPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [caloriesArr, setCaloriesArr] = useState([]);
  const [waterArr, setWaterArr] = useState([]);
  const [weightArr, setWeightArr] = useState([]);
  const daysInCurrentMonth = getDaysInMonth();
  let labels = createArrayWithNumbers(daysInCurrentMonth);
  let selectMonth = 0;
  if (selectedOption !== null) {
    const year = currentDate.getFullYear();
    selectMonth = months.indexOf(selectedOption.label) + 1;
    const lastDayOfMonth = new Date(year, selectMonth, 0).getDate();
    labels = createArrayWithNumbers(lastDayOfMonth);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (weightArr.length !== 0) {
          setCaloriesArr([]);
          setWaterArr([]);
          setWeightArr([]);
        }
        let numberMonth = currentMonth + 1;
        if (selectedOption !== null) {
          numberMonth = selectMonth;
        }
        console.log(numberMonth);
        const response = await GetStatisticsPerMonth(numberMonth);
        setCaloriesArr(response.calories);
        setWaterArr(response.water);
        setWeightArr(response.weight);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [selectedOption]);

  const wightData = () => {
    if (weightArr.length === 0) {
      return labels.map((day) => (day = 0));
    }
    const weightAr = labels.map((day) => {
      const matchingData = weightArr.find(
        (data) => parseInt(data._id, 10) === day
      );
      return matchingData ? matchingData.total : 0;
    });
    const moreZero = weightAr.find((data) => data > 0);
    const notZero = weightAr.map((dat) => (dat === 0 ? moreZero : dat));
    return notZero;
  };
  const weightArrLab = wightData();
  const caloriesArrLab = labels.map((day) => {
    const matchingData = caloriesArr.find(
      (data) => parseInt(data._id, 10) === day
    );
    return matchingData ? matchingData.total : 0;
  });
  const waterArrLab = labels.map((day) => {
    const matchingData = waterArr.find(
      (data) => parseInt(data._id, 10) === day
    );
    return matchingData ? matchingData.total : 0;
  });

  const AverageCalories = Math.round(arrayMean(caloriesArrLab));
  const AverageWater = Math.round(arrayMean(waterArrLab));
  const AverageWeight = Math.round(arrayMean(weightArrLab));

  const dataCalories = {
    labels,
    datasets: [
      {
        fill: true,
        label: '',
        data: caloriesArrLab,
        cubicInterpolationMode: 'monotone',
        borderColor: '#E3FFA8',
        backgroundColor: '#0F0F0F',
        boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
      },
    ],
  };
  const dataWoter = {
    labels,
    datasets: [
      {
        fill: true,
        label: '',
        data: waterArrLab,
        cubicInterpolationMode: 'monotone',
        borderColor: '#E3FFA8',
        backgroundColor: '#0F0F0F',
        boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
      },
    ],
  };

  return (
    <>
      <SelectBlock>
        <SelectOption>
          <StyledLink to="/main">
            <IconWrap
              width="24px"
              height="24px"
              style={{ transform: 'rotate(180deg)' }}
            >
              <use href={`${sprite}#arrow-right`} />
            </IconWrap>
          </StyledLink>
          <h2>Months</h2>
          <Select
            styles={customStyles}
            isSearchable={false}
            value={null}
            onChange={setSelectedOption}
            options={ArrMonth}
          />
        </SelectOption>
        <h3>
          {selectedOption === null
            ? months.slice(currentMonth).join(', ')
            : typeof selectedOption === 'object'
            ? selectedOption.label
            : selectedOption}
        </h3>
      </SelectBlock>
      <DashboardBlock>
        <ListChart>
          <LiCart>
            <TextBlock>
              <h2>Calories</h2>
              <AverageBlock>
                <p>Average value:</p>
                <TextAverageValue>{AverageCalories} cal</TextAverageValue>
              </AverageBlock>
            </TextBlock>
            <ChartBlock>
              <Line type={'calories'} options={options} data={dataCalories} />
            </ChartBlock>
          </LiCart>
          <LiCart>
            <TextBlock>
              <h2>Water</h2>
              <AverageBlock>
                <p>Average value:</p>
                <TextAverageValue>{AverageWater} ml</TextAverageValue>
              </AverageBlock>
            </TextBlock>
            <ChartBlock>
              <Line type={'water'} options={options} data={dataWoter} />
            </ChartBlock>
          </LiCart>
        </ListChart>
        <TableBlock>
          <TextBlock>
            <h2>Weight</h2>
            <AverageBlock>
              <p>Average value:</p>
              <TextAverageValue>{AverageWeight} kg</TextAverageValue>
            </AverageBlock>
          </TextBlock>

          <Table>
            <ListStat>
              {labels.map((dat, index) => (
                <ListItem key={index}>
                  <TextWeight>{weightArrLab[index]}</TextWeight>
                  <TextLabel>{dat}</TextLabel>
                </ListItem>
              ))}
            </ListStat>
          </Table>
        </TableBlock>
      </DashboardBlock>
    </>
  );
}
