import React from 'react';
import {View, ColorValue} from 'react-native';

interface RenderBackgroundSlicesProps {
  data: any[];
  endSpacing?: number;
  totalWidth: number;
}

export const renderBackgroundSlices = (
  props: RenderBackgroundSlicesProps,
) => {
  const {
    data,
    totalWidth,
    endSpacing = 0,
  } = props;

  if (!data || data.length === 0) {
    return null;
  }

  // Calculate total chart width
  const totalChartWidth = totalWidth - endSpacing;

  // Each slice gets equal width based on TOTAL data length (not filtered)
  const sliceWidth = totalChartWidth / data.length;

  // Map over ALL data items, preserving original index positions
  return data.map((item: any, index: number) => {
    // Skip rendering if no background slice color specified
    if (!item.backgroundSliceColor) {
      return null;
    }

    // Use original data index for position
    return (
      <View
          key={`bg-slice-${item.id}-${index}`}
          style={{
          position: 'absolute',
          left: sliceWidth * index,
          top: 0,
          bottom: 0,
          width: sliceWidth,
          backgroundColor: item.backgroundSliceColor as ColorValue,
          zIndex: -100,
          opacity: 0.5,
        }}
      />
    );
  });
};
