import dva from 'dva'
import { routerRedux } from 'dva/router';
import { goLogin } from '../services/api';

export default {
  namespace: 'indexPage',
  state: [],
  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(goLogin, payload);
    }
  },
  reducers:{}
};
