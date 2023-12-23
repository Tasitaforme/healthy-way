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
import { faker } from '@faker-js/faker';
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

export const option = {
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

let weight = 75;
let AverageCalories = 1700;
// let AverageCalories = arrayMean();

let AverageWater = 1700;
let AverageWeight = 75;
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
console.log(currentMonth);
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

const ArrMonth = resultArrMonth.map((month) => ({
  value: month,
  label: month,
}));

export default function DashboardPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [caloriesArr, setCaloriesArr] = useState([]);
  const [waterArr, setWaterArr] = useState([]);
  const [weightArr, setWeightArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let numberMonth = currentMonth;

      if (selectedOption !== null) {
        numberMonth = selectedOption;
      }
      const response = await GetStatisticsPerMonth(numberMonth);
      console.log(response);

      setCaloriesArr(response.calories);
      setWaterArr(response.water);
      setWeightArr(response.weight);
    };
    fetchData();
  }, [selectedOption]);

  console.log(GetStatisticsPerMonth(12));
  console.log(caloriesArr);
  console.log(waterArr);
  console.log(weightArr);
  const daysInCurrentMonth = getDaysInMonth();
  let labels = createArrayWithNumbers(daysInCurrentMonth);
  if (selectedOption !== null) {
    const year = currentDate.getFullYear();
    const selectMonth = months.indexOf(selectedOption.label) + 1;
    const lastDayOfMonth = new Date(year, selectMonth, 0).getDate();
    labels = createArrayWithNumbers(lastDayOfMonth);
  }
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: '',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 3000 })),
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
              <Line options={option} data={data} />
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
              <Line options={option} data={data} />
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
                  <TextWeight>{weight}</TextWeight>
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
