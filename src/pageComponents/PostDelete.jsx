import Button from "../components/Button";
import Title from "../components/Title";
import ActionButtons from "./ActionButtons";
import Card, { CardBody } from "./Card";

export default function PostDelete() {
  return (
    <Card>
      <CardBody>
        <div className='grid grid-rows-2 gap-12'>
          <Title text={'Are you sure you want to delete this item?'} />

          <ActionButtons>
            <Button text={'Cancel'} />
            <Button text={'Ok'} />
          </ActionButtons>
        </div>
      </CardBody>
    </Card>
  )
}