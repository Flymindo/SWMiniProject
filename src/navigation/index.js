export {default as Navigation} from "./AppNavigatior";

import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native/auth';

import {AppNavigator} from './AppNavigatior';
import {AuthNavigator} from './AuthNavigatior';