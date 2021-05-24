import React from 'react'
import Layout from '../components/Layout'
import Card from '../styles/Card'

const About = () => (
    <Layout>
        <Card>
            <h1>Hi, my name is Mica Horton</h1>
            <p>
                I'm an LAHS student living in the Bay Area who loves to code.
                This website is a tribute to all the projects I've done. Check
                out my{' '}
                <a href="https://www.micahorton.com/projects">projects</a> or
                <a href="https://www.micahorton.com/blog"> blog</a> or learn
                more about me at:
            </p>

            <ul className="icons">
                <li>
                    <i className="fa fa-github"></i>
                    <a
                        href="https://github.com/MicaHorton"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <i className="fa fa-stack-overflow"></i>
                    <a
                        href="https://stackoverflow.com/users/13029356/mica-horton?tab=profile"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Stack Overflow
                    </a>
                </li>
                <li>
                    <i className="fa fa-linkedin-square"></i>
                    <a
                        href="https://www.linkedin.com/in/micahorton/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
            </ul>
        </Card>

        <Card>
            <h1>Languages and Frameworks I Know</h1>
            <p>In order of most experience to least.</p>
            <ul>
                <li>Python</li>
                <li>
                    JavaScript/Node.js
                    <ul>
                        <li>React (with Gatsby, Next.js and Stripe API) </li>
                    </ul>
                </li>
                <li>HTML and CSS</li>
                <li>C++ (mainly in the context of Arduino)</li>
                <li>Pascal</li>
            </ul>
        </Card>

        <Card>
            <h1>Events I've Gone To</h1>
            <ul>
                <li>LAHS Hacks IV</li>
                <li>
                    Superposition Hacks IV (
                    <a
                        href="https://github.com/MicaHorton/hqrecycle"
                        target="_blank"
                        rel="noreferrer"
                        className="italicLink"
                    >
                        see project
                    </a>
                    )
                </li>
                <li>Bay Area Science Fesitval</li>
                <li>NIMBLE Youth Innovation Showcase</li>
            </ul>
        </Card>

        <Card>
            <h1>Other Acheivements</h1>
            <ul>
                <li>California Scolarship Federation Member</li>
                <li>
                    President of Adventure Club, the hiking and camping club
                    focused on going outside even though staying home and
                    programming is fun too. (See our Instagram
                    @lahsadventureclub.)
                </li>
                <li>Passed John Hopkins Center of Talented Youth Assessment</li>
                <li> Received Challenger Merit Scholarship </li>
                <li>
                    Studied Spanish for 5 years. Received the silver metal for
                    the NHS Spanish exam.
                </li>
                <li>
                    Has completed 20 service hours volunteering at the local TV
                    station (the KMVT) as a cinematographer.
                </li>
            </ul>
        </Card>
    </Layout>
)

export default About
