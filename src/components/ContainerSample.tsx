import React, { FC } from 'react';
import { JsxElement } from 'typescript';

const TitleContext = React.createContext('');

const Title = () => {
    return (
        <TitleContext.Consumer>
            {(title) => {
                return <h1>{title}</h1>;
            }}
        </TitleContext.Consumer>
    );
};

const Header = () => {
    return (
        <div>
            <Title />
        </div>
    );
};

const Page = () => {
    const title = 'React Book';

    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    );
};

export default Page;
