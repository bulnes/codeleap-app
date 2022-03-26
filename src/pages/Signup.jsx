import Button, { ButtonStyles } from "../components/Button";
import InputText from "../components/InputText";
import Label from "../components/Label";
import Title from "../components/Title";
import ActionButtons from "../pageComponents/ActionButtons";
import Card, { CardBody, CardHeader, CardHeaderStyles } from "../pageComponents/Card";
import Container from "../pageComponents/Container";
import FormGroup from "../pageComponents/FormGroup";

export default function Signup() {
  return (
    <Container>
      <Card>
        <CardHeader type={CardHeaderStyles.SIMPLE}>
          <Title text='Welcome to CodeLeap network!' />
        </CardHeader>

        <CardBody>
          <FormGroup>
            <Label text={'Please enter your username'} htmlFor={'signup-username'} />
            <InputText type='text' placeholder='John doe' id='signup-username' name='username' />
          </FormGroup>

          <ActionButtons>
            <Button text={'Enter'} type={ButtonStyles.CONTRAST} />
          </ActionButtons>
        </CardBody>
      </Card>
    </Container>
  )
}