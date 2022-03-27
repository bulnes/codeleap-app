import Button, { ButtonStyles } from "../components/Button";
import InputText from "../components/InputText";
import InputTextArea from "../components/InputTextArea";
import Label from "../components/Label";
import Title from "../components/Title";
import ActionButtons from "./ActionButtons";
import Card, { CardBody, CardHeader, CardHeaderStyles, CardStyles } from "./Card";
import FormGroup from "./FormGroup";

export default function PostCreate() {
  return (
    <div className="mb-9">
      <Card type={CardStyles.LARGE}>
        <CardHeader type={CardHeaderStyles.SIMPLE}>
          <Title text={'What’s on your mind?'} />
        </CardHeader>

        <CardBody>
          <FormGroup>
            <Label text={'Title'} htmlFor={'title'} />
            <InputText type='text' placeholder='Hello world' id='title' name='title' />
          </FormGroup>

          <FormGroup>
            <Label text={'Content'} htmlFor={'content'} />
            <InputTextArea placeholder='Content here' id='content' name='content' />
          </FormGroup>

          <ActionButtons>
            <Button text={'Create'} type={ButtonStyles.CONTRAST} />
          </ActionButtons>
        </CardBody>
      </Card>
    </div>
  )
}