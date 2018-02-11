# Pixabay API :camera:

A mini project using the [Pixabay API](https://pixabay.com/api/docs/)

The user can select a color `red`, `yellow`, `green` or `purple`

The applciation then selects a random search term.

Search terms:

* man
* mountain
* state
* ocean
* country
* building
* cat
* airline
* wealth
* happiness
* pride
* fear
* religion
* bird
* book
* phone
* rice
* snow
* water

This is then sent to the Pixabay API as a searchTerm eg `yellow snow` :smirk:

## Instructions to run

Clone the repositories

```
git clone
```

Install packages

```
npm install
```

You will have to create your own API key [here](). This can then be added to a `config.env` file

```js
REACT_APP_PIXABAY_KEY=/*your key goes here*/
```

Run the app

```
npm start
```
