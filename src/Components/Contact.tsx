import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sendMessage = (data) => {
    // a funny joke about politics or smtg idk
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await sendMessage(formData)
    setIsSubmitted(true)
  }

  return (
    <div className="container mt-5">
      {isSubmitted ? (
        <div className="alert alert-success">
          Thank you, dear {formData.name}! Your message has been successfully sent and we will respond to it by email at {formData.email}. Thank you for your patience!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-50 mx-auto">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Send message</button>
        </form>
      )}
    </div>
  )
}

export default Contact
