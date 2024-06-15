import { Meta, StoryObj } from '@storybook/react';
import CharacterList from './CharacterList';
import { withRouter } from 'storybook-addon-remix-react-router';
import Layout from '../../components/layout/Layout';

const meta: Meta<typeof CharacterList> = {
	title: 'views/CharacterList',
	component: CharacterList,
	tags: ['autodocs'],
	decorators: [
		Story => (
			<Layout>
				<Story />
			</Layout>
		),
		withRouter,
	],
	parameters: {
		docs: {
			page: () => <CharacterListDocumentation />,
		},
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Characters: Story = {
	args: {},
};


import React from 'react';
import { Controls, Primary } from '@storybook/blocks';
import useLanguages from '../../hooks/useLanguages/useLanguages';

const CharacterListDocumentation = () => {
    const { Switch, language } = useLanguages();

    return (
        <>
            {Switch}
            {language === 'en' ? (
                <div>
                    <h1>CharacterList</h1>
                    <p>
                        The <code>CharacterList</code> component displays a list of characters with a filter option.
                    </p>

                    <h3>Props</h3>
                    <ul>
                        <li>
                            <strong>isError</strong>: Indicates if there is an error in fetching data.
                        </li>
                        <li>
                            <strong>isLoading</strong>: Indicates if the data is currently loading.
                        </li>
                        <li>
                            <strong>characterFilter</strong>: The filtered character data to be displayed.
                        </li>
                    </ul>

                    <h3>Example Usage</h3>
                    <pre>
                        <code>
                            <Primary />
                            <Controls />
                        </code>
                    </pre>

                    <h3>Additional Notes</h3>
                    <ul>
                        <li>
                            The <code>CharacterList</code> component uses <code>StatusWrapper</code> to handle loading and error states.
                        </li>
                        <li>
                            It includes a <code>Filter</code> component for filtering the characters.
                        </li>
                    </ul>

                    <h3>Testing</h3>
                    <p>
                        To ensure the quality and proper functioning of the <code>CharacterList</code> component, consider the following tests:
                    </p>
                    <ul>
                        <li>
                            <strong>Rendering</strong>: Verifies that the component renders correctly with the provided data.
                        </li>
                        <li>
                            <strong>Filtering</strong>: Ensures the filter functionality works as expected.
                        </li>
                        <li>
                            <strong>Error Handling</strong>: Checks that errors are handled and displayed properly.
                        </li>
                    </ul>
                </div>
            ) : (
                <div>
                    <h1>CharacterList</h1>
                    <p>
                        El componente <code>CharacterList</code> muestra una lista de personajes con una opción de filtro.
                    </p>

                    <h3>Props</h3>
                    <ul>
                        <li>
                            <strong>isError</strong>: Indica si hay un error al obtener los datos.
                        </li>
                        <li>
                            <strong>isLoading</strong>: Indica si los datos se están cargando actualmente.
                        </li>
                        <li>
                            <strong>characterFilter</strong>: Los datos filtrados de los personajes a mostrar.
                        </li>
                    </ul>

                    <h3>Ejemplo de Uso</h3>
                    <pre>
                        <code>
                            <Primary />
                            <Controls />
                        </code>
                    </pre>

                    <h3>Notas Adicionales</h3>
                    <ul>
                        <li>
                            El componente <code>CharacterList</code> utiliza <code>StatusWrapper</code> para manejar los estados de carga y error.
                        </li>
                        <li>
                            Incluye un componente <code>Filter</code> para filtrar los personajes.
                        </li>
                    </ul>

                    <h3>Pruebas</h3>
                    <p>
                        Para asegurar la calidad y el correcto funcionamiento del componente <code>CharacterList</code>, considera las siguientes pruebas:
                    </p>
                    <ul>
                        <li>
                            <strong>Renderización</strong>: Verifica que el componente se renderiza correctamente con los datos proporcionados.
                        </li>
                        <li>
                            <strong>Filtrado</strong>: Asegura que la funcionalidad de filtrado funciona como se espera.
                        </li>
                        <li>
                            <strong>Manejo de Errores</strong>: Comprueba que los errores se manejan y muestran correctamente.
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};