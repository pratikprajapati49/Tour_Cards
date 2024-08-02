# Tour Cards Project

## Overview
This project is a React-based web application that displays a collection of tour cards. Each card represents a different tour package, allowing users to browse and manage their travel interests.

## Features
1. Built using React and CSS for a responsive and interactive user interface.
2. Displays multiple tour cards, each containing:
   - Place name
   - Tour price
   - Information about the tour
   - An image of the destination
   - A "Not Interested" button
3. Users can remove individual tour cards if they're not interested.
4. When all tour cards are removed, a refresh button is displayed to reset the view.

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/tour-cards-project.git
   ```
2. Navigate to the project directory:
   ```
   cd tour-cards-project
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Usage
- Browse through the tour cards to view different travel packages.
- Click the "Not Interested" button on any card to remove it from view.
- If all cards are removed, use the refresh button to restore all tour options.

## Project Structure
```
tour-cards-project/
├── src/
│   ├── components/
│   │   ├── TourCard.js
│   │   └── TourList.js
│   ├── App.js
│   └── index.js
├── public/
│   └── index.html
└── README.md
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is open source and available under the [MIT License](LICENSE).