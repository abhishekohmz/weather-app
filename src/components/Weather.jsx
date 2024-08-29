import React, { useState } from 'react'
import './Weather.css'
import clearsky from '../images/clear sky.png'
import fog from '../images/fog.png'
import rain from '../images/rain.png'
import thunder from '../images/scattered-thunderstorms.png'
import snow from '../images/snow.png'
import fewclouds from '../images/fewclouds.png'
import icon from '../images/icon.png'
import humidity from '../images/humidity.png'
import wind from '../images/wind.png'
import brocken from '../images/brocken.png'
import { Col, Row } from 'react-bootstrap'




function Weather() {

    const [wicon, setWicon] = useState(clearsky)

    const apikey = '783ef2d97216c1cbcd23ee9c96a5e324'

    const Search = async () => {
        const element = document.getElementsByClassName('city')

        if (element[0].value === '') {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apikey}`
        const response = await fetch(url)
        const data = await response.json()

        const humidity = document.getElementsByClassName("humidity-per")
        const wind = document.getElementsByClassName("wind-speed")
        const temp = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")

        humidity[0].innerHTML = data.main.humidity + '%'
        wind[0].innerHTML = data.wind.speed + 'km/h'
        temp[0].innerHTML = data.main.temp + '°c'
        location[0].innerHTML = data.name

        if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
            setWicon(clearsky)
        }

        else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
            setWicon(brocken)
        }
        else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n') {
            setWicon(rain)
        }
        else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
            setWicon(fewclouds)
        }
        else if (data.weather[0].icon === '11d' || data.weather[0].icon === '11n') {
            setWicon(thunder)
        }
        else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
            setWicon(snow)
        }
        else if (data.weather[0].icon === '50d' || data.weather[0].icon === '50n') {
            setWicon(fog)
        }
        else {
            setWicon(clearsky)
        }
    }




    return (
        <div>

            <div className="bg">
                <div className="container">
                    <div className="input">
                        <input type="text" className="city form-control" placeholder='Search' />
                        <div onClick={() => { Search() }} className='search'>
                            <img src={icon} alt="" />

                        </div>
                    </div>

                    <Row>
                        <Col></Col>
                        <Col lg={5}>
                            <div className='waether-image'>
                                <img src={wicon} alt="" />

                            </div>

                        </Col>
                        <Col lg={5}><div className='weather-temp'>24°c</div>
                            <div className="weather-location">London</div></Col>
                        <Col></Col>

                    </Row>

                    <Row>
                        <Col></Col>
                        <Col lg={10}>
                            <div className="element">
                                <div>
                                    <div>
                                        <img src={humidity} alt="" />
                                    </div>
                                    <div className="humidity">
                                        <div className='humidity-name'>Humidity</div>
                                        <div className='humidity-per'>64%</div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={wind} alt="" />
                                    </div>
                                    <div className="wind">
                                        <div className='wind-name'>wind</div>
                                        <div className='wind-speed'>18 km/h</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>


                </div>
            </div>

        </div>
    )
}

export default Weather