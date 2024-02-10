import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Translations} from '../translations/Translations';
import {fetchProducts} from '../../common/cycleApis';

const LoginComponent = (): React.JSX.Element => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      return await fetchProducts(
        'https://mocki.io/v1/66607aee-7772-4af6-a5af-421c745f5af1',
        setData,
      );
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  console.log(data);

  return (
    <View style={styles.loginButtonContainer}>
      <Text style={styles.loginTitle}>{Translations.WELCOME_TITLE}</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.loginButton} onPress={fetchData}>
          <Text style={styles.text}>{Translations.LOGIN_BUTTON}</Text>
        </Pressable>
        <Pressable
          style={styles.registerButton}
          onPress={() => {
            setData([]);
          }}>
          <Text style={styles.text}>{Translations.REGISTER_BUTTON}</Text>
        </Pressable>
      </View>
      {data && data.length > 0
        ? data[0].products.map(product => (
            <View key={product.id}>
              <Text>{product.category}</Text>
              <Text>{product.name}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  loginTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  loginButtonContainer: {
    height: '100%',
    paddingVertical: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignContent: 'center',
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: '#3E7F61',
  },
  registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: '#2B7AA2',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default LoginComponent;
