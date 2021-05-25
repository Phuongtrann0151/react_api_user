import React from 'react'
import PropTypes from 'prop-types';

function TodoList(props){
  const listWords = props.words
  const word = listWords.map(char => (
    <li key={char.id}>{char.text}</li>
  ))
  return <ul>{ word }</ul>
}

TodoList.propTypes = {
  words: PropTypes.string
}

export default TodoList