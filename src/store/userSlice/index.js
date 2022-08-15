import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  state: {
    name: null,
    age: null,
    sex: null,
    height: null,
    weight: null,
    disease: null,
  },
  health: {
    title: null,
    weight: null,
    steps: null,
    stress: null,
    desc: null,
  },
  exercise: {
    title: null,
    reps: null,
    kalory: null,
    heartrate: null,
    desc: null,
  },
  brain: {
    title: null,
    cholesterol: null,
    triglycerides: null,
    hdlcholesterol: null,
    desc: null,
  },
  dementia: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email
      state.state = action.payload.state
      state.health = action.payload.health
      state.exercise = action.payload.exercise
      state.brain = action.payload.brain
    },
    logout: (state) => {
      state.email = {}
      state.state = {}
      state.health = {}
      state.exercise = {}
      state.brain = {}
      state.dementia = {}
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer
