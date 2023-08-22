# BVNK Interview Test

Welcome to the BVNK Interview Test React app! This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Follow the instructions below to get started.

## Getting Started

1. Clone this repository to your local machine:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```

3. If the `node_modules` directory doesn't exist, install the project dependencies using Yarn:
   ```bash
   yarn
   ```

## Running the App

To run the app in development mode, use the following command:
```bash
yarn start
```
This will start the app and open it in your default web browser at [http://localhost:3000](http://localhost:3000). The page will reload automatically if you make any edits, and lint errors will be displayed in the console.

## Making a POST Request

When the app is running locally, you need to make a POST request to the following endpoint to retrieve a UUID in postman:
- Endpoint: `https://api.sandbox.bvnk.com/api/v1/pay/summary`
- Payload:
  ```json
  {
      "merchantId": "{{merchant_id}}",
      "type": "IN",
      "amount": 200,
      "currency": "EUR",
      "expiryMinutes": 30,
      "reference": "{{generate_reference}}"
  }
  ```

After making the POST request, you will receive a UUID. Manually edit the URL in your browser to:
```
http://localhost:3000/payin/<UUID>
```
This will render the Accept Quote page and initiate the flow.

## Available Scripts

In addition to the commands mentioned above, here are some additional scripts you can use:

- `yarn test`: Launches the test runner in interactive watch mode. For more information, see the [running tests documentation](https://facebook.github.io/create-react-app/docs/running-tests).

- `yarn build`: Builds the app for production to the `build` folder. This optimized production build can be deployed to your chosen hosting platform.

- `yarn eject`: **Note: this is a one-way operation.** If you're unsatisfied with the build tool and configuration choices, you can `eject` to gain full control over configurations. For more details, refer to the [ejecting documentation](https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-eject).

## Learn More

To learn more about Create React App, check out the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, explore the [React documentation](https://reactjs.org/).

Feel free to reach out if you have any questions or need further assistance. Happy coding!