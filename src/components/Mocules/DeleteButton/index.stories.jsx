import React from "react";
import { action } from '@storybook/addon-actions';
import DeleteButton from ".";

export default {
    title: 'atoms/deletebutton',
    component: DeleteButton
}

export const deletebutton = () => <DeleteButton onClick={action('削除ボタンがクリックされました')} />