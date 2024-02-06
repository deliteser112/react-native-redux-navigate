import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {categories} from '../../constants';
import {API_KEY, API_URI} from '@env';

export const fetchPosts = createAsyncThunk(
  'api/fetchPosts',
  async (setting: any) => {
    // const {API_KEY, API_URI} = process.env;
    console.log(API_KEY, process.env.API_KEY, process.env.API_URI, '=========');
    const playing = await axios.get(
      `${API_URI}?s=${setting.category}&y=2023&page=${setting.playingPageNumber}&apikey=${API_KEY}`,
    );
    const trending = await axios.get(
      `${API_URI}?s=trend&type=movie&page=1&apikey=${API_KEY}`,
    );
    const upcoming = await axios.get(
      `${API_URI}?s=coming&page=1&apikey=${API_KEY}`,
    );
    const rated = await axios.get(
      `${API_URI}?s=coming&page=1&apikey=${API_KEY}`,
    );

    return {
      playing: playing.data,
      trending: trending.data,
      upcoming: upcoming.data,
      rating: rated.data,
      setting: setting,
    };
  },
);

export const resetSetting = createAsyncThunk(
  'api/setting',
  async (setting: any) => {
    return setting;
  },
);

export const apiSlice = createSlice({
  name: 'api',
  initialState: {
    playing: {
      Search: [],
      totalResult: null,
    },
    rating: {
      Search: [],
      totalResult: null,
    },
    upcoming: {
      Search: [],
      totalResult: null,
    },
    trending: {
      Search: [],
      totalResult: null,
    },
    categories: [...categories],
    setting: {
      category: 'war',
      playingPageNumber: 1,
      upcomingPageNumber: 1,
      trendingPageNumber: 1,
      ratingPageNumber: 1,
    },
    status: 'idle',
    error: null as string | null | undefined,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.playing.Search = action.payload.playing.Search;
        state.playing.totalResult = action.payload.playing.totalResults;
        state.rating = action.payload.rating;
        state.upcoming = action.payload.upcoming;
        state.trending = action.payload.trending;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      })

      .addCase(resetSetting.pending, state => {
        state.status = 'loading';
      })
      .addCase(resetSetting.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.setting = {...state.setting, category: action.payload};
      })
      .addCase(resetSetting.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export default apiSlice.reducer;
