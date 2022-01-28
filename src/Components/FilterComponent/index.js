import React from 'react';
import { GridContainer } from './index.styled';

const FilterComponent = props => {
    const addFilter = (id) => {
        props.setFiltersStyles([...props.filterStyles, id]);
    }

    const addFilterQuiality = (id) => {
        props.setFiltersQuality([...props.filterQuality, id]);
    }

    const removeFilter = (id) => {
        props.setFiltersStyles(props.filterStyles.filter(item => item !== id));
    };

    const clearAll = () => {
        props.setFiltersStyles([]);
        props.setFiltersQuality([]);
        props.clear();
    };
    return (
        <GridContainer>
            <p>Filter by:</p>
            <div className="dropdown">
                <svg style={{cursor: 'pointer'}} width="20px" height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="filter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-filter fa-w-16 fa-3x"><path fill="currentColor" d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path></svg>
                <div className="dropdown-content">
                    <p>Style</p>
                    <p>Quality</p>
                    <div>
                        {props.designs.map((object, i) => <div onClick={() => addFilter(object.id)} key={i + 'label'} className="containerStyle"><p>{object.label}</p></div>)}
                    </div>
                    <div>
                        {props.quality.map((object, i) => {
                            switch (object.id) {
                                case 5:
                                    return (<div onClick={() => addFilterQuiality(5)} className={`containerStars`} key={i + 'box'}>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        </div>
                                        )
                                case 4:
                                    return (<div onClick={() => addFilterQuiality(4)} className={`containerStars`} key={i + 'box'}>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        </div>
                                        )
                                case 3:
                                    return (<div onClick={() => addFilterQuiality(3)} className={`containerStars`} key={i + 'box'}>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        </div>
                                        )
                                case 2:
                                    return (<div onClick={() => addFilterQuiality(2)} className={`containerStars`} key={i + 'box'}>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        </div>
                                        )
                                case 1:
                                    return (<div onClick={() => addFilterQuiality(1)} className={`containerStars`} key={i + 'box'}>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        </div>
                                        )
                              }
                            }
                        )}
                    </div>
                </div>
            </div>
            <div className="selectedOptions">
                {props.filterStyles.map((x, i) => {
                    let item = props.designs.find(item => item.id === x);
                    if (item) { 
                        return <div key={i + 'selected'} className="containerSelected">{item.label}<i onClick={() => removeFilter(item.id)} className="fa fa-times-circle" aria-hidden="true"></i></div>;
                    }      
                }).filter(item => item !== undefined)}
            </div>
            <div className="clearButton">
                <p onClick={() => clearAll()}>Clear all</p>
            </div>
        </GridContainer>
    )
}

export default FilterComponent