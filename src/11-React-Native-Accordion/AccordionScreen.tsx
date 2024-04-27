import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import data from './src/data/data';
import Accordion from './src/components/Accordion';
import {SafeAreaView} from 'react-native';
const AccordionScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((value, index) => {
          return <Accordion value={value} key={index} type={value.type} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccordionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
