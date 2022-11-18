import React from "react";
import moment from "moment";
import 'moment/locale/ja';
import { isValidDateValue } from "@testing-library/user-event/dist/utils";

export const TimePresenter = props => <time {...props}></time>

export const TimeContainer = ({
    presenter,
    children: value,
    dateTime,
    format = 'MM月DD日(ddd)HH:mm',
    ...props
}) => {
    value = parseInt(value, 10)

    var children;
    if (!isValid(value)) {
        children = '有効な時間表現ではありません'
    } else {
        children = formatDatetime(value, format)
    }

    if (!dateTime) {
        dateTime = formatDatetime(value);
    }

    return presenter({ children, dateTime, ...props })
}

const Time = props => (
    <TimeContainer presenter={presenterProps => <TimePresenter {...presenterProps}></TimePresenter>} {...props}>

    </TimeContainer>
)

export default Time;

moment.locale();

function isValid(unixtime) {
    return moment(unixtime, 'x', true).isValid()
}

function formatDatetime(datetime, format = 'YYYY-MM-DDTHH:mm') {
    return moment(datetime).format(format)
}
