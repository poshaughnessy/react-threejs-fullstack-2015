import React from 'react';
import BaseSlideComponent from './base-slide';

export default class SlideComponent extends BaseSlideComponent {

    render() {

        return (
            <div className={this._getSlideClassName()}>
                <div className="contents">
                    <h2>First Method</h2>
                    <pre>
                        <code>
                        {'componentDidMount: function() {\n' +
                        '  ...\n' +
                        '  Scene.init(this);\n' +
                        '}'}
                        </code>
                    </pre>
                </div>
            </div>
        );

    }

}
