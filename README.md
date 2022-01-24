# Mean Wordle

- The real Wordle can be found here: [here](https://www.powerlanguage.co.uk/wordle/)
- A working demo of this app can be found here: <TODO>

Wordle has exploded in popularity, but I found that it's missing one thing: it's not mean enough. This is a clone of the very popular game with a few extra rules that make it much less forgiving. The added rules are:
* If you attempt a word that doesn't exist, you lose a turn and get no information from the letters
* When a letter has been shown to be present in the word, you will lose a turn if you don't use it in future guesses
* When a letter is in the correct place, you will lose a turn if you don't keep it in the same place
* If you attempt a letter that you know isn't in the word, you will lose a turn

These changes remove some of the more common strategies, like eliminating letters by guessing words you know can't be correct. It also punishes trying words that the player doesn't definitely know exist, because if they guess and it's wrong, they lose that turn. Essentially, it takes a fun little word game and adds some extra frustration.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
