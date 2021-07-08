import React, {useEffect} from 'react'
import {Container, Row, Col, Alert} from 'reactstrap'
import { getMovieDetail } from '../../redux/actions'
import {connect} from 'react-redux'
import CenterLoading from '../../components/Loading'
const MovieDetail = (props) => {
    const {getDetalFilm, history, detail} = props
    useEffect(() => {
        if(history.location && history.location.search.includes("?i=")) {
            getDetalFilm(history.location.search)
        } else {
            history.goBack()
        }
    }, [])

    return (
        <Container>
            <Row className='mt-4' >
                {detail.error ? <Alert  color='danger' > {detail.error} </Alert> : null}
                {!detail.loading && detail.detail ? <Col xs={12} >
                    <Row>
                        <Col className='flex justify-center' xs={12} sm={12} md={12} xl={4} lg={4} >
                        <div>
                        <img src={detail.detail.Poster} />
                    </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} xl={4} lg={4} >
                            <p> Title : {detail.detail.Title} </p>
                            <p> Year : {detail.detail.Year} </p>
                            <p> Rated : {detail.detail.Rated} </p>
                            <p> Released : {detail.detail.Released} </p>
                            <p> Genre : {detail.detail.Genre} </p>
                            <p> Director : {detail.detail.Director} </p>
                            <p> Writer : {detail.detail.Writer} </p>
                            <p> Actors : {detail.detail.Actors} </p>
                            <p> Language : {detail.detail.Language} </p>
                            <p> Awards : {detail.detail.Awards} </p>
                            <p> Metascore : {detail.detail.Metascore} </p>
                            <p> IMDB Rating : {detail.detail.imdbRating} </p>
                            <p> IMDB Votes : {detail.detail.imdbVotes} </p>
                            <p> Type : {detail.detail.Type} </p>
                            <p> Revenue : {detail.detail.BoxOffice} </p>
                        </Col>
                    </Row>

                </Col> : <CenterLoading /> }
                
            </Row>
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    getDetalFilm: (params) => dispatch(getMovieDetail(params))
})
const mapStateToProps = state => ({
    detail: state.Detail
})



export default connect(mapStateToProps, mapDispatchToProps) (MovieDetail)