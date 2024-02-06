// import axios from 'axios';
// import {act} from '@testing-library/react-hooks';
// import configureStore, {MockStoreEnhanced} from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import apiReducer, {fetchPosts, resetSetting} from './apiSlice';

// jest.mock('axios');

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);

// describe('apiSlice', () => {
//   let store: MockStoreEnhanced<unknown, {}>;

//   beforeEach(() => {
//     store = mockStore({
//       api: {
//         playing: {Search: [], totalResult: null},
//         rating: {Search: [], totalResult: null},
//         upcoming: {Search: [], totalResult: null},
//         trending: {Search: [], totalResult: null},
//         categories: [],
//         setting: {
//           category: 'war',
//           playingPageNumber: 1,
//           upcomingPageNumber: 1,
//           trendingPageNumber: 1,
//           ratingPageNumber: 1,
//         },
//         status: 'idle',
//         error: null,
//       },
//     });
//   });

//   describe('fetchPosts action', () => {
//     it('should handle fetching posts successfully', async () => {
//       const setting = {category: 'war', playingPageNumber: 1};
//       const response = {
//         data: {Search: ['some data'], totalResults: '10'},
//       };

//       axios.get.mockResolvedValue(response);

//       await act(async () => {
//         await store.dispatch(fetchPosts(setting));
//       });

//       const actions = store.getActions();
//       expect(actions[0].type).toBe('api/fetchPosts/pending');
//       expect(actions[1].type).toBe('api/fetchPosts/fulfilled');
//       expect(actions[1].payload).toEqual({
//         playing: response.data,
//         trending: response.data,
//         upcoming: response.data,
//         rating: response.data,
//         setting,
//       });
//     });

//     it('should handle fetch error', async () => {
//       const setting = {category: 'war', playingPageNumber: 1};
//       axios.get.mockRejectedValue(new Error('Network Error'));

//       await act(async () => {
//         await store.dispatch(fetchPosts(setting));
//       });

//       const actions = store.getActions();
//       expect(actions[0].type).toBe('api/fetchPosts/pending');
//       expect(actions[1].type).toBe('api/fetchPosts/rejected');
//       expect(actions[1].error.message).toBe('Network Error');
//     });
//   });

//   describe('resetSetting action', () => {
//     it('should handle resetting setting successfully', async () => {
//       const newSetting = 'action';

//       await act(async () => {
//         await store.dispatch(resetSetting(newSetting));
//       });

//       const actions = store.getActions();
//       expect(actions[0].type).toBe('api/setting/pending');
//       expect(actions[1].type).toBe('api/setting/fulfilled');
//       expect(actions[1].payload).toBe(newSetting);
//     });

//     it('should handle reset setting error', async () => {
//       const newSetting = 'action';
//       axios.get.mockRejectedValue(new Error('Network Error'));

//       await act(async () => {
//         await store.dispatch(resetSetting(newSetting));
//       });

//       const actions = store.getActions();
//       expect(actions[0].type).toBe('api/setting/pending');
//       expect(actions[1].type).toBe('api/setting/rejected');
//       expect(actions[1].error.message).toBe('Network Error');
//     });
//   });

//   describe('apiReducer', () => {
//     it('should return the initial state', () => {
//       expect(apiReducer(undefined, {})).toEqual({
//         playing: {Search: [], totalResult: null},
//         rating: {Search: [], totalResult: null},
//         upcoming: {Search: [], totalResult: null},
//         trending: {Search: [], totalResult: null},
//         categories: [],
//         setting: {
//           category: 'war',
//           playingPageNumber: 1,
//           upcomingPageNumber: 1,
//           trendingPageNumber: 1,
//           ratingPageNumber: 1,
//         },
//         status: 'idle',
//         error: null,
//       });
//     });

//     // Add more tests for other actions as needed
//   });
// });
// function beforeEach(arg0: () => void) {
//   throw new Error('Function not implemented.');
// }
