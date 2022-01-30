import React, {useState} from 'react';
import {View} from 'react-native';
import Categories from '../../components/Categories';
import Header from '../../components/Header';
import NoRecord from '../../components/NoRecord';
import categories from '../../constants/categories';

export default function Home() {
  const [selected, setSelected] = useState(0);
  const noRecordItems = categories.Library[selected];

  return (
    <>
      <Header />
      <View>
        <Categories categories={categories.Library} setSelected={setSelected} />
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
