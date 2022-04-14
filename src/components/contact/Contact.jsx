import './contact.scss';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='left'></div>
      <div className='right'>
        <h1>Contact</h1>
        <form>
          <input type='email' placeholder='email'></input>
          <textarea placeholder='comments'></textarea>
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Contact