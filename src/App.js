import  React, { useState, useEffect } from 'react';

import Today from './components/Today'
import Weather from './components/Weather'
import Search from './components/Search'
import IconLinks from './components/IconLinks'
import Quote from './components/Quote'
import { Col, Row, Container } from 'react-bootstrap'

function App() {
  //const { lat, long, error } = usePosition()
  const [ currPos, setPosition ] = useState(null)


  useEffect(() => {
    const geo = navigator.geolocation
    if (!geo) {
      alert("please enable geolocation")
      return
    } else {
      geo.getCurrentPosition((position) => {
        setPosition(position)
      })
    }
    }, [])

    return (
      <Container fluid className="App poppins-font">
        <Row className="info-container">
          <Col>
            <Today className=""/>
          </Col>
          <Col className="weather-container">
            {currPos != null && <Weather position = {currPos} className=""/>}
          </Col>
        </Row>
        <Row>
          <Search />
        </Row>
        <Row>
          <IconLinks />
        </Row>
        <Row>
          <Quote />
        </Row>
      </Container>
    );
  }

export default App;
