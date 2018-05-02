// import dva from 'dva'
// import { routerRedux } from 'dva/router';
import { goLogin } from '../services/api';

export default {
  namespace: 'indexPage',
  state: {},
  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(goLogin, payload)
      var a = yield put({
        type: 'isSuccess',
        payload: response
      })
    }
  },
  reducers:{
    isSuccess(state, {payload}){
      if (payload.err){
        var status = 0;
      }else{
        status = 1;
      }
      return {
        status: status
      }
    }
  }
};
