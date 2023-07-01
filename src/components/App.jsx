import { useEffect, useState } from 'react';

import fetchPixabay from './Pixabay/fetchPixabay';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from 'components/Modal/Modal';
import Notiflix from 'notiflix';


import { AppStyled } from './App.styled';


const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [imgArray, setImgArray] = useState([]);
  const [largeFormat, setLargeFormat] = useState('');
  const [loadMore, setLoadMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (searchValue) {
      setLoading(true);
      fetchPixabay(searchValue, pageNumber)
        .then(response => {
          return (
            setImgArray(imgArray => [...imgArray, ...response.data.hits]),
            setLoadMore(pageNumber < Math.ceil(response.data.totalHits / 12))
          );
        })
        .catch(() => {
          Notiflix.Notify.failure('Sorry, We have a problem');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [searchValue, pageNumber]);

  const onClickButtonMore = () => {
    setPageNumber(pageNumber => pageNumber + 1);
  };

  const onSubmitHandler = searchValue => {
    setSearchValue(searchValue);
    setPageNumber(1);
    setImgArray([]);
    setLoadMore(false);
  };

  const onOpenModal = largeFormat => {
    setIsShow(true);
    setLargeFormat(largeFormat);
  };

  const onCloseModal = () => {
    setIsShow(false);
  };

  return (
    <AppStyled>
      <Searchbar onSubmitHandler={onSubmitHandler} />
      {loading && <Loader />}
      <ImageGallery imgArray={imgArray} onClick={onOpenModal} />
      {isShow && <Modal onClose={onCloseModal} largeFormat={largeFormat} />}
      {loadMore && <Button onClick={onClickButtonMore} />}
    </AppStyled>
  );
};

export default App;
