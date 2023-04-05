import { Container, Content, Concratulations } from './App.styled';
import Sidebar from 'components/Sidebar';
import Table from 'components/Table';

function App() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Concratulations>Hello Evano 👋🏼</Concratulations>
        <Table />
      </Content>
    </Container>
  );
}

export default App;
