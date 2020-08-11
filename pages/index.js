import Layout from '../components/Layout';
import { Alert } from 'react-bootstrap';

const Home = () => {
  return (
    <Layout>
      <div>
        <Alert variant="info">
          <Alert.Heading>Bienvenido a DocTransformer</Alert.Heading>
          <p>
            DocTransformer es una herramienta que te permite convertir documentos a PDF.
          </p>
          <hr />
          <p className="mb-0">
            Esta herramienta es completamente gratuita
          </p>
        </Alert>
      </div>
    </Layout>
  );
}

export default Home;

