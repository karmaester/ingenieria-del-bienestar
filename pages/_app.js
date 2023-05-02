import "../styles/scss/style.scss";
import Layout from "../layout/Layout";
import DocumentMeta from 'react-document-meta';

function MyApp({ Component, pageProps }) {

  const meta = {
    author: 'Julio Rojas Ortega',
    'content-language': 'es',
    robots: 'all',
    title: 'Ginecologo Puerto Montt. Dr Julio Rojas. Ecografia. Doppler. Embarazo. Ecografia semana 11- 14 .Toma de pap. Especialista en salud femenina',
    description: 'Ofrecemos servicios de salud femenina de alta calidad, que incluyen evaluación anual  de rutina, diagnóstico y tratamiento de enfermedades prevalentes de la mujer. Control de embarazo de Alto y bajo riesgo',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'ginecología,ginecologo,embarazo,ecografia embarazo,ecografia TV,PAP,menopausia,dolor pélvico,planificación familiar,anticonceptivo,Mirena'
      }
    }
  };

  return (
    <DocumentMeta {...meta}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DocumentMeta>
  );
}

export default MyApp;
