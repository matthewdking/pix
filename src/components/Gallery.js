import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const GalleryContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 3rem;
`;

const GalleryWrapper = styled.div`
  text-align: center;
`;

const ImageWrapper = styled.div`
  margin: 1rem;
  display: inline-block;
  text-align: center;
`;

const ImageOne = styled.img`
  height: 25rem;
  width: 100%;
  margin: 0 auto;
`;

const Image = styled.img`
  height: 6rem;
`;

const ImageLink = styled.a``;

export class Gallery extends Component {
  showGallery = () => {
    if (this.props.pictures.fetched) {
      return (
        <GalleryWrapper>
          {this.props.pictures.pictures.map((picture, index) => {
            if (index === 0) {
              return (
                <ImageWrapper key={index}>
                  <ImageLink href={picture.pageURL}>
                    <ImageOne
                      src={picture.webformatURL}
                      alt={picture.pageURL}
                    />
                  </ImageLink>
                </ImageWrapper>
              );
            } else {
              return (
                <ImageWrapper key={index}>
                  <Image src={picture.previewURL} alt={picture.pageURL} />
                </ImageWrapper>
              );
            }
          })}
        </GalleryWrapper>
      );
    } else if (this.props.pictures.isFetching) {
      return <div>Loading...</div>;
    } else if (this.props.pictures.error) {
      return <div>Sorry the API appears to be down</div>;
    }
    return <div>Select a color to find some pictures</div>;
  };

  render() {
    return <GalleryContainer>{this.showGallery()}</GalleryContainer>;
  }
}

const mapStateToProps = state => ({
  pictures: state.pictures,
});

export default connect(mapStateToProps)(Gallery);
