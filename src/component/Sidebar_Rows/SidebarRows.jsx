import React from 'react'
import { Click, RowSection, Title,RowWrapper } from '.'
const SidebarRows = ({Icon,title,ifclick,toggle}) => {
    return (
        <>
        <RowSection onClick={toggle} >
            <Click ifclick={ifclick} />
            <RowWrapper ifclick={ifclick} >
                <Icon fontSize="small" ifclick={ifclick} />
                <Title ifclick={ifclick} > {title}</Title>
            </RowWrapper>
        </RowSection>
        </>
    )
}

export default SidebarRows
