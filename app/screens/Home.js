import { ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,  ScrollView } from 'react-native';
import Contest from '../../components/Contest';
import HorizontalSlider from '../../components/HorizontalSlider';
import Theme from '../../styles/Theme';

export default function Home() {
  const [categories, setCategories] = useState([])
  const [contests, setContests] = useState({})

  useEffect(()=>{
    const categories_data = [
      {
        categoryName: 'Sports',
        categoryId: 'c1'
      },
      {
        categoryName: 'Technology',
        categoryId: 'c1'
      },
      {
        categoryName: 'Health',
        categoryId: 'c1'
      },
      {
        categoryName: 'Automobiles',
        categoryId: 'c1'
      },
      {
        categoryName: 'Food',
        categoryId: 'c1'
      },
      {
        categoryName: 'Travel',
        categoryId: 'c1'
      }
    ]
    

    let contests_data = {}
    contests_data[categories_data[0].categoryName] = [
      {
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDc5X3OjHsqcXLdXuFHSqj8_ZyeLmAVGBDg&usqp=CAU',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      }
    ]

    contests_data[categories_data[1].categoryName] = [
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      }
    ]

    contests_data[categories_data[2].categoryName] = [
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      }
    ]

    contests_data[categories_data[3].categoryName] = [
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      }
    ]

    contests_data[categories_data[4].categoryName] = [
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      }
    ]

    contests_data[categories_data[5].categoryName] = [
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      }
    ]


    setCategories(categories_data)
    setContests(contests_data)
  }, [])
  
  return (
    <View style={styles.container}>
      <ScrollView >
        {categories.map((category, index)=>      
          <HorizontalSlider key={index} heading={category.categoryName}>
            
            {contests[category.categoryName]?.map(({imageUrl, contestName, startDateTime}, index)=>
                  <Contest key={index} imageUri={imageUrl} contestName={contestName} date={startDateTime} />  
              )}
            
          </HorizontalSlider>
        )}
        
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.bg_level2,
    
  },
});
