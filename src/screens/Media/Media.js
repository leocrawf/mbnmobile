import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Categories from '../../components/Categories';
import Header from '../../components/Header';
import NoRecord from '../../components/NoRecord';
import categories from '../../constants/categories';

export default function Media() {
  const [selected, setSelected] = useState(0);
  const noRecordItems = categories.Media[selected];

  return (
    <>
      <Header />
      <View>
        <Categories categories={categories.Media} setSelected={setSelected} />
      </View>
      <NoRecord
        iconProvider={noRecordItems.noRecord.iconProvider}
        icon={noRecordItems.noRecord.icon}
        noRecordTitle={noRecordItems.noRecord.noRecordTitle}
        noRecordMessage={noRecordItems.noRecord.noRecordMessage}
        newRecordButtonText={noRecordItems.noRecord.newRecordButtonText}
      />
    </>
  );
}
