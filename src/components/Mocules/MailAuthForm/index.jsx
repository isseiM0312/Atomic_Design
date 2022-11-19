import React from "react";
import styles from './style.module.scss';
import { PrimaryButton } from "../../Atoms/Button";
import TextBox from "../../Atoms/TextBox";

const MailAuthForm = ({onSubmit,...props}) => (
    <form {...props}>
        <p className={styles.textbox}>メールを入力してください</p>
        <div>
            <TextBox className={styles.textbox}></TextBox>
            <PrimaryButton onClick = { onSubmit }>認証メール送信</PrimaryButton>
        </div>
    </form>
)

export default MailAuthForm;