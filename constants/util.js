import AsyncStorage from "@react-native-async-storage/async-storage";

export const toDayMonthYear =()=>{
  let date = new Date().toLocaleDateString().split('/')
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let d = `${Number(date[1])} ${month[Number(date[0])-1]} ${date[2]}`
  return d;
}


export const storeStringData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.log(e)
  }
}


export const getStringData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    // if(value !== null) {
      return value;
    // }
  } catch(e) {
    console.log(e)
    return null;
  }
}
