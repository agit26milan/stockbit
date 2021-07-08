import React, {useEffect, useState, useMemo} from 'react'
import {Button, Alert, Card, CardBody, CardHeader} from 'reactstrap'
import {connect} from 'react-redux'
import { getAutoCompleteList, getMovieList, resetMoviee } from '../../redux/home/actions'
import {Container, Row, Col} from 'reactstrap'
import SearchComponent from '../../components/Search'
import { filterName, handleParamUrl, isBottomPage, splitUrl } from '../../utils/commons'
import NoImage from '../../assets/images/noimage.png'
import ModalWithClose from '../../components/ModalCustom'
import AutoComplete from './AutoComplete'
import { autoCompleteArray } from './constant'
const Home = (props) => {
    const {home, resetMovieHandle, history } = props
    const [params] = useState({
        page: 1,
        s: null,
        apikey: 'faf7e5bb'
    })
    const [autoCompleteValue, setAutoCompleteValue] = useState([])
    const [querySearch, setQuerySearch] = useState('')
    const {getMovieListSaga} = props
    const [realPage, setRealPage] = useState(1)
    const [showModal, setShowModal] = useState(false)
    const [detailMovie, setDetailMovie] = useState({})
    const [showAutoComplete, setShowAutoComplete] = useState(false)
    const handleSarchMovie = (event) => {
        const {name, value} = event.target
        if (event.charCode === 13) {
            setShowAutoComplete(false)
            const newParam = {
                ...params,
                s: value,
                page: null,
                apikey: null
            }
            history.push({
                pathname: 'home',
                search: handleParamUrl('', newParam)
            })
            if(realPage > 1) {
                setRealPage(1)
             }
   
          }
    }

    const onSearchHandle = (event) => {
        const {value, name} = event.target
        const filtering = autoCompleteArray.filter((a) => filterName(a.toLowerCase(), value.toLowerCase()))
        if(value.length > 0) {
            setAutoCompleteValue(filtering)
            setShowAutoComplete(true)
        } else {
            setShowAutoComplete(false)
        }
        setQuerySearch(value)
    }

    const onResetSearch = () => {
        setQuerySearch('')
        setShowAutoComplete(false)
    }

    const checkBottom = () => {
        const wrappedCommponent = document.getElementById('root')
        const bottomPage = isBottomPage(wrappedCommponent)
        if(bottomPage && !home.loading) {
            setRealPage((prevState) => prevState + 1)
        }
    }

    const toggleModal = () => setShowModal((prevState) => !prevState)
    const onImageClick = (detail) => {
        setDetailMovie(detail)
        setShowModal(true)
    }

    const renderModal = useMemo(() => {
        return (
        <ModalWithClose isOpen={showModal} toggleModal={toggleModal} >
            <div>
                <img data-src={detailMovie.Poster} src={NoImage} className='w-100 lazyload' />
            </div>
        </ModalWithClose>
        )
    }, [showModal])

    const goToMovieDetail = (id) => {
        history.push({
            pathname: 'movie-detail',
            search: `?i=${id}&apikey=${params.apikey}`
        })
    }

    const autoCompleteClick = (value) => {
        const newParam = {...params, s: value}
        setRealPage(1)
        history.push({
            pathname: 'home',
            search: handleParamUrl('', newParam)
        })
    }


    console.log(params, 'saktiono')

    useEffect(() => {
        const urlObj = splitUrl(history.location.search, params)
        setShowAutoComplete(false)
        if(history.location.search) {
            if(params.s !== urlObj.s) {
                resetMovieHandle()
            }
            if(urlObj.s) {
                console.log('masukman2 ')
                const newParam = {...params, s: urlObj.s, page: 1}
                getMovieListSaga(newParam)
                setQuerySearch(urlObj.s)
            }
        } else {
            history.push({
                pathname: 'home',
                search: '?s=Batman'
            })
            setQuerySearch('Batman')
        }
    }, [JSON.stringify(history.location)])

    useEffect(() => {
        document.addEventListener('scroll', checkBottom)
        return () => {
            document.removeEventListener('scroll', checkBottom)
        }
    }, [])

    useEffect(() => {
        const urlObj = splitUrl(history.location.search, params)
        getMovieListSaga({...params, page: realPage, s: urlObj.s})
    }, [realPage])

    return (
        <>
        <Container  >
            <Row>
                <Col id='scroll-container' xs={12} >
                    <SearchComponent value={querySearch} resetSearch={onResetSearch} className='no-border w-100' searchLength={querySearch.length} onSearch={onSearchHandle} defaultValue={params.s} name='s' onKeyPress={handleSarchMovie} containerClassName='w-100 m-auto mt-5 flex p-0 align-center-flex form-control' />
                    {showAutoComplete ? <AutoComplete onClick={autoCompleteClick} data={autoCompleteValue} /> : null}
                    <div className='mt-4' >
                        {home.error ? <Alert color='danger' >{home.error} </Alert> : null}
                       
                        <Row>
                            {home.listMovies.map((movie, index) => (
                                <Col key={index} className='mb-3' xs={12} sm={12} md={12} lg={4} xl={4} >
                                <Card>
                                    <CardHeader className='pointer' >
                                        <img onClick={() => onImageClick(movie)} className='w-100 lazyload' src={NoImage} data-src={movie.Poster} />
                                    </CardHeader>
                                    <CardBody className='pointer' onClick={() => goToMovieDetail(movie.imdbID)} >
                                        <h4>
                                            {movie.Title} ({movie.Type})
                                        </h4>
                                        <div>
                                            <p>{movie.Year}  </p>
                                        </div>
                                    </CardBody>
                                </Card>
                                </Col>
                                
                            ))}
                            </Row>                   
                        
                    </div>
                </Col>
            </Row>
        </Container>
       {renderModal}
        </>
    )
}


const mapStateToProps = (state) => ({
    home: state.Home
})

const mapDispatchToProps = dispatch => ({
    getMovieListSaga: (param) => dispatch(getMovieList(param)),
    resetMovieHandle: () => dispatch(resetMoviee()),
})


export default connect(mapStateToProps, mapDispatchToProps) (Home)