import React from 'react';
import BaseSlideComponent from '../base-slide';

export default class SlideComponent extends BaseSlideComponent {

    render() {

        return (
            <div className={this._getSlideClassName()}>
                <div className="contents">
                    <h1>React &amp; Three.js</h1>
                    <h2>React All The Things!</h2>
                    <img src="/images/X-All-The-Y.jpg" alt="All the things"/>
                    <p>Peter O'Shaughnessy</p>
                </div>
            </div>
        );

    }

}
