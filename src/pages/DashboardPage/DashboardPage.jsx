import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Container } from '../../components/StyledComponents/Container';
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
import {
  TextLabel,
  ListStat,
  ListItem,
  TextWeight,
  Table,
  ListChart,
  LiCart,
  DashboardBlock,
  TextBlock,
  AverageBlock,
  TextAverageValue,
  TableBlock,
  SelectBlock,
  SelectOption,
  Scroll,
  customStyles,
} from './DashboardPage.styled';
import { GetStatisticsPerMonth } from '../../requests/operationsStatistics';
import Graph from '../../components/Graph/Graph';
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
    return matchingData ? matchingData.calories : 0;
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

  return (
    <Container>
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
            <Scroll>
              <Graph
                symbol={'K'}
                dataGraph={caloriesArrLab}
                unit={'calories'}
                labels={labels}
              />
            </Scroll>
          </LiCart>

          <LiCart>
            <TextBlock>
              <h2>Water</h2>
              <AverageBlock>
                <p>Average value:</p>
                <TextAverageValue>{AverageWater} ml</TextAverageValue>
              </AverageBlock>
            </TextBlock>
            <Scroll>
              <Graph
                symbol={'L'}
                dataGraph={waterArrLab}
                unit={'milliliters'}
                labels={labels}
              />
            </Scroll>
          </LiCart>
        </ListChart>
      </DashboardBlock>
      <TableBlock>
        <TextBlock>
          <h2>Weight</h2>
          <AverageBlock>
            <p>Average value:</p>
            <TextAverageValue>{AverageWeight} kg</TextAverageValue>
          </AverageBlock>
        </TextBlock>
        <Scroll>
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
        </Scroll>
      </TableBlock>
    </Container>
  );
}
