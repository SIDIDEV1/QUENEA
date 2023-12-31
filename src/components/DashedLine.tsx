import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const DashedLine = ({dashWidth = 10, dashGap = 5, totalLength = 300}) => {
  const dashNum = Math.floor(totalLength / (dashWidth + dashGap));
  return (
    <View style={styles.line}>
      {[...Array(dashNum)].map((_, i) => (
        <View
          key={i}
          style={[styles.dash, {width: dashWidth, marginRight: dashGap}]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  dash: {
    height: 1.5,
    backgroundColor: Colors.gray,
  },
});

export default DashedLine;
