import React, { Component } from 'react'
import "./Home.css"
import QuizzComp from './QuizzComp'
import HomeNavBar from './HomeNav'

class Home extends Component {
    render() {
        return (
            <div>
                <HomeNavBar />
                <h1 className= "dashboard">Dashboard</h1>
                <div className = 'wrapper'>
                    <QuizzComp quizzName = 'quizz1' quizzDesc = 'quizz description lorem lorem ispum hello' />
                    <QuizzComp />
                    <QuizzComp />
                    <QuizzComp />
                    <QuizzComp />
                    <QuizzComp />
            
                </div>
            </div>
        )
    }
}

export default Home
