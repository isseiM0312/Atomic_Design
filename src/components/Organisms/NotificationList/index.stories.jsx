import React, { Component } from "react";
import {action} from '@storybook/addon-actions'
import NotificationList from ".";
import image from '../../../images/img.png'

const notifications = [{
    id:0,
    thumbnail: {image},
    title:'コンポーネント',
    channelName : 'UI チャンネル',
    startAt: 1507032000000,
    endAt:1507032000000
}]

export default {
    title: 'organisms/notificationlist',
    component: NotificationList
}

export const list = () => <NotificationList programs={notifications} onClickDelete={action('削除ボタンがクリックされました')}></NotificationList>