import Button, { ButtonStyles } from '../components/Button'
import InputText from '../components/InputText'
import Label from '../components/Label'
import Card from '../pageComponents/Card'

export default function Main() {
  return (
    <div>
      <Card>
        <Button text="Cancel" type={ButtonStyles.DEFAULT} /> <br /><br />
        <Button text="Enter" type={ButtonStyles.CONTRAST} /> <br /><br />
        <Button text="ok" type={ButtonStyles.Default} /> <br /><br />
        <Button text="Create" type={ButtonStyles.CONTRAST} /> <br /><br />

        <Label text='Please enter your username' />
        <InputText placeholder='John Doe' />

        <Label text='Title' />
        <Label text='Content' />
      </Card>

    </div>
  )
}