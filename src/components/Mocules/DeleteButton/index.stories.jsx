import React from "react";
import { action } from '@storybook/addon-actions';
import DeleteButton from ".";
import { withStyle } from "../../Utils/decorators";

export default {
    title: 'molecules/deletebutton',
    component: DeleteButton
}

export const deletebutton = () => withStyle({margin:'50px'})(<DeleteButton onClick={action('削除ボタンがクリックされました。')}></DeleteButton>)