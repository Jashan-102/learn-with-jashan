import React from 'react'

export default function SassIntegration() {
  return (
    <div className='container'>
      SassIntegration:<br />

      1. Install Node.js and npm on your machine, if you haven't already done so.<br />
      2. Create a new React project using create-react-app command in the terminal:
      npx create-react-app my-app
      <br />
      3.Install the required packages for Sass:<br />
      npm install node-sass sass-loader --save-dev<br />
      4. Create a new folder named "scss" in the src directory of your project.<br />

      5. Inside the "scss" folder, create a new file named "styles.scss". This file will contain all your Sass code.<br />

      6. Update your App.js file to import the "styles.scss" file:<br />
      import './scss/styles.scss';<br />

      7. Run your React project using the npm start command in the terminal, and your Sass code will be compiled automatically.<br />
    </div>
  )
}
