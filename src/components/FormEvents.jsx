Ṅimport { useState } from 'react'
import '../styles/FormEvents.css'

function FormEvents() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [feedback, setFeedback] = useState('')
  
  const [focusedField, setFocusedField] = useState(null)
  const [blurredField, setBlurredField] = useState(null)
  const [changeLog, setChangeLog] = useState([])

  // onChange handler - fires every time input value changes
  const handleInputChange = (e, fieldName) => {
    const value = e.target.value
    
    if (fieldName === 'username') {
      setUsername(value)
    } else if (fieldName === 'email') {
      setEmail(value)
    } else if (fieldName === 'password') {
      setPassword(value)
    } else if (fieldName === 'feedback') {
      setFeedback(value)
    }

    // Log the change
    const timestamp = new Date().toLocaleTimeString()
    setChangeLog(prev => [...prev, `${timestamp} - ${fieldName}: "${value}"`].slice(-5))
  }

  // onFocus handler - fires when input gets focus
  const handleFocus = (fieldName) => {
    setFocusedField(fieldName)
    console.log(`Focused on: ${fieldName}`)
  }

  // onBlur handler - fires when input loses focus
  const handleBlur = (fieldName, value) => {
    setBlurredField(fieldName)
    console.log(`Blurred from: ${fieldName}`)
    
    // Validation example
    if (fieldName === 'email' && value && !value.includes('@')) {
      alert('Please enter a valid email')
    }
  }

  const handleReset = () => {
    setUsername('')
    setEmail('')
    setPassword('')
    setFeedback('')
    setChangeLog([])
    setFocusedField(null)
    setBlurredField(null)
  }

  return (
    <div className="form-events-container">
      <div className="form-section">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2>Form Events Demo</h2>
          
          <form className="event-form" onSubmit={(e) => { e.preventDefault() }}>
          {/* Username Field */}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => handleInputChange(e, 'username')}
              onFocus={() => handleFocus('username')}
              onBlur={() => handleBlur('username', username)}
              className={focusedField === 'username' ? 'focused' : ''}
              placeholder="Enter username"
            />
            <small>{focusedField === 'username' && '✓ Field is focused'}</small>
            <small>{blurredField === 'username' && '✓ Just left this field'}</small>
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => handleInputChange(e, 'email')}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email', email)}
              className={focusedField === 'email' ? 'focused' : ''}
              placeholder="Enter email"
            />
            <small>{focusedField === 'email' && '✓ Field is focused'}</small>
            <small>{blurredField === 'email' && '✓ Just left this field'}</small>
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => handleInputChange(e, 'password')}
              onFocus={() => handleFocus('password')}
              onBlur={() => handleBlur('password', password)}
              className={focusedField === 'password' ? 'focused' : ''}
              placeholder="Enter password"
            />
            <small>{focusedField === 'password' && '✓ Field is focused'}</small>
            <small>{blurredField === 'password' && '✓ Just left this field'}</small>
          </div>

          {/* Textarea Field */}
          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => handleInputChange(e, 'feedback')}
              onFocus={() => handleFocus('feedback')}
              onBlur={() => handleBlur('feedback', feedback)}
              className={focusedField === 'feedback' ? 'focused' : ''}
              placeholder="Enter your feedback"
              rows="4"
            />
            <small>{focusedField === 'feedback' && '✓ Field is focused'}</small>
            <small>{blurredField === 'feedback' && '✓ Just left this field'}</small>
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button type="button" onClick={handleReset} className="btn-reset">
              Reset Form
            </button>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        </form>
        </div>
      </div>

      {/* Change Log Section */}
      <div className="info-section">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3>onChange Event Log</h3>
          <div className="change-log">
            {changeLog.length > 0 ? (
              <ul>
                {changeLog.map((log, index) => (
                  <li key={index}>{log}</li>
                ))}
              </ul>
            ) : (
              <p className="empty-log">Start typing to see onChange events...</p>
            )}
          </div>
        </div>
      </div>

      {/* Current State Display */}
      <div className="info-section">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3>Current State</h3>
          <div className="state-display">
            <p><strong>Username:</strong> {username || '(empty)'}</p>
            <p><strong>Email:</strong> {email || '(empty)'}</p>
            <p><strong>Password:</strong> {password ? '••••••' : '(empty)'}</p>
            <p><strong>Feedback:</strong> {feedback || '(empty)'}</p>
            <p><strong>Currently Focused:</strong> {focusedField || 'None'}</p>
            <p><strong>Last Blurred:</strong> {blurredField || 'None'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormEvents
