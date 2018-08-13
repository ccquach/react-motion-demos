import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';
import photos from './photos';

const Wrapper = styled.main`
  text-align: center;
`;

const ImgContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  height: 40rem;
  width: 40rem;
  display: flex;
`;

const Figure = styled.figure`
  flex: 0 0 100%;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
`;

const Slider = styled.form`
  margin-bottom: 3rem;
`;

const Range = styled.input`
  -webkit-appearance: none;
  width: 160px;
  height: 20px;
  background: linear-gradient(to right, #ecf0f1 0%, #bdc3c7 100%);
  background-size: 150px 10px;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  outline: none;
  zoom: 130%;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: #16a085;
    position: relative;
    z-index: 3;
  }
`;

const Arrow = styled.button`
  display: inline-block;
  margin: 0 3rem;
  background-color: transparent;
  border: none;
  color: inherit;
  font-size: 5rem;
  cursor: pointer;
`;

class Slideshow extends Component {
  state = {
    photos,
    current: 0,
    active: 0
  };

  handleChange = e => {
    this.setState({
      current: this.state.active,
      active: +e.target.value
    });
  };

  handleToggle = direction => {
    const { photos, active } = this.state;
    const max = photos.length - 1;
    this.setState({
      current: active,
      active:
        direction === 'left'
          ? active === 0
            ? max
            : active - 1
          : active === max
            ? 0
            : active + 1
    });
  };

  render() {
    const { photos, current, active } = this.state;
    console.log(`current: ${current}, active: ${active}`);
    return (
      <Wrapper>
        {/* Range Slider */}
        <Slider onSubmit={e => e.preventDefault()}>
          <Arrow onClick={() => this.handleToggle('left')}>&lsaquo;</Arrow>
          <Range
            type="range"
            min="0"
            max={photos.length - 1}
            step="1"
            value={active}
            onChange={this.handleChange}
          />
          <Arrow onClick={() => this.handleToggle('right')}>&rsaquo;</Arrow>
        </Slider>
        {/* Photo */}
        <Motion defaultStyle={{ x: current }} style={{ x: spring(active) }}>
          {interpolated => (
            <ImgContainer>
              {photos.map((photo, idx) => (
                <Figure
                  key={idx}
                  style={{
                    transform: `translateX(calc(${interpolated.x} * -100%))`
                  }}
                >
                  <Image src={require(`${photo.url}`)} alt={photo.title} />
                </Figure>
              ))}
            </ImgContainer>
          )}
        </Motion>
      </Wrapper>
    );
  }
}

export default Slideshow;
