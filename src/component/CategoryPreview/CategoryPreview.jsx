import React from 'react'
import {
    CategoryWrapper,
    Title,
    Flex,
} from '.'
import Shop_Data from '../../Data/Shop.Data';
import Cart from '../Cart/Cart';
import IconCategory from '../IconCategory/IconCategory';


const CategoryPreview = ({title,path,TitleIcon,items,IsIcon}) => {
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
