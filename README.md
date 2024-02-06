# Movie Project

## Introduction

Welcome to the Movie project, a React Native application designed to bring the latest and greatest movies right to your fingertips. Whether you're an Android or iOS user, we've got you covered. Dive into the world of movies with ease and discover trending, upcoming, and top-rated movies all in one place.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- npm (Node Package Manager)
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation

1. Clone the repository from GitHub:
2. Navigate to the project directory:
3. Install the required dependencies:
4. To run the application, use the following commands:
- For Android:
  ```
  npm run android
  ```
- For iOS:
  ```
  npm run ios
  ```

## Tech Stacks

The Movie project is built using a robust set of technologies:
- **React Native**: A framework for building native apps using React.
- **Redux-toolkit**: A toolkit for efficient state management in React applications.
- **Jest**: A delightful JavaScript Testing Framework with a focus on simplicity.

## Project Structure

The project follows a modular and organized directory structure:

### Components

Reusable UI components:
- `MovieSwipper`: A swiper component for browsing movies by category.
- `TabBar`: A navigation component with items for Home, Playing, Trending, Upcoming, and Rating.

### Assets

Static files such as images, fonts, and icons.

### Redux

State management:
- Slices: Reducers and actions for different modules.
- Store: The global state store of the application.

### Constants

Constant values used throughout the application.

### Screens

Individual screens/pages of the application:
- `Auth`: Authentication and user sign-in.
- `Main`: Overview of movies and categories.
- `CategoryList`: List of movies categorized by Playing, Trending, Upcoming, and Rating.

## Features

- **State Management**: Redux-toolkit provides a predictable state container for the application.
- **Lazy Loading and Image Optimization**: FastImage is used for efficient image loading and optimization.
- **Data Fetching**: Movies data is fetched from the popular OMDB API.
- **Authentication**: User authentication is handled using a mock API, ensuring secure and reliable sign-in.

## Testing

The Movie project is committed to maintaining high-quality code and user experience. As such, testing is an integral part of our development process. We use Jest, a comprehensive JavaScript testing framework, to ensure that our application is reliable, performs well, and is free of bugs.

### Unit Testing

- **Components**: We write tests for our React components to ensure that they render correctly and handle props and state as expected.
- **Redux**: Our Redux slices and actions are tested to guarantee that our state management is predictable and error-free.

### Integration Testing

We perform integration tests to ensure that different parts of our application work well together. This includes testing the interaction between React components, as well as the integration between our components and Redux store.

### UI Testing

Our UI tests focus on user interactions and visual elements to ensure a seamless and visually appealing user experience.

### Continuous Integration

We have set up a continuous integration (CI) pipeline to run our test suite on every push and pull request. This helps us catch and fix issues early, ensuring a stable and reliable codebase.

