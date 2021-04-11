import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment} from '../../actions/facility-actions'

const CommentForm = ({facilityId, addComment}) => {

  const [text, setText] = useState('')

  return (
    <div>
      <div className='bg-primary p'>
        <h3>Leave a review about this tennis facility</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addComment(facilityId, {text});
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Leave a review'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  )
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
}

export default connect(null, {addComment})(CommentForm)