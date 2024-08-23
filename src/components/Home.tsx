import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewer from './Viewer';
import MovieGrid from './MovieGrid';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect } from 'react';
import { getAllMovies } from '../features/movie/actions';

interface HomeProps { }

const Home: React.FC<HomeProps> = (props) => {
    const dispatch = useDispatch();
    const { loading,
        recommended,
        newDisney,
        originals,
        trending,
        error } = useSelector((state: RootState) => state.movies);

    useEffect(() => {
        dispatch(getAllMovies());
    }, [dispatch]);
    
    return (
        <Container>
            <ImgSlider />
            <Viewer />
            {/* Recommended */}            
            <MovieGrid movies={recommended} title='Recommended for you' />
            {/* New Disney */}
            <MovieGrid movies={newDisney} title='New to Disney' />
            {/* Originals */}
            <MovieGrid movies={originals} title='Originals' />
            {/* Trending */}
            <MovieGrid movies={trending} title='Trending' />
        </Container>
    );
};

export const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 70px);
    overflow-x: hidden;
    display: block;
    top: 70px;
    padding: 0 calc(3.5vw + 5px);
    &:after {
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home;