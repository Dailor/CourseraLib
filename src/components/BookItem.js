import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import Image from "react-bootstrap/Image";
import save from "../assets/icons/save.svg";
import { Context } from "..";
import saved from "../assets/icons/saved.png";
import { useHistory } from "react-router-dom";
import { ABOUTBOOK_ROUTE , BUY_ROUTE } from "../utilis/consts";
import { Link } from "react-router-dom";

const BookItem = observer(({ book, onEdit }) => {
  const { book: bookStore } = useContext(Context);
  const history = useHistory();

  const handleToggleToRead = () => {
    bookStore.setToRead(book.id, !book.toRead);
  };



  return (
    <div
      className="main-card"
    >
      <div className="main-card-left">
        <div className="main-film-img cardlp ">
          <Image src={book.img} />
        </div>
        <div className="main-film-info">
         <span>{book.title}</span>
         <span> {book.author}</span>
         <span>
          {book.pageCount}стр, {book.price}₸
          </span>

      
          <button className="main-card-info-button" onClick={() => history.push(ABOUTBOOK_ROUTE + "/" + book.id)}>
            <Image src="/images/icons/play.svg" alt="" />
            Читать
          </button>

        </div>
      </div>
      <div className="main-card-right">
        <Link to={BUY_ROUTE + "/" + book.id}>
        <button
          className="main-card-info-button text-center"
          style={{ padding: "10px" }}
          onClick={() => history.push(BUY_ROUTE + "/" + book.id)}
        >
          Купить
        </button>
        </Link>
 

        {book.toRead ? (
          <button
            className="main-card-info-button"
            onClick={handleToggleToRead}
          >
            <Image
              className="main-card-info-button-img"
              src={saved}
              alt=""
              style={{ width: "15%", height: "20px" }}
            />
            Сохранено
          </button>
        ) : (
          <button
            className="main-card-info-button"
            onClick={handleToggleToRead}
          >
            <Image src={save} alt="" />
            Буду читать
          </button>
        )}
      </div>
    </div>
  );
});

export default BookItem;
