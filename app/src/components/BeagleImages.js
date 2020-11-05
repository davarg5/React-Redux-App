import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchBeagles } from './../store/actions';

import styled from 'styled-components';

const Image = styled.img`
    width: 10%;
    border-radius: 10px;
    margin: 1%;
`

const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin: auto;
`

const BeagleImages = (props) => {
    useEffect(() => {
        props.fetchBeagles();
    }, []);

    return(
        <div>
            <h1>Beagle Images</h1>
            {props.isLoading ? <p>Loading images...</p> : null}
            {props.error ? <p>{props.error}</p> : null}
            <ImageContainer>
            {props.beagleData.map(image => {
                return(
                        <Image src={image} />
                )
            })}
            </ImageContainer>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        beagleData: state.beagleData,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchBeagles })(BeagleImages);