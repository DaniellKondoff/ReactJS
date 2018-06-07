import React, { Component } from 'react'
import HotelReviewForm from '../hotels/HotelReviewForm'
import FormHelpers from '../common/FormHelpers'
import hotelActions from '../../actions/HotelActions'
import hotelStore from '../../stores/HotelStore'
import toastr from 'toastr'

class HotelReviews extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newReview: {
                rating: 0,
                comment: ''
            },
            error: '',
            hotelReviews: []
        }

        this.handleReviewsRetrieved = this.handleReviewsRetrieved.bind(this)
        this.handleReviewAdded = this.handleReviewAdded.bind(this)

        hotelStore.on(
            hotelStore.eventTypes.REVIEW_CREATED,
            this.handleReviewAdded
        )
        hotelStore.on(
            hotelStore.eventTypes.ALL_REVIEWS_GOT,
            this.handleReviewsRetrieved
        )
    }
    componentDidMount() {
        hotelActions.allReview(this.props.hotelId)
    }
    componentWillUnmount() {
        hotelStore.removeListener(
            hotelStore.eventTypes.REVIEW_CREATED,
            this.handleReviewAdded
        )

        hotelStore.removeListener(
            hotelStore.eventTypes.ALL_REVIEWS_GOT,
            this.handleReviewsRetrieved
        )
    }
    handleReviewChange(event) {
        FormHelpers.handleFormChange.bind(this)(event, 'newReview')
    }
    handleReviewSave(event) {
        event.preventDefault()

        const rating = parseInt(this.state.newReview.rating, 10)

        if (!rating || rating < 1 || rating > 5) {
            this.setState({
                error: 'Rating must be between 1 and 5'
            })
            return
        }

        hotelActions.addReview(this.props.hotelId, this.state.newReview)
        // hotelActions.allReview(this.props.hotelId)
    }
    handleReviewsRetrieved(data) {
        this.setState({
            hotelReviews: data
        })
    }
    handleReviewAdded(data) {
        if(!data.success){
            let error = FormHelpers.getFirstError(data)
            this.setState({error})
        }else{
            // const reviews = this.state.hotelReviews
            // reviews.push(data.review)
            // this.setState({
            //     hotelReviews: reviews
            // })
            hotelActions.allReview(this.props.hotelId)
            toastr.success(data.message)
        }
    }
    render() {
        let hotelReviews = 'No avaialbe reviews'
        if (this.state.hotelReviews.length > 0) {
            hotelReviews = this.state.hotelReviews.map((review, index) => (
                <div key={index}>
                    {review.user} - {review.rating} - {review.comment}
                </div>
            ))
        }

        return (
            <div>
                <h4>Share your oppionio</h4>
                <HotelReviewForm
                    review={this.state.newReview}
                    error={this.state.error}
                    onChange={this.handleReviewChange.bind(this)}
                    onSave={this.handleReviewSave.bind(this)}
                />
                <div>
                    {hotelReviews}
                </div>
            </div>
        )
    }
}

export default HotelReviews