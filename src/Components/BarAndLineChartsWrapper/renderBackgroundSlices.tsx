import React from 'react';
import {View, PixelRatio} from 'react-native';
import {BackgroundSlice} from '@harveylx/gifted-charts-core';

interface RenderBackgroundSlicesProps {
  backgroundSlices: BackgroundSlice[];
  dataLength: number;
  endSpacing?: number;
  totalWidth: number;
}

export const renderBackgroundSlices = (
  props: RenderBackgroundSlicesProps,
) => {
  const {
    backgroundSlices,
    dataLength,
    totalWidth,
    endSpacing = 0,
  } = props;

  if (!backgroundSlices.length || dataLength === 0) {
    return null;
  }

  const totalChartWidth = totalWidth - endSpacing;
  const unitWidth = totalChartWidth / dataLength;

  return backgroundSlices.map((slice, i) => {
    const left = PixelRatio.roundToNearestPixel(unitWidth * slice.from);
    const right = PixelRatio.roundToNearestPixel(unitWidth * slice.to);

    return (
      <View
        key={`bg-slice-${i}`}
        style={{
          position: 'absolute',
          left,
          top: 0,
          bottom: 0,
          width: right - left,
          backgroundColor: slice.color,
          zIndex: -100,
          opacity: 1,
        }}
      />
    );
  });
};
