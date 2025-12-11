import React from 'react';
import {View} from 'react-native';
import {LineChart} from '../../src/LineChart';

const LineChartTwo = () => {
  const lineData = [
    { value: 0,  backgroundSliceColor: '#FFCCCC' },
    { value: 10, backgroundSliceColor: '#FFCCCC' },
    { value: 58, backgroundSliceColor: '#FFCCCC' },
    { value: 78, backgroundSliceColor: '#CFE2F3' },
    { value: 74, backgroundSliceColor: '#CFE2F3' },
    { value: 98, backgroundSliceColor: '#EAD1DC' },
    { value: 52, backgroundSliceColor: '#EAD1DC' },
    { value: 71, backgroundSliceColor: '#a2f59bff' },
    { value: 60, backgroundSliceColor: '#b7fab1ff' },
  ];

  const lineData2 = [
    {value: 0},
    {value: 20},
    {value: 18},
    {value: 40},
    {value: 36},
    {value: 60},
    {value: 54},
    {value: 85},
  ];
  return (
    <View style={{borderWidth: 1}}>
      <LineChart
        data={lineData}
        data2={lineData2}
        height={250}
        showValuesAsDataPointsText
        //@ts-ignore  Remove this ts-ignore when the types are updated to include showBackgroundSlices// @ts-ignore
        showBackgroundSlices={true}
        showVerticalLines
        spacing={44}
        initialSpacing={0}
        color1="skyblue"
        color2="orange"
        textColor1="green"
        dataPointsHeight={6}
        dataPointsWidth={6}
        dataPointsColor1="blue"
        dataPointsColor2="red"
        textShiftY={-2}
        textShiftX={-5}
        textFontSize={13}
      />
    </View>
  );
};

export default LineChartTwo;
