
// import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
// import PrimeraApp from "../PrimeraApp"
import CounterApp from "../CounterApp"





describe('Prueba de <PrimerApp />', () => { 
    // let wrapper;
    let wrapper= shallow( <CounterApp />);

    
    beforeEach(() => {
        wrapper = shallow( <CounterApp />);
 
    })
    
    test('debe de mostrar <CounterApp /> correctamente', () => { 
        //  const saludo = 'Saludo requerido';
         

         expect( wrapper ).toMatchSnapshot();

        //  createSerialazer();

     });

     test('debe de mostar el valor 10 por defecto', () => { 
         const valor = 10;
        

         const wrapper = shallow( <CounterApp 
            valor = {valor}
            
             />);

        //  const textoParrafo = wrapper.find('h2').first().text();
        //  const textoParrafo = wrapper.find('p').text();
        const counterText = wrapper.find('h2').text().trim();
        //  console.log(textoParrafo);
        console.log(counterText);

         expect( counterText).toBe(`${10}`)

      });

      test('debe Incrementar con boton +1', () => { 
        //   const btnwrapper = wrapper.find('button').first();
        //   const btn1 = wrapper.find('button').at(0); 
        //   console.log(btn1.text());
        //   console.log(btn1.html());
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
         expect( counterText).toBe(`11`)
        // expect( counterText).toBe(`${11}`)

       });

      test('debe Incrementar con boton -1', () => { 
    
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
         expect( counterText).toBe(`9`)
        // expect( counterText).toBe(`${11}`)

       });

       test('Debe de colocar el valor por defecto on el btn reset', () => { 
           const wrapper = shallow( <CounterApp value= { 102 }/>);

           wrapper.find('button').at(0).simulate('click');
           wrapper.find('button').at(0).simulate('click');
           wrapper.find('button').at(1).simulate('click');

           const counterText = wrapper.find('h2').text().trim();

           expect ( counterText ).toBe('105');

        })
 })

