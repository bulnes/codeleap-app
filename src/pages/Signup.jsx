import Button, { ButtonStyles } from "../components/Button";
import InputText from "../components/InputText";
import Label from "../components/Label";
import Title from "../components/Title";
import ActionButtons from "../pageComponents/ActionButtons";
import Card from "../pageComponents/Card";
import FormGroup from "../pageComponents/FormGroup";

export default function Signup() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-300">
      <Card>
        <Title text='Welcome to CodeLeap network!' />

        <FormGroup>
          <Label text={'Please enter your username'} htmlFor={'signup-username'} />
          <InputText type='text' placeholder='John doe' id='signup-username' name='username' />
        </FormGroup>

        <ActionButtons>
          <Button text={'Enter'} type={ButtonStyles.CONTRAST} />
        </ActionButtons>
      </Card>
    </div>
  )
}