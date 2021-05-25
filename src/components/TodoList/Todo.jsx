import React from 'react'

export default class TodoList extends React.Component {
  render(){
    return (
      <ul>
        {this.props.words.map(word => (
          <li key={word.id}>{word.text}</li>
        ))}
      </ul>
    )
  }
}