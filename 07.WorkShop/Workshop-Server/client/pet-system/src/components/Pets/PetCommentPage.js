import React, { Component } from 'react'
import PetsCommentsForm from '../Pets/PetsCommentForm'
import petAction from '../../actions/PetActions'
import petStore from '../../stores/PetStore'
import FormHelpers from '../common/FormHelpers'

class PetCommentPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newComment: {
                message: ''
            },
            allComments: [],
            error: ''
        }

        this.handleCommentPosted = this.handleCommentPosted.bind(this)
        this.handleAllCommentsGot = this.handleAllCommentsGot.bind(this)
        petStore.on(
            petStore.eventTypes.CREATE_PET,
            this.handleCommentPosted
        )

        petStore.on(
            petStore.eventTypes.POSTS_GOT,
            this.handleAllCommentsGot
        )
    }
    componentDidMount() {
        petStore.getPosts(this.props.petId)
    }
    componentWillUnmount() {
        petStore.removeListener(
            petStore.eventTypes.CREATE_PET,
            this.handleCommentPosted
        )
        petStore.removeListener(
            petStore.eventTypes.POSTS_GOT,
            this.handleAllCommentsGot
        )
    }
    handleChange (event) {
        FormHelpers.handleFormChange.bind(this)(event, 'newComment')
    }
    handlePetCommentPost (event) {
        event.preventDefault()
        petAction.createPost(this.props.petId, this.state.newComment)
    }
    handleCommentPosted (data) {
        if(!data.success){
            let error = FormHelpers.getFirstError(data)
            this.setState({error})
        }else{
            console.log(this.props.petId)
            petStore.getPosts(this.props.petId)
        }
    }
    handleAllCommentsGot(data){
        this.setState({
            allComments:data
        })
    }
    render() {
        let petComments = 'No current comments'
        if(this.state.allComments.length > 0) {
            petComments = this.state.allComments.map((comment, index) => (
                <div key={index}>
                    {comment.message} - {comment.user}
                </div>
            ))
        }
        return (
            <div>
                <h4>Share your oppionion</h4>
                <PetsCommentsForm
                    message={this.state.newComment}
                    onChange={this.handleChange.bind(this)}
                    onPost={this.handlePetCommentPost.bind(this)}
                />
                <div>
                    {petComments}
                </div>
            </div>
        )
    }
}

export default PetCommentPage
