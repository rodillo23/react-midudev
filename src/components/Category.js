import React from 'react'
import { Link } from 'wouter'

export const Category = ({name, options}) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {
          options.map(option => {
            return (
              <li key={option}>
                <Link to={`search/${option}`}>{option}</Link>
              </li>
            )
          })
        }
      </ul>

    </div>
  )
}

