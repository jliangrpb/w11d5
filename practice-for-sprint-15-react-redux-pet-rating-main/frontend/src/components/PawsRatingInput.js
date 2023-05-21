import { useEffect, useState } from 'react';

const PawsRatingInput = ({ rating, disabled, onChange }) => {
  const [activeRating, setActiveRating] = useState(rating);

  useEffect(() => {
    setActiveRating(rating)
  }, [rating])

  function determineFill(value) {
    let num = (disabled) ? rating : activeRating;
    if (num >= value) {
        return "filled";
    } else {
        return "empty";
    }
  }

  return (
    <>
    <div className="rating-input" onMouseLeave={() => setActiveRating(rating)}>
        <div className={determineFill(1)}
             onMouseEnter={() => setActiveRating(1)}
             onClick={() => onChange({target: {value: 1}})}>
            <i className="fa fa-paw"></i>
        </div>
        <div className={determineFill(2)}
             onMouseEnter={() => setActiveRating(2)}
             onClick={() => onChange({target: {value: 2}})}>
            <i className="fa fa-paw"></i>
        </div>
        <div className={determineFill(3)}
             onMouseEnter={() => setActiveRating(3)}
             onClick={() => onChange({target: {value: 3}})}>
            <i className="fa fa-paw"></i>
        </div>
        <div className={determineFill(4)}
             onMouseEnter={() => setActiveRating(4)}
             onClick={() => onChange({target: {value: 4}})}>
            <i className="fa fa-paw"></i>
        </div>
        <div className={determineFill(5)}
             onMouseEnter={() => setActiveRating(5)}
             onClick={() => onChange({target: {value: 5}})}>
            <i className="fa fa-paw"></i>
        </div>
    </div>
    </>
  );
};

export default PawsRatingInput;
