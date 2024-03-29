
export default {

  namespace: 'global',

  state: {
    userInfo: {
      email: null,
      pwd: null,
      key: null,
    }
  },

  subscriptions: {
    // setup({ dispatch, history }) {  // eslint-disable-line
    // },
  },

  effects: {
    // 设置用户信息
    *setUserInfo({ payload }, { put }) {  // eslint-disable-line
      yield put({
        type: 'set_userInfo',
        payload 
      });
    },
  },

  reducers: {
    set_userInfo(state, { payload }) {
      return { ...state, userInfo: payload };
    },
  },

};
