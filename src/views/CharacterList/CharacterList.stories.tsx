import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/test';
import { withRouter } from 'storybook-addon-remix-react-router';
import Layout from '../../components/layout/Layout';
import useLanguages from '../../hooks/useLanguages/useLanguages';
import CharacterList from './CharacterList';

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
	play: async ({ canvasElement }) => {
		const characterListElement = canvasElement.querySelector('.character-list');
		expect(characterListElement).toBeInTheDocument();

		const filterElement = characterListElement?.querySelector('.filter');
		expect(filterElement).toBeInTheDocument();

		const errorMessage = characterListElement?.querySelector('.status-wrapper');
		expect(errorMessage).not.toBeInTheDocument();
	},
};

const CharacterListDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>CharacterList</h1>
					<p>
						The <code>CharacterList</code> component displays a list of characters with a filter
						option.
					</p>

					<h3>Props</h3>
					<p>This component does not receive any props.</p>

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
							The <code>CharacterList</code> component uses <code>StatusWrapper</code> to handle
							loading and error states.
						</li>
						<li>
							It includes a <code>Filter</code> component for filtering the characters.
						</li>
					</ul>

					<h3>Testing</h3>
					<p>
						To ensure the quality and proper functioning of the <code>CharacterList</code>{' '}
						component, consider the following tests:
					</p>
					<ul>
						<li>
							<strong>Rendering</strong>: Verifies that the component renders correctly with the
							provided data.
						</li>
						<li>
							<strong>Filtering</strong>: Ensures the filter functionality works as expected.
						</li>
						<li>
							<strong>Error Handling</strong>: Checks that errors are handled and displayed
							properly.
						</li>
						<li>
							<strong>Loading State</strong>: Verifies that the loading state is displayed correctly
							while data is being fetched.
						</li>
					</ul>
				</div>
			) : (
				<div>
					<h1>CharacterList</h1>
					<p>
						El componente <code>CharacterList</code> muestra una lista de personajes con una opción
						de filtro.
					</p>

					<h3>Props</h3>
					<p>Este componente no recibe ninguna prop.</p>

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
							El componente <code>CharacterList</code> utiliza <code>StatusWrapper</code> para
							manejar los estados de carga y error.
						</li>
						<li>
							Incluye un componente <code>Filter</code> para filtrar los personajes.
						</li>
					</ul>

					<h3>Pruebas</h3>
					<p>
						Para asegurar la calidad y el correcto funcionamiento del componente{' '}
						<code>CharacterList</code>, considera las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización</strong>: Verifica que el componente se renderiza correctamente
							con los datos proporcionados.
						</li>
						<li>
							<strong>Filtrado</strong>: Asegura que la funcionalidad de filtrado funciona como se
							espera.
						</li>
						<li>
							<strong>Manejo de Errores</strong>: Comprueba que los errores se manejan y muestran
							correctamente.
						</li>
						<li>
							<strong>Estado de Carga</strong>: Verifica que el estado de carga se muestra
							correctamente mientras se obtienen los datos.
						</li>
					</ul>
				</div>
			)}
		</>
	);
};
