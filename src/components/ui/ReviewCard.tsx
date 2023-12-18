type ReviewCardProps = {
  img: string;
  author: string;
  review: string;
};

export const ReviewCard = ({ img, author, review }: ReviewCardProps) => {
  return (
    <div className='review-card'>
      <div className='review-card__img'>
        <img src={img} alt='author' />
      </div>
      <div className='review-card__info'>
        <div className='review-card__sub-title'>{`"${review}".`}</div>
        <div className='review-card__title'>{author}</div>
      </div>
    </div>
  );
};
