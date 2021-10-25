import React from 'react'
import {
    CategoryWrapper,
    Title,
    Flex,
    IconSpan,
} from '.';
import Cart from '../Cart/Cart';
import IconCategory from '../IconCategory/IconCategory';


const CategoryPreview = ({title,path,TitleIcon,items,IsIcon}) => {
    return (
        <CategoryWrapper>
            <Flex>
                <Title>{title}</Title>
                <IconSpan>
                    <TitleIcon fontSize="medium" />
                </IconSpan>
            </Flex>
            <Flex>
                {
                    IsIcon ? (
                        <IconCategory/>
                    ) : (
                            items.map((item) => (
                                <Cart path={path} {...item} />
                            ))
                        )
                }
            </Flex>
            
        </CategoryWrapper>
    )
}

export default CategoryPreview;
