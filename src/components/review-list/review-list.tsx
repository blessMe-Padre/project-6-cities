/* eslint-disable */
import { AuthorizationStatus } from '../../const';
import type { CommentAuth, Comment } from '../../types/types';

import Form from '../form/form';
import Review from '../review/review';

type ReviewListProps = {
  reviews: Comment[];
  authorizationStatus: AuthorizationStatus;
  onSubmit: (formData: Omit<CommentAuth, 'id'>) => void
}

const ReviewList = ({ reviews, authorizationStatus, onSubmit }: ReviewListProps) => {
  if (reviews.length === 0) {
    return (
      <section className="property__reviews reviews">
        {authorizationStatus === AuthorizationStatus.Auth && <Form onSubmit={onSubmit} />}
      </section>
    );
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review key={review.id} {...review} />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <Form onSubmit={onSubmit} />}
    </section>
  );
};

export default ReviewList;

