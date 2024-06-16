import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';
import Layout from '../../components/layout/Layout';
import useLanguages from '../../hooks/useLanguages/useLanguages';
import CharacterDetail from './CharacterDetail';
import { expect, within } from '@storybook/test';

const meta: Meta<typeof CharacterDetail> = {
	title: 'views/CharacterDetail',
	component: CharacterDetail,
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
			page: () => <CharacterDetailDocumentation />,
		},
		reactRouter: reactRouterParameters({
			location: {
				pathParams: { characterId: 1010354 },
			},
			routing: { path: '/character/:characterId' },
		}),
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CharacterDetails: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const characterDetail = canvas.getByTestId('character-detail');
		expect(characterDetail).toBeInTheDocument();

		const errorComponent = canvas.getByTestId('status-wrapper');
		expect(errorComponent).toBeInTheDocument();

		const renderComics = canvas.getByTestId('detail-cards');
		expect(canvas.getByText('COMICS')).toBeInTheDocument();
		expect(renderComics).toBeInTheDocument();
	},
};

const CharacterDetailDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>CharacterDetail</h1>
					<p>
						The <code>CharacterDetail</code> component displays detailed information about a
						character, including their summary and related comics.
					</p>

					<h3>Overview</h3>
					<p>
						The <code>CharacterDetail</code> component fetches and displays detailed information
						about a specific character using internal data fetching logic.
					</p>

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
							The <code>CharacterDetail</code> component uses the <code>useFilterData</code> hook
							internally to fetch and filter character data.
						</li>
						<li>
							It also uses the <code>StatusWrapper</code> component to handle loading and error
							states.
						</li>
					</ul>

					<h3>Testing</h3>
					<p>
						To ensure the quality and proper functioning of the <code>CharacterDetail</code>{' '}
						component, consider the following tests:
					</p>
					<ul>
						<li>
							<strong>Rendering</strong>: Verifies that the component renders correctly with the
							provided data.
						</li>
						<li>
							<strong>Error Handling</strong>: Ensures the component displays an error message when
							there is an error fetching the data.
						</li>
						<li>
							<strong>Loading State</strong>: Checks that the loading state is displayed correctly
							while the data is being fetched.
						</li>
					</ul>
				</div>
			) : (
				<div>
					<h1>CharacterDetail</h1>
					<p>
						El componente <code>CharacterDetail</code> muestra información detallada sobre un
						personaje, incluyendo su resumen y cómics relacionados.
					</p>

					<h3>Visión General</h3>
					<p>
						El componente <code>CharacterDetail</code> obtiene y muestra información detallada sobre
						un personaje específico utilizando lógica interna para la obtención de datos.
					</p>

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
							El componente <code>CharacterDetail</code> utiliza el hook <code>useFilterData</code>{' '}
							internamente para obtener y filtrar los datos del personaje.
						</li>
						<li>
							También usa el componente <code>StatusWrapper</code> para manejar los estados de carga
							y error.
						</li>
					</ul>

					<h3>Pruebas</h3>
					<p>
						Para asegurar la calidad y el correcto funcionamiento del componente{' '}
						<code>CharacterDetail</code>, considera las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización</strong>: Verifica que el componente se renderiza correctamente
							con los datos proporcionados.
						</li>
						<li>
							<strong>Manejo de Errores</strong>: Asegura que el componente muestra un mensaje de
							error cuando hay un problema al obtener los datos.
						</li>
						<li>
							<strong>Estado de Carga</strong>: Comprueba que el estado de carga se muestra
							correctamente mientras se obtienen los datos.
						</li>
					</ul>
				</div>
			)}
		</>
	);
};
