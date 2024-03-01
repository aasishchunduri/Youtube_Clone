# YouTube Clone

This project is a clone of YouTube, built using React and Tailwind CSS, leveraging the YouTube API to fetch and display video data dynamically.

## Features

- **Dynamic Video Loading**: Utilizes the YouTube API to search for and display videos, providing a seamless browsing experience similar to the original YouTube platform.
- **Efficient State Management**: Incorporates Redux for global state management, ensuring that the application's state is handled efficiently and predictably across components.
- **Debouncing Technique**: Implements debouncing for search queries to minimize API calls and enhance user experience by reducing unnecessary data fetching and rendering.
- **Caching**: Implements caching for search results, reducing the number of API requests and speeding up the display of previously searched terms.
- **Live Chat Feature**: Includes a live chat feature using polling and Redux for state management, allowing users to engage in real-time discussions related to the videos they are watching.

## Technologies Used

- **React**: For building the user interface and handling the application logic in a modular and maintainable way.
- **Tailwind CSS**: Utilized as the CSS framework to style the application, providing a responsive and modern design with minimal custom CSS.
- **Redux**: For managing the application's state globally, making it easier to share data across components and maintain a predictable state.
- **YouTube API**: To fetch real-time data for videos, including search results, video details, and related videos.
- **Polling Technique**: Used to implement the live chat feature, allowing the application to periodically check for new messages.
