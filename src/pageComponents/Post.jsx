import { ButtonIcon, ButtonIconsTypes } from "../components/Button";
import Content from "../components/Content";
import Signature from "../components/Signature";
import Title, { TitleStyles } from "../components/Title";
import Card, { CardBody, CardHeader, CardStyles } from "./Card";

export default function Post() {
  return (
    <Card type={CardStyles.LARGE}>
      <CardHeader>
        <Title text={'My First Post at CodeLeap Network!'} type={TitleStyles.CONTRAST} />

        <div className='grid grid-cols-2 gap-8'>
          <ButtonIcon text={'Delete'} type={ButtonIconsTypes.DELETE} />
          <ButtonIcon text={'Edit'} type={ButtonIconsTypes.EDIT} />
        </div>
      </CardHeader>

      <CardBody>
        <Signature>
          <span>@Victor</span>
          <span>25 minutes ago</span>
        </Signature>

        <Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam et nemo quidem! Aut molestiae
            consectetur animi repellendus, alias facilis eligendi aperiam quod dolorum omnis tempore eveniet,
            delectus optio impedit quos.

            <br /><br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tenetur veniam voluptates, eos dolore
            autem ratione officiis dicta sequi minus, voluptatum fugiat dignissimos ipsum repudiandae nemo
            soluta odio atque explicabo!
          </p>
        </Content>
      </CardBody>
    </Card>
  )
}