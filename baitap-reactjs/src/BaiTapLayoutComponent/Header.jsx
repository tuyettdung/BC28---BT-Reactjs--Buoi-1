import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='pb-5' >
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className='container px-lg-5'>
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item ">
                  <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
