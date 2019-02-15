# ProductHunt Floating Prompt

⚡️ Invite your users to support you on product hunt with this floating prompt (and mobile responsive).

## Demo
Coming soon.

## How to use
The ProductHunt Floating Prompt is very easy to use, just copy paste the following code or use the npm package.
A few customization are availables check the options below.

### Easy way (using the JSDelivr CDN)
Just add this code to your html page:
```html
<script src="https://cdn.jsdelivr.net/npm/producthunt-floating-prompt/lib/producthunt-floating-prompt.min.js"></script>
<script>
  FloatingPrompt({name:'GitNews', url:'https://www.producthunt.com/posts/gitnews'});
</script>
```

### Using NPM
```sh
npm install producthunt-floating-prompt
```

Then add the following javascript code:
```javascript
import FloatingPrompt from 'producthunt-floating-prompt';

FloatingPrompt({name:'GitNews', url:'https://www.producthunt.com/posts/gitnews'});
```

## Options
Here are the option availables:
```javascript

const options = {
  name: 'My super product'
  url: 'https://www.producthunt.com/posts/my-super-product',
  text: 'My customized text', // default: Hi, do you like ${name} ? Don't forget to show your love on Product Hunt 🚀
  buttonText: 'My customized button', // default: ${name} on Product Hunt
  width: '500px', // default: 300px
  bottom: '32px', // default: 32px - postition from the bottom
  right: 'unset', // default: 32px - position from the right
  left: '32px', // default: unset - position from the left
  colorOne: 'red', // default: #da552f - first color of the gradient
  colorTwo: 'blue', // default: #ea8e39 - second color of the gradient
  saveInCookies: false // default: true - if true it will use localStorage to appear only once
}

FloatingPrompt(options);
```


## Getting started

1. Setting up the name of your library
  * Open `webpack.config.js` file and change the value of `libraryName` variable.
  * Open `package.json` file and change the value of `main` property so it matches the name of your library.
2. Build your library
  * Run `yarn install` (recommended) or `npm install` to get the project's dependencies
  * Run `yarn build` or `npm run build` to produce minified version of your library.
3. Development mode
  * Having all the dependencies installed run `yarn dev` or `npm run dev`. This command will generate an non-minified version of your library and will run a watcher so you get the compilation on file change.
4. Running the tests
  * Run `yarn test` or `npm run test`

## Development

* `yarn build` or `npm run build` - produces production version of your library under the `lib` folder
* `yarn dev` or `npm run dev` - produces development version of your library and runs a watcher
* `yarn test` or `npm run test` - well ... it runs the tests :)
* `yarn test:watch` or `npm run test:watch` - same as above but in a watch mode

## To do

- [x] Do the getting started
- [x] Implement the library
- [x] Add closing effect
- [x] Add memory cookies
- [x] Make the options more convenients
- [x] Push position as style
- [x] Update the licence
- [ ] Deploy npm package
- [ ] Update the readme
- [ ] Make a demo website