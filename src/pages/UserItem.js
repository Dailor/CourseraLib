import React, { useContext } from 'react';
import { Context } from '..';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { observer } from 'mobx-react-lite';

const UserItem = observer(({user}) => {
    const { userAuth: userStore } = useContext(Context);
    const history = useHistory();


return (
    <div
      className="main-card"
    >
      <div className="main-card-left">
        <div className="main-film-img cardlp ">
          {/* <Image src={book.img} /> */}
          <h4>Фото надо поставить </h4>
        </div>
        <div className="main-film-info">
         <span>{user.id}</span>
         <span> {user.name}</span>
         {/* <span>
          {book.pageCount}стр, {book.price}₸
          </span> */}

      
          {/* <button className="main-card-info-button" onClick={() => history.push(ABOUTBOOK_ROUTE + "/" + book.id)}>
            <Image src="/images/icons/play.svg" alt="" />
            Читать
          </button> */}

        </div>
      </div>
      {/* <div className="main-card-right">
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
      </div> */}
    </div>
  );
});

export default UserItem;