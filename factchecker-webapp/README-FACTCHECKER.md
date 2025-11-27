# 🔍 Fact Checker Web Application

A React-based fact-checking web application that allows users to verify claims against a curated database of known facts.

## Features

- **Interactive Fact Checking**: Enter any claim and get instant verification results
- **Visual Feedback**: Color-coded verdicts (Green for TRUE, Red for FALSE, Orange for MOSTLY FALSE, Gray for UNVERIFIED)
- **Confidence Levels**: Each result includes a confidence level (High, Medium, Low)
- **Sample Claims**: Quick-access sample claims for demonstration
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean UI**: Modern, gradient-based design with smooth animations

## Screenshots

### Initial View
![Fact Checker Initial View](https://github.com/user-attachments/assets/0617e3ab-ceb4-44e6-b49e-2287fb748ae1)

### TRUE Result
![TRUE Verdict Example](https://github.com/user-attachments/assets/e2c266df-1d40-40cf-84a7-ae0888090132)

### FALSE Result
![FALSE Verdict Example](https://github.com/user-attachments/assets/506dc65e-4fbb-4474-9d13-135a8f0720ab)

## How It Works

The application uses a simple similarity algorithm to match user input against a pre-populated database of facts. When a claim is submitted:

1. The claim is compared against known facts in the database
2. A similarity score is calculated based on word matching
3. If a match is found (similarity > 30%), the corresponding verdict is displayed
4. If no match is found, an "UNVERIFIED" verdict is shown

## Pre-loaded Facts

The application includes several sample facts:
- The Earth is round (TRUE)
- Water boils at 100 degrees Celsius at sea level (TRUE)
- The moon is made of cheese (FALSE)
- Humans use only 10% of their brain (FALSE)
- The Great Wall of China is visible from space (MOSTLY FALSE)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Navigate to the factchecker-webapp directory:
```bash
cd factchecker-webapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production

## Testing

The application includes comprehensive tests covering:
- Component rendering
- User interactions
- Fact-checking functionality
- UI state management

Run tests with:
```bash
npm test
```

## Technology Stack

- **React 19.2.0** - Frontend framework
- **React Scripts 5.0.1** - Build tooling
- **CSS3** - Styling with gradients and animations
- **Testing Library** - Component testing

## Future Enhancements

Potential improvements for future versions:
- Integration with real fact-checking APIs (e.g., Google Fact Check API)
- User authentication and claim submission
- Database expansion with more facts
- Natural language processing for better claim matching
- Source citation for each verdict
- Claim history tracking
- Social media sharing functionality

## License

This project is part of the tripathiaditya-codes portfolio.

## Author

Aditya Kumar Tripathi
- Email: adityakumar.tripathi.2891@gmail.com
- GitHub: [@tripathiaditya-codes](https://github.com/tripathiaditya-codes)
