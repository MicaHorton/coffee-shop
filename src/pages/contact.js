import React, { useState } from 'react'
import Layout from '../components/Layout'
import Form from '../styles/Form'
import Alert from '../styles/Alert'

const Contact = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    const [alert, setAlert] = useState(false)

    return (
        <Layout>
            <Form>
                <h1>Contact Me</h1>
                <form name="contact" method="post" netlify>
                    <label>
                        Name
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                        ></input>
                    </label>
                    <label>
                        Email
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        ></input>
                    </label>
                    <label>
                        Message
                        <input
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        ></input>
                    </label>

                    <Alert display={alert}></Alert>

                    <button type="submit" value="Submit">
                        Submit
                    </button>
                </form>
            </Form>
        </Layout>
    )
}

export default Contact
