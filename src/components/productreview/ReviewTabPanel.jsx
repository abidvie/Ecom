import React, { useState } from "react";
import Rating from "@mui/material/Rating";

const initialReviews = [
  {
    name: "Ayesha Rahman",
    rating: 4,
    comment: "Really liked the quality and fast delivery! Fits well and looks stylish.",
  },
  {
    name: "Hasan Kabir",
    rating: 3,
    comment: "Product is good, but packaging could be improved. Overall satisfied.",
  },
];

function ReviewTabPanel() {
  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment && newReview.rating > 0) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", rating: 0, comment: "" });
      setShowForm(false);
    }
  };

  return (
  
    
      <div className="container">
        <div className="Reviews space-y-5">
          <h2 className="text-xl font-semibold text-gray-700">Customer Reviews</h2>

          {reviews.map((review, index) => (
            <div key={index} className="review border rounded p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">{review.name}</span>
                <Rating value={review.rating} readOnly size="small" />
              </div>
              <p className="text-sm text-gray-600">{review.comment}</p>
            </div>
          ))}

          {!showForm ? (
            <div className="text-right">
              <button
                onClick={() => setShowForm(true)}
                className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
              >
                Write a Review
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 border rounded p-4 mt-4 bg-gray-50">
              <div>
                <label className="block font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full border px-3 py-1.5 rounded"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Rating</label>
                <Rating
                  value={newReview.rating}
                  onChange={(e, newValue) => setNewReview({ ...newReview, rating: newValue })}
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Comment</label>
                <textarea
                  rows="3"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full border px-3 py-1.5 rounded"
                  required
                />
              </div>
              <div className="text-right space-x-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Submit Review
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    
  );
}

export default ReviewTabPanel;
