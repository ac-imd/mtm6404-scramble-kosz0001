/**********************************************
 * STARTER CODE
 **********************************************/

/**
 * shuffle()
 * Shuffle the contents of an array
 *   depending the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */
function shuffle (src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  if (typeof src === 'string') {
    return copy.join('')
  }

  return copy
}

/**********************************************
 * YOUR CODE BELOW
 **********************************************/

//1 According to the video, I need to have a word from the array shuffled (already done above^)

//2 I need a list of 10 words to shuffle: 1 dragons, 2 fairy, 3 seashells, 4 surfboard, 5 reggaeton, 6 violin, 7 sushi, 8 hibiscus, 9 family, 10 wrath

const initialWords = ['dragons', 'fairy', 'seashells', 'surfboard', 'reggaeton', 'violins', 'sushi', 'hibiscus', 'family', 'wrath']

//3 I need to create the app component with all the variables of states such as the initial words, the current word being seen, the word in a scrambled state, the points, the strikes, the passes

function App () {
  const [words, setWords] = React.useState(initialWords)
  const [currentWord, setCurrentWord] = React.useState('')
  const [scrambledWord, setScrambledWord] = React.useState('')
  const [points, setPoints] = React.useState(0)
  const [strikes, setStrikes] = React.useState(0)
  const [passes, setPasses] = React.useState(3)
}

//4 I need to allow the first scrambled word to be seen, with the result from a correct guess, an incorrect guess, and the game over when the 3 strikes are hit

React.useEffect(() => {
  if (words.length > 0 && !currentWord) {
    const initialWord = words[0]
    setCurrentWord(initialWord)
    setScrambledWord(shuffle(initialWord))
  }
}, [words, currentWord])

const handleGuess = (event) => {
  event.preventDefault()
  const guess = event.target.elements.guess.value.trim().toLowerCase()
  if (guess === currentWord.toLowerCase()) {
    //this happens when you guess correctly
    setPoints(points + 1)
    handleNextWord()
  } else {
    //this happens when the guess is wrong
    setStrikes(strikes + 1)
    if (strikes === 2) {
      //this makes the game go game over because 3 strikes are reached
      setGameOver(true)
    }
  }
  event.target.reset()
}

//will also need to continuously add in what happens when the pass button is hit and how the pass count will go down by 1

//5 the next shuffled word should be seen and the previous word should disappear and the game over when I've exhausted my word list

//6 I will need to reset the game with a button

//7 I will need to create the HTML template for the layout