
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import PrimeraApp from "../PrimeraApp"





describe('Prueba de <PrimerApp />', () => { 
    test('debe de mostrar <PrimeraApp /> correctamente', () => { 
         const saludo = 'Saludo requerido';
         const wrapper = shallow( <PrimeraApp saludo = {saludo} />);

         expect( wrapper ).toMatchSnapshot();

        //  createSerialazer();

     });

     test('debe de mostar el subtitulo enviado por props', () => { 
         const saludo = 'Saludo en prueba subtra';
         const subtitulo = 'Soy un subtitule';

         const wrapper = shallow( <PrimeraApp 
            saludo = {saludo}
            subtitulo = {subtitulo}
             />);

         const textoParrafo = wrapper.find('p').first().text();
        //  const textoParrafo = wrapper.find('p').text();
         console.log(textoParrafo);

         expect( textoParrafo).toBe(subtitulo)

      });
 })

