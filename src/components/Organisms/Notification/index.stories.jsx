import React from "react";
import {action} from '@storybook/addon-actions'
import Notification from ".";

const notification = {
    id:0,
    thumbnail : '',
    title:'コンポーネント指向でUIを設計しよう',
    channelName:'UIチャンネル',
    startAt: 1507032000000,
    endAt: 1507035600000
};

export default {
    title: 'organisms/notification',
    component:Notification
}

export const notific = () => <Notification program={notification} onClickDelete={action('削除ボタンがクリックされました')}></Notification>