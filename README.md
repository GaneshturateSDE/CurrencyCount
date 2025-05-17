Indian Currency Counter App
A responsive React application for counting Indian currency denominations and calculating the total amount.

Features
Multi-denomination Support: Handles all standard Indian currency notes (₹2000, ₹500, ₹200, ₹100, ₹50, ₹20, ₹10) and coins (₹5, ₹2, ₹1)

Real-time Calculation: Automatically calculates total amount as you input quantities

Responsive Design: Optimized for both mobile and desktop viewing

Single column layout on mobile devices

Two-column layout on desktop for better space utilization

Visual Currency Display: Shows images of each currency denomination

Indian Number Formatting: Displays amounts in standard Indian currency format (with comma separators)

Installation
Clone the repository:

bash
git clone https://github.com/yourusername/indian-currency-counter.git
cd indian-currency-counter
Install dependencies:

bash
npm install
Start the development server:

bash
npm start
Usage
Enter quantities for each denomination in the input fields

The app will automatically:

Calculate the subtotal for each denomination

Display the running total at the bottom

The total amount is formatted according to Indian numbering system (e.g., ₹1,23,456)

Technologies Used
React.js

Tailwind CSS

JavaScript (ES6+)

HTML5


Customization
You can easily customize:

Colors by modifying Tailwind classes

Layout by adjusting the grid/column structure

Currency images by replacing the image URLs

Known Issues
Some RBI currency images may not load due to CORS restrictions (fallback placeholders are provided)

Input validation could be enhanced for decimal values

Future Enhancements
Add the ability to save/load counts

Include a breakdown of denominations needed for a target amount

Add printing functionality

Support for older currency denominations

License
MIT License - Free to use and modify

