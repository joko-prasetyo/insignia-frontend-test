import "./App.css";
import Container from '@material-ui/core/Container';
import Header from "./templates/Header";
import NavigationMenu from './templates/NavigationMenu';
import ContentSection from './templates/ContentSection';
import TestGrid from './templates/TestGrid';

function App() {
  return (
    <Container>
      <Header />
      <NavigationMenu />
      <ContentSection />
    </Container>
  );
}

export default App;
