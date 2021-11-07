import React from 'react'
import {
    CategoryWrapper,
    Title,
    Flex,
} from '.';
import Cart from '../Cart/Cart';
import IconCategory from '../IconCategory/IconCategory';


const CategoryPreview = ({ title, path, TitleIcon, items, IsIcon }) => {
    
    
    return (
        <CategoryWrapper>
            <Flex>
                <Title>{title}</Title>
                <TitleIcon fontSize="medium" />
            </Flex>
            <Flex>
                {
                    IsIcon ? (
                        <IconCategory/>
                    ) : (
                            items.map((item, i) => (
                                <Cart key={i} path={path} {...item} />
                            ))
                        )
                }
            </Flex>
            
        </CategoryWrapper>
    )
}

export default CategoryPreview;
