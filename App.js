import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Svg, {Circle, Rect, SvgUri} from 'react-native-svg';

import SVGImg from './assets/svg/star.svg';

const App = () => {
  return (
    <ScrollView>
      <View style={{...styles.wrapper, paddingTop: 80}}>
        <Text style={styles.title}>SVG TUTORIAL</Text>
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
          <Rect
            x="15"
            y="15"
            width="70"
            height="70"
            stroke="red"
            strokeWidth="2"
            fill="yellow"
          />
        </Svg>
      </View>
      <View style={{...styles.wrapper}}>
        <SvgUri
          width="50%"
          height="50%"
          uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
        />
      </View>
      <View style={styles.wrapper}>
        <SVGImg width={200} height={200} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  title: {
    fontWeight: '800',
    paddingBottom: 50,
    fontSize: 36,
    color: '#4659C7',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});

export default App;
