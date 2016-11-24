import React from 'react';

export default () => (
    <div className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
                <span className="navbar-brand">
                    SticWall
                </span>
            </div>
            <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li className="active">
                        <a href="./">
                            <span className="glyphicon glyphicon-pushpin"></span>
                            Добавить стикер
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);
