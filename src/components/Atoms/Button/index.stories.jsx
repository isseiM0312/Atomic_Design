import { Button ,PrimaryButton, WarningButton} from ".";

export default {
    title:'atoms/button',
    component:Button
}

export const normal = () => <Button></Button>
export const primary = () => <PrimaryButton></PrimaryButton>
export const warning = () => <WarningButton></WarningButton>