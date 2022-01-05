import React, { useState } from 'react';
import Carousel from '../components/carousel/Carousel';
import Digital from '../components/sections/Portfolio/Digital/Digital';
import Print from '../components/sections/Portfolio/Print/Print';
import Translation from '../components/sections/Portfolio/Translation/Translation';

function Porfolio() {

    const [categoryArray, setCategoryArray] = useState({
        print: true,
        digital: false,
        translation: false,
        media: false}
    );
      // name = selected categ
    const handleClick = (name) => {
        let categoryAux = {
        print: false,
        digital: false,
        translation: false,
        media: false
        }
        if (!name) {
          // name = vacío -> los cierra todos
        setCategoryArray(categoryAux)
        } else {
        setCategoryArray({
        ...categoryAux,
        [name] : true
        })}
    };

    let currentCategory = Object.keys(categoryArray).filter(function(category) {
        return categoryArray[category]
    });

    let renderCurrentCategory = () => {
        switch (currentCategory.toString()) {
        case 'print':
            return <Print />
        case 'digital':
            return <Digital />
        case 'translation':
            return <Translation />
        case 'media':
            return <Carousel />
        default:
            console.log("No Funciona")
            break;
    
        }
    };

    console.log(currentCategory.toString() + 'Files');

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent work</span>

            <div className="portfolio__container container">
                <div className="portfolio__tabs">
                    <div className="portfolio__button button--flex" onClick={()=> handleClick("print")} style={{color: categoryArray.print? "white":"", backgroundColor: categoryArray.print? "var(--first-color)":""}} >
                            Print
                    </div>
                    <div className="portfolio__button button--flex" onClick={()=> handleClick("digital")} style={{color: categoryArray.digital? "white":"", backgroundColor: categoryArray.digital? "var(--first-color)":""}} >
                            Digital
                    </div>
                    <div className="portfolio__button button--flex" onClick={()=> handleClick("translation")} style={{color: categoryArray.translation? "white":"", backgroundColor: categoryArray.translation? "var(--first-color)":""}} >
                            Translation
                    </div>
                    <div className="portfolio__button button--flex" onClick={()=> handleClick("media")} style={{color: categoryArray.media? "white":"", backgroundColor: categoryArray.media? "var(--first-color)":""}} >
                            Media
                    </div>
                </div>

            {renderCurrentCategory()}
            
            </div>
        </section>
    )
}

export default Porfolio
