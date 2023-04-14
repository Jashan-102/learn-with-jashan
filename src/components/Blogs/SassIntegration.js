import React from 'react'

export default function SassIntegration() {
  return (
    <div>
      SassIntegration:

      1. Install Node.js and npm on your machine, if you haven't already done so.
      2. Create a new React project using create-react-app command in the terminal:
      npx create-react-app my-app

      3.Install the required packages for Sass:
      npm install node-sass sass-loader --save-dev
      4. Create a new folder named "scss" in the src directory of your project.

      5. Inside the "scss" folder, create a new file named "styles.scss". This file will contain all your Sass code.

      6. Update your App.js file to import the "styles.scss" file:
      import './scss/styles.scss';

      7. Run your React project using the npm start command in the terminal, and your Sass code will be compiled automatically.
    </div>
  )
}
