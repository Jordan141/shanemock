import React from 'react'

const HEADLINE = "Personal Training"
const SUBLINE = "FOR ALL YOUR FITNESS NEEDS"

export default () => (
    <div id="home" className="content-section">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h1>{HEADLINE}</h1>
                    <h5>{SUBLINE}</h5>
                </div>
            </div>
        </div>
    </div>
)