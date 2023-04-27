import emailjs from 'emailjs-com'
import { useRef } from 'react'

const Form = () => {
  const user_id='mDsNtI88Avf_-yq3f'
  const service_id='service_abekmc5'
  const template_id='template_547c7af'

  const form=useRef()

  const sendEmail= (e) =>{
    e.preventDefault()
    emailjs.sendForm(
      service_id,
      template_id,
      form.current,
      user_id
    )
    .then(
      (result) => {
        console.log(result.text)
        alert('Success!')
      },
      (error) => {
        console.log(error.text)
        alert('Failed..',error)
      }
    )
  }
  
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='row row-form'>
        <div className='col-6 '>

          <input
            className='input'
            name='name'
            id='name'
            type='text'
            placeholder='Full Name'
          />
        </div>
        <div className='col-6 '>

          <input
            className='input'
            name='email'
            id='email'
            type='text'
            placeholder='Email'
          />
        </div>
      </div>
      <div className='row rowText-Btn my-1'>
        <div className='inputTextarea'>
          <textarea
            className='Textarea'
            name='message'
            id='message'
            placeholder='Message'
            rows={3}
          />
        </div>
        <div className='div-btn'>
          <button
            className='btn btn-dark btn-send'
            type='submit'
          >
            SEND
          </button>
        </div>

      </div>
    </form>

  )
}

export default Form
