import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';
import Layout from '../../components/layout/Layout';
import useLanguages from '../../hooks/useLanguages/useLanguages';
import CharacterDetail from './CharacterDetail';

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

export const CharacterDetails: Story = {};

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

					<h3>Props</h3>
					<ul>
						<li>
							<strong>comics</strong>: List of comics related to the character.
						</li>
						<li>
							<strong>name</strong>: Name of the character.
						</li>
						<li>
							<strong>image</strong>: Image of the character.
						</li>
						<li>
							<strong>favorite</strong>: Boolean indicating if the character is marked as favorite.
						</li>
						<li>
							<strong>description</strong>: Description of the character.
						</li>
						<li>
							<strong>id</strong>: Unique identifier of the character.
						</li>
						<li>
							<strong>isError</strong>: Boolean indicating if there was an error fetching the data.
						</li>
						<li>
							<strong>isLoading</strong>: Boolean indicating if the data is still loading.
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
							The <code>CharacterDetail</code> component uses the <code>useFilterData</code> hook to
							fetch and filter character data.
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

					<h3>Props</h3>
					<ul>
						<li>
							<strong>comics</strong>: Lista de cómics relacionados con el personaje.
						</li>
						<li>
							<strong>name</strong>: Nombre del personaje.
						</li>
						<li>
							<strong>image</strong>: Imagen del personaje.
						</li>
						<li>
							<strong>favorite</strong>: Booleano que indica si el personaje está marcado como
							favorito.
						</li>
						<li>
							<strong>description</strong>: Descripción del personaje.
						</li>
						<li>
							<strong>id</strong>: Identificador único del personaje.
						</li>
						<li>
							<strong>isError</strong>: Booleano que indica si hubo un error al obtener los datos.
						</li>
						<li>
							<strong>isLoading</strong>: Booleano que indica si los datos aún se están cargando.
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
							El componente <code>CharacterDetail</code> utiliza el hook <code>useFilterData</code>{' '}
							para obtener y filtrar los datos del personaje.
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
