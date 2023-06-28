import { Component } from 'react';

import fetchPixabay from './Pixabay/fetchPixabay';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from 'components/Modal/Modal';
import Notiflix from 'notiflix';


import { AppStyled } from './App.styled';


class App extends Component {
  state = {
    searchValue: '',
    pageNumber: 1,
    imgArray: [],
    loadMore: false,
    loading: false,
    largeFormat: '',
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { searchValue, pageNumber } = this.state;


    if (
      prevState.searchValue !== searchValue ||
      prevState.pageNumber !== pageNumber
    ) {
      this.setState({ loading: true });

      fetchPixabay(searchValue, pageNumber)
        .then(response =>
          this.setState(state => ({
            imgArray: [...state.imgArray, ...response.data.hits],
            loadMore: pageNumber < Math.ceil(response.data.totalHits / 12),
          }))
        )
        .catch(() => {
          Notiflix.Notify.failure('Sorry, We have a problem');
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
   
  };

  onClickButtonMore = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  onSubmitHandler = searchValue => {
    this.setState({
      searchValue,
      pageNumber: 1,
      imgArray: [],
      loadMore: false,
    });
  };

  onOpenModal = largeFormat => {
    this.setState({ isShow: true, largeFormat: largeFormat });
  };

  onCloseModal = () => {
    this.setState({ isShow: false });
  };

  render() {
    const { loadMore, imgArray, loading, isShow, largeFormat } = this.state;

    return (
      <AppStyled>
        <Searchbar onSubmitHandler={this.onSubmitHandler} />
        {loading && <Loader />}
        <ImageGallery imgArray={imgArray} onClick={this.onOpenModal} />
        {isShow && (
          <Modal onClose={this.onCloseModal} largeFormat={largeFormat} />
        )}
        {loadMore && <Button onClick={this.onClickButtonMore} />}
      </AppStyled>
    );
  }
}
export default App;