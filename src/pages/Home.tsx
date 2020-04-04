import React from 'react';
import Search from '../component/Search';
import Card from '../component/Card';

interface IProps {
}

const Home = (props: IProps) => {
    const cards = new Array(15).fill('').map((_, i) => i);

    return (
        <React.Fragment>
            <Search/>
            <div className={'row'}>

                {
                    cards.map(card => {
                        return (
                            <div className={'col-sm-4 mb-4'} key={card}>
                                <Card/>
                            </div>
                        )
                    })
                }

            </div>

        </React.Fragment>
    )
};

export default Home;