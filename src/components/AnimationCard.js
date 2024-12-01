import React, { useEffect, useContext } from "react";
import { Container, Image } from "react-bootstrap";
import { Context } from "../index";
import { useParams } from "react-router-dom";
import "./AnimCard.css";

const AnimatedCard = ({}) => {
  const { book } = useContext(Context);
  const { id } = useParams();
  const bookId = parseInt(id);
  const currentBook = book.book.find((book) => book.id === bookId);

  useEffect(() => {
    const startRotate = (event) => {
      const cardItem = event.currentTarget.querySelector('.card_item');
      if (cardItem) {
        const halfHeight = cardItem.offsetHeight / 2;
        const halfWidth = cardItem.offsetWidth / 2;
        cardItem.style.transform = 'rotateX('+-(event.offsetY - halfHeight ) / 5+'deg ) rotateY('+ (event.offsetX - halfWidth ) / 5+'deg )';
        console.log(cardItem.style.transform);
      }
    };

    const stopRotate = (event) => {
      const cardItem = event.currentTarget.querySelector('.card_item');
      if (cardItem) {
        
        cardItem.style.transform = 'rotateX(0)';
      }
    };

    const cards = document.querySelectorAll('.cardlp'); 
    cards.forEach((card) => {
      card.addEventListener('mousemove', startRotate);
      card.addEventListener('mouseout', stopRotate);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', startRotate);
        card.removeEventListener('mouseout', stopRotate);
      });
    };
  }, [book.book, id]);

  return (
    <div className="main-film-image card_item">
      <Image className="cardlp" src={currentBook ? currentBook.img : ''} alt="" />
    </div>
  );
};

export default AnimatedCard;
