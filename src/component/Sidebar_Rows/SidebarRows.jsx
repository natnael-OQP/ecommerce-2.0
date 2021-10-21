import React from 'react'
import { Click, RowSection, Title,RowWrapper } from '.'
const SidebarRows = ({Icon,title,isClick,toggle}) => {
    return (
        <>
        <RowSection onClick={toggle} >
            <Click isClick={isClick} />
            <RowWrapper isClick={isClick} >
                <Icon fontSize="small" isClick={isClick} />
                <Title isClick={isClick} > {title}</Title>
            </RowWrapper>
        </RowSection>
        </>
    )
}

export default SidebarRows
