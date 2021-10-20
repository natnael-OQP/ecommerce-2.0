import React from 'react'
import {
    CategoryWrapper,
    Title,
    Flex,
} from '.'
import Shop_Data from '../../Data/Shop.Data';
import Cart from '../Cart/Cart';
import IconCategory from '../IconCategory/IconCategory';


const CategoryPreview = ({title,TitleIcon,IsIcon}) => {
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
                        Shop_Data.map(({ title, items }) => (
                            items.map(({ name }) => (
                                <Cart image={name} />
                            ))
                        ))
                    )
                }
            </Flex>
            
        </CategoryWrapper>
    )
}

export default CategoryPreview;
