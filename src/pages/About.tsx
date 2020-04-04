import React from 'react';

interface IProps {
}

const About = (props: IProps) => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">Информация</h1>
                <p className="lead">Версия приложежния <strong>1.0.0</strong></p>
            </div>
        </div>
    )
};

export default About;