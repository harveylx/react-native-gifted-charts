import React from 'react';
import {View, PixelRatio} from 'react-native';
import {BackgroundSlice} from '@harveylx/gifted-charts-core';

interface RenderBackgroundSlicesProps {
  backgroundSlices: BackgroundSlice[];
  dataLength: number;
  endSpacing?: number;
  totalWidth: number;
  xAxisRange?: number;
}

export const renderBackgroundSlices = (
  props: RenderBackgroundSlicesProps,
) => {
  const {
    backgroundSlices,
    dataLength,
    totalWidth,
    endSpacing = 0,
    xAxisRange,
  } = props;

  if (!backgroundSlices.length) {
    return null;
  }
  if (!xAxisRange && dataLength === 0) {
    return null;
  }

  const totalChartWidth = totalWidth - endSpacing;

  return backgroundSlices.map((slice, i) => {
    let left: number;
    let right: number;

    if (xAxisRange != null && xAxisRange > 0) {
      left = PixelRatio.roundToNearestPixel((slice.from / xAxisRange) * totalChartWidth);
      right = PixelRatio.roundToNearestPixel((slice.to / xAxisRange) * totalChartWidth);
    } else {
      const unitWidth = totalChartWidth / dataLength;
      left = PixelRatio.roundToNearestPixel(unitWidth * slice.from);
      right = PixelRatio.roundToNearestPixel(unitWidth * slice.to);
    }

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
