import Title, { TitleStyles } from '../components/Title'
import Card, { CardBody, CardHeader, CardStyles } from '../pageComponents/Card'
import Container from '../pageComponents/Container'

export default function Main() {
  return (
    <Container>
      <Card type={CardStyles.LARGE}>
        <CardHeader>
          <Title text={'CodeLeap Network'} type={TitleStyles.CONTRAST} />
        </CardHeader>

        <CardBody>
          <p>Teste</p>
        </CardBody>
      </Card>
    </Container>
  )
}