import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSession } from '../db';
import Loading from '../components/Loading';
import TabNavigator from './TabNavigation';
import AuthStack from './AuthStack';
import { setUser } from '../features/auth/authSlice';

const MainNavigator = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authReducer.value);

  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession();
        if (session.rows.length > 0) {
          const userData = session.rows.item(0);
          dispatch(setUser(userData));
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;