import React from "react";
import  TrashCanIcon  from ".";
import { action } from '@storybook/addon-actions';

export default {
    title:'atoms/TrashIcon',
    component:TrashCanIcon
}

export const icon = () => <TrashCanIcon onClick={action('hey')}/>