import React from 'react';
import {
    Computer, FireExtinguisher,
} from '@mui/icons-material';

import {
    MainWrapper
} from '.'
import CategoryPreview from '../CategoryPreview/CategoryPreview'

const MainBody = () => {
    return (
        <MainWrapper>
            <CategoryPreview title="Popular Category" TitleIcon={Computer} IsIcon />
            <CategoryPreview title="Popular Category" TitleIcon={FireExtinguisher}  />
            <CategoryPreview title="Popular Category" TitleIcon={FireExtinguisher}  />
            <CategoryPreview title="Popular Category" TitleIcon={FireExtinguisher}  />
        </MainWrapper>
    )
}

export default MainBody
